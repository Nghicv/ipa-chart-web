import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
