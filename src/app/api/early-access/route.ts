import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.EARLY_ACCESS_WEBHOOK_URL || "https://n8n.nil.flare.my.to/webhook-test/72cee271-0b92-43e8-b88d-f755e9be7b37";
    const webhookSecret = process.env.EARLY_ACCESS_WEBHOOK_SECRET || "n8n-nil-sree-ai-early-access-2026";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": webhookSecret,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.warn("n8n webhook response status:", response.status);
    }

    return NextResponse.json({ success: true, status: response.status });
  } catch (error) {
    console.error("Error proxying early access request to n8n webhook:", error);
    // Return success to the client so user workflow is uninterrupted
    return NextResponse.json({ success: true, proxiedError: true });
  }
}
