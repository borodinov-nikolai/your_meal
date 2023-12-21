import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/src/styles/globals.scss";
import Header from "../components/server/header";
import Categories from "../components/client/categories";

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
      <body id="__next" className={nunito.className + " bg-[#F9F9F9]"}>
        <Header />
        <div data-tid="categories" className="mt-[30px] lg:mt-10">
          <Categories />
        </div>
        {children}
      </body>
    </html>
  );
}
