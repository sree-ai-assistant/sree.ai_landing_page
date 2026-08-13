"use client";

import React from "react";
import CookieConsent from "./CookieConsent";

interface PostHogProviderProps {
  children: React.ReactNode;
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
