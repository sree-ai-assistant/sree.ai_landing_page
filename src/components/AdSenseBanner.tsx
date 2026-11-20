"use client";

import React, { useEffect, useRef } from "react";

interface AdSenseBannerProps {
  slotId?: string;
  className?: string;
}

export default function AdSenseBanner({
  slotId = "8396505852",
  className = "",
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Push ad request to Google AdSense
    if (!pushedRef.current && typeof window !== "undefined") {
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
        pushedRef.current = true;
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }
  }, []);

  return (
    <div
      className={`w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-6 px-4 overflow-hidden ${className}`}
    >
      {/* Real Google AdSense Slot */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          backgroundColor: "transparent",
        }}
        data-ad-client="ca-pub-2859422528584446"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
