import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/Provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIdeation YT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Provider>
          <body className={font.className}>{children}</body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
