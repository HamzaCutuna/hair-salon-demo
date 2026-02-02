import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hair Salon | Premium Grooming",
  description: "A modern hair salon offering professional haircuts, beard trims, and grooming services.",
  keywords: "hair salon, barbershop, haircut, beard trim, grooming",
  openGraph: {
    title: "Hair Salon | Premium Grooming",
    description: "A modern hair salon offering professional haircuts, beard trims, and grooming services.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hair Salon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
