import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Analytics />
      <body className="bg-primary flex flex-col min-h-svh">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
