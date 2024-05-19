import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MuiDrawer from "@/components/mui-drawer";
import NavBar from "@/components/navbar";

const messiri = El_Messiri({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sip and Paint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`page-background ${messiri.className}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <MuiDrawer />
            <NavBar/>
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
