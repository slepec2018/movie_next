import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-700 text-gray-200 min-h-screen select-none">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
