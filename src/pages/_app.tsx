import "~/styles/globals.css";
import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClerkProvider } from "@clerk/nextjs";
import { ComponentType, ReactNode } from "react";
import MainLayout from "~/components/layout/main-layout";
import queryClient from "~/libs/query-client";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export type PageWithLayout = AppProps["Component"] & {
  Layout?: ComponentType<{ children: ReactNode }>;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || MainLayout;
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <main className={poppins.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ClerkProvider>
  );
}
