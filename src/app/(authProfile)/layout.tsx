import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TanstackProvider from "@/providers/TenstalkProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CDR CLOUD",
  description: "CDR DESC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="/app-assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/app-assets/login/fonts/iconic/css/material-design-iconic-font.min.css"
        />
        <link
          rel="stylesheet"
          href="/app-assets/login/vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          href="/app-assets/login/vendor/css-hamburgers/hamburgers.min.css"
        />
        <link
          rel="stylesheet"
          href="/app-assets/login/vendor/animsition/css/animsition.min.css"
        />
        <link rel="stylesheet" href="/app-assets/login/css/util.css" />
        <link rel="stylesheet" href="/app-assets/login/css/main.css" />
        <link rel="stylesheet" href="/app-assets/sweetalert/sweetalert.css" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/app-assets/images/ico/k2m-fav-icon.ico"
        />

        <style>
          {`
          .sweet-alert.show-input input {
            display: block;
            -webkit-text-security: none !important;
          }

          .validation-summary-errors ul {
            font-size: 14px;
            color: #fff;
            list-style-type: circle;
            margin-left: 20px;
            margin-bottom: 15px;
          }

          .validation-summary-errors ul li {
            list-style-type: circle;
          }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
        <Script
          src="/app-assets/login/vendor/jquery/jquery-3.2.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/app-assets/login/vendor/animsition/js/animsition.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/app-assets/login/vendor/bootstrap/js/popper.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/app-assets/login/vendor/bootstrap/js/bootstrap.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/app-assets/sweetalert/sweetalert.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </html>
  );
}
