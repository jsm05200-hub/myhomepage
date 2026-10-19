import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({ variable: "--font-sans-kr", subsets: ["latin"], weight: ["400", "500", "700"] });
const serif = Noto_Serif_KR({ variable: "--font-serif-kr", subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "가일마을에서 하룻밤 · 체험 예약",
  description: "안동 풍천면 가일마을 1박 2일 — 고택을 걷고, 차를 마시고, 참나물 비빔밥을 함께 만드는 체험 예약",
  // 카톡·SNS 링크 미리보기
  metadataBase: new URL("https://myhomepage-silk.vercel.app"),
  openGraph: {
    title: "가일마을에서 하룻밤",
    description: "고택을 걷고, 차를 마시고, 참나물 비빔밥을 함께 만드는 1박 2일",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>{children}</body>
    </html>
  );
}
