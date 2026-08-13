import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

export const metadata: Metadata = {
  title: "Sree AI - The Multimodal AI Platform",
  description: "Experience the next generation of AI with Sree Chat, real-time Sree Voice, Sree Image generation, and Sree Video studio.",
  icons: {
    icon: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
    shortcut: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
    apple: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
