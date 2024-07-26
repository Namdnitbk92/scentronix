import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer, NavBar, PortalMenu } from "@/components/layout";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import Loading from "./loading";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App for Scentronix FE tasks",
  description: "Next App for Scentronix FE tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
            <PortalMenu />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
