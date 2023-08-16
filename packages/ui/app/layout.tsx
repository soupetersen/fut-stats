import "./globals.css";

import type { Metadata } from "next";
import { cn } from "./lib/utils";
import { fontSans } from "./lib/fonts";
import { StatsContextProvider } from "./context/StatsContext";
import ToasterContext from "./context/ToasterContext";

export const metadata: Metadata = {
  title: "FutStats",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-zinc-950 font-sans antialiased", fontSans.variable)}
      >
        <ToasterContext />
        <StatsContextProvider>{children}</StatsContextProvider>
      </body>
    </html>
  );
}
