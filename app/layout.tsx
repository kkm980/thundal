import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thundal | Connect Directly with Your Favorite Celebs!",
  description: "Own your own Fan Hub!",
  icons: {
    icon: "/home/marque/mar1.svg",
  },
  openGraph: {
    title: "Thundal | Connect Directly with Your Favorite Celebs!",
    description: "Own your own Fan Hub!",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_REFERRAL_SHARE_URL}/en/airdrop`,
    images: [
      {
        url: "/home/blinkIcons/aamir.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thundal | Connect Directly with Your Favorite Celebs!",
    description: "Own your own Fan Hub!",
    images: [
      "/home/blinkIcons/aamir.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
