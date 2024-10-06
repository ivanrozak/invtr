import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { analogue, ivy } from "@/app/fonts";
import AudioSection from "@/components/commons/AudioSection";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
const Countdown = dynamic(() => import("@/components/commons/Countdown"), {
  ssr: false,
});

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

const LeftHeroSection = () => {
  return (
    <div
      className="fixed top-0 z-10 h-screen hidden md:block w-[calc(100%-510px)] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://storage.googleapis.com/invitary/_ELP2446.jpg)",
      }}
    >
      <div className="relative w-full h-full flex items-end overflow-hidden">
        {/* <video
          src="https://groovepublic.com/wp-content/uploads/2023/01/flars-online-video-cutter.com_.mp4"
          muted
          autoPlay
          playsInline
          loop
          className="absolute top-0 w-full h-full object-cover object-center opacity-20"
        /> */}
        <div className="p-8 mt-auto text-white z-10">
          <div className={cn("font-light", ivy.className)}>The Wedding Of</div>
          <h1
            className={cn(analogue.className, {
              "text-4xl tracking-wide py-2": true,
            })}
          >
            Dika & Patricia
          </h1>
          <div className={cn("font-light", ivy.className)}>
            Saturday, November 02 2024
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={"https://storage.googleapis.com/invitary/_ELP2430.jpg"}
        fill
        className="object-cover object-center"
        alt="oke"
        unoptimized
      />
      <div className="absolute w-full h-screen top-0 z-[1] text-white/80 bg-black/20 flex flex-col items-center justify-between">
        <div className="text-center pt-16">
          <p className="uppercase text-sm font-light">
            You're invited to our wedding
          </p>
          <h1
            className={cn(analogue.className, {
              "text-4xl md:text-6xl tracking-wide mt-3": true,
            })}
          >
            Dika & Patricia
          </h1>
          <p className="text-sm font-light px-6 mt-4">
            No one has ever seen God; but if we love one another, God lives in
            us and his love is made complete in us.
          </p>
        </div>
        <div className="p-8 pb-16 text-center">
          <Countdown />
          <div className="mt-8 mb-12 animate-bounce">
            <div className="mx-auto w-fit mb-3">
              <ChevronUp />
            </div>
            <p className="uppercase text-sm font-light">Sweep up</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TemplatePage = () => {
  return (
    <div>
      <AudioSection audioUrl="https://storage.googleapis.com/invitary/Tim%20Halperin%20-%20Forever%20Starts%20Today%20(Official%20Audio)%20-%20Tim%20Halperin%20(youtube).mp3" />
      <LeftHeroSection />
      <div className="w-full md:max-w-[510px] ml-auto md:pl-[0.3px]">
        <HeroPage />
      </div>
    </div>
  );
};

export default TemplatePage;
