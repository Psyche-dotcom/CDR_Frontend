import type { Metadata } from "next";

import Loader from "@/parts/web_layout/Loader";
import MobileMenu from "@/parts/web_layout/MobileMenu";
import Header from "@/parts/web_layout/Header";
import Footer from "@/parts/web_layout/Footer";
import Sidenav from "@/parts/web_layout/Sidenav";
import CookieAcceptBar from "@/parts/web_layout/CookieAcceptBar";
import TanstackProvider from "@/providers/TenstalkProvider";
export const metadata: Metadata = {
  title: "CDR CLOUD",
  description: "CDR DESC - Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/css/animate.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/fontawesome.min.css" rel="stylesheet" />
        <link href="/css/layout.css" rel="stylesheet" />
        <link href="/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/css/owl.theme.default.min.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        <script src="/js/jquery.3.3.1.min.js" defer></script>
        <script src="/js/bootstrap.min.js" defer></script>
        <script src="/js/owl.carousel.min.js" defer></script>
        <script src="/js/core.js" defer></script>
        <script src="/js/main.js" defer></script>
      </head>
      <body>
        <TanstackProvider>
          <Loader />
          <Header />
          <Sidenav />
          <MobileMenu />
          <main>{children}</main>
          <CookieAcceptBar />
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
