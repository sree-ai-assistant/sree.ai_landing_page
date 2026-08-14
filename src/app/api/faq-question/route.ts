import { NextResponse } from "next/server";

// Rate limiting in-memory storage for FAQ Question submission
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const RATE_LIMIT_MAX = 5; // Maximum 5 questions
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minute window

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp.trim();
  }
  return "127.0.0.1";
}

function checkRateLimit(ip: string): { limited: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (rateLimitStore.size > 5000) {
    for (const [key, val] of rateLimitStore.entries()) {
      if (now > val.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
    return { limited: true, retryAfterSeconds };
  }

  record.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const { limited, retryAfterSeconds } = checkRateLimit(clientIp);

  if (limited) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many question submissions from your IP. Please wait a few minutes before trying again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": retryAfterSeconds.toString(),
        },
      }
    );
  }

  try {
    const body = await request.json();

    const webhookUrl =
      process.env.FAQ_QUESTION_WEBHOOK_URL ||
      process.env.EARLY_ACCESS_WEBHOOK_URL ||
      "https://n8n.nil.flare.my.to/webhook/72cee271-0b92-43e8-b88d-f755e9be7b37";

    const webhookSecret =
      process.env.EARLY_ACCESS_WEBHOOK_SECRET || "n8n-nil-sree-ai-early-access-2026";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": webhookSecret,
      },
      body: JSON.stringify({
        request_type: "FaqQuestion",
        ...body,
        client_ip: clientIp,
      }),
    });

    if (!response.ok) {
      console.warn("n8n FAQ webhook response status:", response.status);
    }

    return NextResponse.json({ success: true, status: response.status });
  } catch (error) {
    console.error("Error proxying FAQ question request to n8n webhook:", error);
    return NextResponse.json({ success: true, proxiedError: true });
  }
}
