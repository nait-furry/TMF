import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Transform Maisha Foundation",
  description:
    "Every Life Counts - Compassionate, Christ-centered community empowerment for lasting social and economic transformation across Kenya.",
  keywords: [
    "Community",
    "Transformation",
    "Kenya",
    "Faith",
    "Empowerment",
    "Social Impact",
  ],
  authors: [{ name: "Transform Maisha Foundation" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Transform Maisha Foundation - Every Life Counts",
    description:
      "Join a movement of compassionate transformation across Kenya.",
    type: "website",
    images: ["/320686.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F7F5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
