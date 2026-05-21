import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Prompt } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const prompt = Prompt({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlayBlay | ร้านบอร์ดเกมออนไลน์ ของแท้ จัดส่งไว",
  description:
    "BlayBlay ร้านบอร์ดเกมออนไลน์ มากกว่า 1,000+ เกม ของแท้ 100% จัดส่งทั่วไทย 1-2 วัน Family Game, Strategy, Party Game และอีกมากมาย",
  keywords:
    "บอร์ดเกม, board game, ร้านบอร์ดเกม, BlayBlay, เกมครอบครัว, strategy game",
  icons: {
    icon: "/blayblay/images/695902101_1505839277847633_6383404664583632494_n.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${prompt.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
