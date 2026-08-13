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
      posthog.init(posthogKey, {
        api_host: posthogHost,
        // Enable cross-subdomain cookie tracking across sreeai.qzz.io & app.sreeai.qzz.io
        cross_subdomain_cookie: true,
        person_profiles: "always",
        capture_pageview: true,
        session_recording: {
          maskAllInputs: false,
        },
      });
    }
  }, []);

  return <>{children}</>;
}
