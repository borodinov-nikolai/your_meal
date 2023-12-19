import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/src/styles/globals.scss";
import Header from "../components/server/header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your meal",
  description: "Только самые сочные бургеры!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="__next" className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
