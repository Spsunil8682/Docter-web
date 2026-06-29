import type { Metadata, Viewport } from "next";
import { dmSans, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Docter — Online Doctor Consultations",
    template: "%s | Docter",
  },
  description:
    "Book online doctor consultations, follow-ups and personalised care from the comfort of your home.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    title: "Docter — Online Doctor Consultations",
    description:
      "Book online doctor consultations, follow-ups and personalised care from the comfort of your home.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF7E2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(dmSans.variable, poppins.variable)}>
      <body>
        <a
          href="#main"
          className="focus:bg-ink sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
