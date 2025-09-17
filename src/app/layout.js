import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kusum Innovations",
  description: "Kusum Innovations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
