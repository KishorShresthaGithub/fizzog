import { ReactNode } from "react";
import localFont from "next/font/local";

const alexandria = localFont({
  src: "./../assets/fonts/Alexandria.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <main className={alexandria.className}>{children}</main>;
}
