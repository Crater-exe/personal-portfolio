import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Carter Haner's personal portfolio",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html className="bg-bg" lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
