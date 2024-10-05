import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { geistSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://invitary.com"),
  title: {
    default: "Invitary | Next step of website invitations",
    template: `%s | invitary.com`,
  },
  description: "Next step of website invitations",
  keywords: "keywords",
  openGraph: {
    type: "website",
    url: "https://invitary.com",
    title: "Invitary | Next step of website invitations",
    description: "Next step of website invitations",
    siteName: "Invitary",
    images: [{ url: "https://invitary.com/apple-touch-icon.png?" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
