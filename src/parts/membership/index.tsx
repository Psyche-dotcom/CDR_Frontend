"use client";

import { useGetUserActiveSub } from "@/services/api_service/company_service";
import React, { useEffect, useState } from "react";
import MembershipHeader from "./membership_header";
import MembershipContent from "./membership_content";
import BuyPackage from "./buy_package_content";
import Promotion from "./promotion";
import Script from "next/script";
import "../../css/member.css";

const MembershipMainSection: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [minus, setMinus] = useState<number | null>(null);
  const [packages, setPackages] = useState<any[]>([]);
  const [lastPackageName, setLastPackageName] = useState<string | null>(null);

  const {
    getUserActiveSubIsLoading,
    getUserActiveSubData,
    getUserActiveSubRequest,
  } = useGetUserActiveSub({ enabled: true });

  // Fetch user active subscriptions on component mount
  useEffect(() => {
    getUserActiveSubRequest(true);
  }, [getUserActiveSubRequest]);

  // Update states based on the fetched data
  useEffect(() => {
    if (!getUserActiveSubIsLoading && getUserActiveSubData) {
      setUserInfo(getUserActiveSubData);
      setPackages(getUserActiveSubData?.userPackages?.$values || []);

      const userPackages = getUserActiveSubData?.userPackages?.$values || [];
      const currentPackage =
        userPackages.length === 1
          ? userPackages[0]?.package?.name
          : userPackages[userPackages.length - 1]?.package?.name;

      const packageFinishDate = new Date(
        getUserActiveSubData?.user?.packageFinishDate
      );
      const currentDate = new Date();
      const calculatedMinus = Math.floor(
        (packageFinishDate.getTime() - currentDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      window.localStorage.setItem("_minus", JSON.stringify(calculatedMinus));
      setMinus(calculatedMinus);
      setLastPackageName(currentPackage || null);
    }
  }, [getUserActiveSubIsLoading, getUserActiveSubData]);

  const currentDate = new Date();

  return (
    <>
      <MembershipHeader
        firstName={userInfo?.user?.firstName}
        lastName={userInfo?.user?.lastName}
        UserEdition={userInfo?.user?.edition}
        UserSimultaneousCalls={userInfo?.user?.simultaneousCalls}
        _packageName={lastPackageName}
        _startDate={currentDate}
        _endDate={userInfo?.user?.packageFinishDate}
      />
      <MembershipContent
        _startDate={currentDate}
        _minus={minus}
        _endDate={userInfo?.user?.packageFinishDate}
      />
      <BuyPackage />
      <Promotion />

      <Script
        src="/app-assets/amchart-trunk/core.js"
        strategy="afterInteractive"
      />
      <Script src="/page-script-sample/member.js" strategy="afterInteractive" />
      <Script
        src="/app-assets/amchart-trunk/charts.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/amchart-trunk/animated.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/extensions/jquery.steps.min.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app-assets/css/plugins/forms/wizard.css"
      />
      <Script
        src="/app-assets/vendors/js/tables/datatable/datatables.min.js"
        strategy="afterInteractive"
      />
      <link
        href="/app-assets/vendors/css/tables/datatable/datatables.min.css"
        rel="stylesheet"
      />
      <Script
        src="/app-assets/vendors/js/forms/select/select2.full.min.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/app-assets/vendors/css/forms/selects/select2.min.css"
      />
      <Script
        src="/app-assets/page-scripts/membership.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default MembershipMainSection;
