import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <p>© 2025 My Photography Business</p>
        </footer>
      </body>
    </html>
  );
}
