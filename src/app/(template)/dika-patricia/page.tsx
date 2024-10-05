import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://invitary.com"),
  title: {
    default: "Dika - Patricia | Invitary",
    template: `%s | invitary.com`,
  },
  description: "Undangan Pernikahan Dika dan Patricia",
  keywords: "keywords",
  openGraph: {
    type: "website",
    url: "https://invitary.com",
    title: "Dika - Patricia | Invitary",
    description: "Undangan Pernikahan Dika dan Patricia",
    siteName: "Invitary",
    images: [{ url: "https://invitary.com/apple-touch-icon.png?" }],
  },
};

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">HomePage</div>
  );
};

export default HomePage;
