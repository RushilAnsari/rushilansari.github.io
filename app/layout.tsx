import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Mohammad Rushil Ansari",
  description: "Electronics and Computer Engineering student focused on AI, data, automation, and business systems.",
  keywords: "Mohammad Rushil Ansari, Electronics and Computer Engineering, BITS Pilani Dubai, Python, Java, SQL, AI, Data Analytics, Salesforce, Portfolio",
  authors: [{ name: "Mohammad Rushil Ansari" }],
  creator: "Mohammad Rushil Ansari",
  publisher: "Mohammad Rushil Ansari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Mohammad Rushil Ansari - Portfolio",
    description: "Electronics and Computer Engineering student focused on AI, data, automation, and business systems.",
    url: "https://rushilansari.github.io",
    siteName: "Mohammad Rushil Ansari's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Rushil Ansari - Portfolio",
    description: "Electronics and Computer Engineering student focused on AI, data, automation, and business systems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
