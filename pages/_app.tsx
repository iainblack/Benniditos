import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { VisualEditing } from "@sanity/visual-editing/next-pages-router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      {pageProps.draftMode && <VisualEditing />}
    </>
  );
}
