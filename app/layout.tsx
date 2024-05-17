import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MuiDrawer from "@/components/mui-drawer";
import { StyledEngineProvider } from "@mui/material";

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
      <body className={messiri.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <MuiDrawer />
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
