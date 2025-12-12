import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";
import ManifestoModal from "@/components/ManifestoModal";

export const metadata: Metadata = {
  title: "TheXCollective - Join the Movement",
  description: "A decentralized collective for creators, builders, investors, and connectors. Own your work, own your future.",
  keywords: "web3, collective, creators, builders, blockchain, community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-[#EBE563] selection:text-black">
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <JoinModal />
          <ManifestoModal />
        </ModalProvider>
      </body>
    </html>
  );
}

