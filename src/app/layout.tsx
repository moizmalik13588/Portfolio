import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Moiz — Full-Stack Developer & Backend Engineer",
  description: "Portfolio of Muhammad Moiz, Full-Stack Developer, Backend Engineer, and AI Integration specialist based in Karachi. Building production-grade web apps.",
  keywords: ["Full-Stack Developer", "Backend Engineer", "AI Integration", "React", "Node.js", "Next.js", "Karachi", "Muhammad Moiz"],
  authors: [{ name: "Muhammad Moiz" }],
  openGraph: {
    title: "Muhammad Moiz — Full-Stack Developer & Backend Engineer",
    description: "Building production-grade web apps — deployed, documented, and used in the real world.",
    url: "https://muhammadmoiz.dev",
    siteName: "Muhammad Moiz Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Moiz — Full-Stack Developer & Backend Engineer",
    description: "Building production-grade web apps — deployed, documented, and used in the real world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased light`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF9F6] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E4E4E7] selection:bg-[#C2410C] selection:text-white font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
