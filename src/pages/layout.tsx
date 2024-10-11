import { ReactNode } from "react";
import { Bevan } from "next/font/google";

const inter = Bevan({
  weight: "400",
  subsets: ["latin"],
});
export default function Layout({ children }: { children: ReactNode }) {
  return <main className={inter.className}>{children}</main>;
}
