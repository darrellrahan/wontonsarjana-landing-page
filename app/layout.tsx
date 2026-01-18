import type { Metadata } from "next";
import { Lobster, Roboto_Slab } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Wonton Sarjana - Wonton Enak, Harga Mahasiswa!",
  description:
    "Dimsum lezat yang pas di kantong mahasiswa. Kenyang tanpa bikin dompet nangis!",
  keywords: ["wonton", "dimsum", "mahasiswa", "makanan murah", "kuliner"],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${robotoSlab.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <head />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
