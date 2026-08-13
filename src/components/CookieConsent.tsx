"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import posthog from "posthog-js";

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  const initPostHog = () => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (posthogKey && typeof window !== "undefined") {
      const isLocal =
        window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

      if (!posthog.__loaded) {
        posthog.init(posthogKey, {
          api_host: posthogHost,
          cross_subdomain_cookie: !isLocal,
          persistence: "cookie",
          person_profiles: "always",
          capture_pageview: true,
          loaded: (ph) => {
            if (process.env.NODE_ENV === "development") ph.debug();
          },
          session_recording: {
            maskAllInputs: false,
          },
        });
      }
      posthog.opt_in_capturing();
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = localStorage.getItem("sreeai_cookie_consent");
    const consentAtStr = localStorage.getItem("sreeai_cookie_consent_at");
    const consentAt = consentAtStr ? parseInt(consentAtStr, 10) : 0;
    const elapsed = Date.now() - consentAt;

    if (consent === "accepted") {
      if (elapsed >= ONE_YEAR_MS) {
        // 365 days have passed since accept -> Ask for consent again!
        setShowBanner(true);
      } else {
        // Within 365 days -> Enable PostHog & do not show banner
        initPostHog();
        setShowBanner(false);
      }
    } else if (consent === "declined") {
      if (elapsed >= ONE_WEEK_MS) {
        // 7 days (1 week) have passed since decline -> Prompt user again!
        setShowBanner(true);
      } else {
        // Still within 7 days of decline -> Keep banner hidden, do NOT track
        setShowBanner(false);
      }
    } else {
      // First visit (no choice made) -> Show banner, do NOT track yet
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sreeai_cookie_consent", "accepted");
    localStorage.setItem("sreeai_cookie_consent_at", Date.now().toString());
    initPostHog();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("sreeai_cookie_consent", "declined");
    localStorage.setItem("sreeai_cookie_consent_at", Date.now().toString());
    if (typeof window !== "undefined" && posthog.__loaded) {
      posthog.opt_out_capturing();
    }
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md rounded-3xl border border-white/10 bg-[#0d0c19]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-2xl"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            {/* Cookie Icon Badge */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-500/25 text-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              🍪
            </div>

            {/* Title & Body */}
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                We value your privacy
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                We use cookies and analytics to improve your experience, track errors, and understand how you use Sree AI. Your data helps us build a better product.{" "}
                <a
                  href="#faq"
                  className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2 transition duration-150"
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-1">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 px-5 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-200 cursor-pointer text-center"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="flex-1 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-zinc-300 hover:text-white font-semibold text-sm py-3 px-5 transition duration-200 cursor-pointer text-center"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
