"use client";

import React, { useEffect } from "react";
import posthog from "posthog-js";

interface PostHogProviderProps {
  children: React.ReactNode;
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (posthogKey) {
      const isLocal = typeof window !== "undefined" && (
        window.location.hostname === "localhost" || 
        window.location.hostname === "127.0.0.1"
      );

      posthog.init(posthogKey, {
        api_host: posthogHost,
        // Enable cross-subdomain cookie tracking across sreeai.qzz.io & app.sreeai.qzz.io in prod
        cross_subdomain_cookie: !isLocal,
        person_profiles: "always",
        capture_pageview: true,
        loaded: (ph) => {
          if (process.env.NODE_ENV === "development") ph.debug();
        },
        session_recording: {
          maskAllInputs: false,
        },
      });
    } else {
      console.info("ℹ️ PostHog: NEXT_PUBLIC_POSTHOG_KEY is not defined in environment variables. Provide NEXT_PUBLIC_POSTHOG_KEY in .env.local to start tracking.");
    }
  }, []);

  return <>{children}</>;
}
