import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "stanneschurch.org";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = `${protocol}://${host}`;
  const title = "St. Anne's Episcopal Church | Fremont, CA";
  const description = "A welcoming Episcopal community in Fremont, California. Join us Sundays at 10:00 AM in person or online.";
  const image = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: { title, description, type: "website", url: origin, images: [{ url: image, width: 1200, height: 630, alt: "St. Anne's Episcopal Church — There is a place for you here." }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
