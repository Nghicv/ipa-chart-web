import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPA Chart - International Phonetic Alphabet Guide",
  description: "Comprehensive guide to the International Phonetic Alphabet (IPA) with interactive charts for consonants, vowels, and diphthongs. Perfect for language learners, linguists, and phonetics students.",
  keywords: ["IPA", "International Phonetic Alphabet", "phonetics", "pronunciation", "linguistics", "language learning"],
  authors: [{ name: "IPA Chart Guide" }],
  openGraph: {
    title: "IPA Chart - International Phonetic Alphabet Guide",
    description: "Learn the International Phonetic Alphabet with our comprehensive interactive guide",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
