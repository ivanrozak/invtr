import {
  Inter,
  Roboto_Mono,
  Arimo,
  Cormorant_Garamond,
  Laila,
} from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const laila = Laila({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const schnyder = localFont({
  src: "./fonts/SchnyderMLight.woff2",
  display: "swap",
});

export const canela = localFont({
  src: "./fonts/Canela-Medium-Trial.woff2",
  display: "swap",
});

export const ivy = localFont({
  src: "./fonts/IvyMode-Light.woff2",
  display: "swap",
});

export const ivyThin = localFont({
  src: "./fonts/IvyMode-Thin.woff2",
  display: "swap",
});

export const gothic = localFont({
  src: "./fonts/EngraversGothic.woff2",
  display: "swap",
});

export const anglezScript = localFont({
  src: "./fonts/Anglez-Script.woff2",
  display: "swap",
});

export const analogue = localFont({
  src: "./fonts/Analogue.woff",
  display: "swap",
});
