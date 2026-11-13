import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/motion/MotionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Roufi Vet",
    template: "%s | Roufi Vet",
  },
  description:
    "Roufi Vet Clinic in Hamma Bouziane, Constantine: veterinary care for small and large animals, from pocket pets to horses and cattle.",
};

export const viewport = {
  themeColor: "#fffcf7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-white font-sans text-stone-900">
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-roufi-green focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
