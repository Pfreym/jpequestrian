import "~/styles/globals.css";
import "~/styles/calendar.css";

import { Inter } from "next/font/google";


import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})



export const metadata = {
  title: "JP Equestrian",
  description: "JP Equestrian Web Site",
  icons: [{ rel: "icon", url: "images/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script></TRPCReactProvider>
          
      </body>
    </html>
  );
}
