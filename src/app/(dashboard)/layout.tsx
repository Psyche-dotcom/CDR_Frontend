"use client";
import useStoreInApp from "../../zuststand/useStoreInApp";
import TanstackProvider from "@/providers/TenstalkProvider";
import LoadingDash from "@/parts/dashboard_layout/loading_dash";

import LoadingDashPost from "@/parts/dashboard_layout/loading_dash_post";
import Navbar from "@/parts/dashboard_layout/navbar";
import MainMenu from "@/parts/dashboard_layout/main_menu";
import FooterDash from "@/parts/dashboard_layout/footer_dash";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useStoreInApp();
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <title>CDR | Dashboard</title>
        <link
          rel="shortcut icon"
          href="/app-assets/images/ico/k2m-fav-icon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Quicksand:300,400,500,700"
          rel="stylesheet"
        />
        <link
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
        <link rel="stylesheet" href="/app-assets/css/vendors.css" />
        <link rel="stylesheet" href="/app-assets/css/app.css" />
        {theme === true && (
          <link rel="stylesheet" href="/app-assets/dark-color.css" />
        )}
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/core/menu/menu-types/vertical-overlay-menu.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/core/colors/palette-gradient.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/vendors/css/cryptocoins/cryptocoins.css"
        />
        <link rel="stylesheet" type="text/css" href="/app-assets/style.css" />
        <link href="/app-assets/enjoy-hint/enjoyhint.css" rel="stylesheet" />
        <link
          href="/app-assets/vendors/js/datetimepicker/jquery.datetimepicker.min.css"
          rel="stylesheet"
        />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/vendors/css/extensions/toastr.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/plugins/extensions/toastr.min.css"
        /> */}
        <link href="/app-assets/sweetalert/sweetalert.css" rel="stylesheet" />

        <Script
          src="/app-assets/vendors/js/vendors.min.js"
          type="text/javascript"
          strategy="lazyOnload"
        />

        <Script
          src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
          strategy="lazyOnload"
          type="text/javascript"
        />
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <Script
          src="/app-assets/js/core/app-menu.js"
          strategy="afterInteractive"
        />

        <Script
          src="/app-assets/js/core/app.js"
          type="text/javascript"
          strategy="afterInteractive"
        />

        <Script
          src="/app-assets/js/scripts/customizer.js"
          type="text/javascript"
          strategy="afterInteractive"
        ></Script>

        <Script
          src="/app-assets/vendors/js/datetimepicker/jquery.datetimepicker.full.min.js"
          strategy="lazyOnload"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/kineticjs/5.2.0/kinetic.js"
          strategy="lazyOnload"
        />

        <Script
          src="/app-assets/enjoy-hint/enjoyhint.min.js"
          strategy="lazyOnload"
        ></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"
          strategy="lazyOnload"
        />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></S> */}
      </head>

      <body
        className="vertical-layout vertical-overlay-menu 2-columns   menu-expanded fixed-navbar"
        data-menu="vertical-overlay-menu"
        data-col="2-columns"
        data-open="hover"
      >
        <TanstackProvider>
          {/* <LoadingDash /> */}
          <LoadingDashPost />
          <Navbar />
          <MainMenu />
          <div className="app-content content">
            <div
              className="content-wrapper"
              style={theme ? { backgroundColor: "#292b40" } : undefined}
            >
              {children}
            </div>
          </div>
          <FooterDash
            distanceSellingContract="Distance Selling Contract"
            privacyAgreement="Privacy Agreement"
            copyright="© Your Company"
            rightsReserved="All Rights Reserved"
            dockerServer="Docker Server Info"
          />
          <div id="callDetail" className="sidebar appointment-detail">
            <div className="sidebar-content"></div>
          </div>
        </TanstackProvider>

        <Script
          src="/app-assets/sweetalert/sweetalert.min.js"
          strategy="lazyOnload"
        ></Script>

        <Script
          src="/app-assets/page-scripts/layout.js"
          strategy="lazyOnload"
        ></Script>
      </body>
    </html>
  );
}
