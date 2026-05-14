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
  title: "Saee Bhanuskar | Developer Portfolio",
  description:
    "Full Stack Developer specializing in Python and Flask. Explore my projects, skills, and journey.",
  keywords: [
    "Saee Bhanuskar",
    "Developer",
    "Portfolio",
    "Full Stack",
    "Python",
    "Flask",
    "Web Development",
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
