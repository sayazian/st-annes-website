import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Anne's Episcopal Church | Fremont, CA",
  description: "A welcoming Episcopal community in Fremont, California. Join us Sundays at 10:00 AM in person or online.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
