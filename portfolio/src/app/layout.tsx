import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddhesh Patil | Developer Portfolio",
  description:
    "Full-stack developer specializing in modern web development, AI, and data science. Explore my projects, skills, and journey.",
  keywords: [
    "Siddhesh Patil",
    "Developer",
    "Portfolio",
    "Full Stack",
    "Web Development",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
