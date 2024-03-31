import { Inter } from "next/font/google";
import "./globals.css";
import { CatIdProvider } from "@/provider/CatIdProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ebeef2] relative`}>
        <CatIdProvider>{children}</CatIdProvider>
        <Toaster position="bottom-center" reverseOrder={true} />
      </body>
    </html>
  );
};
export default RootLayout;
