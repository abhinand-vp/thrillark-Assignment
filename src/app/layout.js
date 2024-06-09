import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DestContextProvider } from "@/context/destination.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thrillark",
  description: "Generated by Thrillark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DestContextProvider>
        <Navbar />
        {children}
        </DestContextProvider>
      </body>
    </html>
  );
}
