import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "Dra. Deise Soares | Biomédica Estéta",
  description: "Landing page criada por Dinamiza Digital",
};

export default function Document() {
  return (
    <Html lang="pt-br">
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
