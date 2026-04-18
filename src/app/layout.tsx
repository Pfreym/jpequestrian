import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";


export const metadata = {
  title: "JP Equestrian",
  description: "Coaching, mentorship, and structured support for riders and their horses.",
  icons: [{ rel: "icon", url: "images/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--parchment)] text-[var(--ink)] antialiased">
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
