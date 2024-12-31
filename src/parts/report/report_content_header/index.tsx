"use client";
import React, { useEffect, useState } from "react";
import { useGetTrunkUserInfo } from "@/services/api_service/company_service";
import Link from "next/link";

const ReportContentHeader = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [gmt, setGmt] = useState("");
  const {
    getTrunkUserInfoIsFetching,
    getTrunkUserInfoIsFetched,
    getTrunkUserInfoIsLoading,
    getTrunkUserInfoDataError,
    getTrunkUserInfoData,
    refreshgetTrunkUserInfoData,
    getTrunkUserInfoRequest,
  } = useGetTrunkUserInfo({ enabled: true });

  useEffect(() => {
    getTrunkUserInfoRequest(true);
  }, [getTrunkUserInfoRequest]);
  useEffect(() => {
    if (
      !getTrunkUserInfoIsLoading &&
      getTrunkUserInfoData?.statusCode === 200
    ) {
      window.localStorage.setItem(
        "UserData",
        JSON.stringify(getTrunkUserInfoData.result)
      );
      setGmt(getTrunkUserInfoData.result.gmt);
      setIpAddress(getTrunkUserInfoData.result.ipAddress);
    }
  }, [getTrunkUserInfoIsLoading, getTrunkUserInfoData]);
  return (
    <>
      <div className="content-header row">
        <div className="content-header-left col-md-6 col-12 mb-2">
          <h3 className="content-header-title mb-0">Company Reports</h3>
          <div className="row breadcrumbs-top">
            <div className="breadcrumb-wrapper col-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">
                    Dashboard
                    {/* {"CDR_Dashboard"} */}
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  Company Reports
                  {/* {"CDR_CompanyReports"} */}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <input type="hidden" id="IpAddress" value={ipAddress} />

        <div className="content-header-right col-md-6 col-12 pl-5 calls-info">
          <div
            className="alert bg-info alert-icon-left alert-dismissible mb-1 ml-5"
            role="alert"
          >
            <span className="alert-icon">
              <i className="la la-calendar"></i>
            </span>
            {/* {"CDR_DateFilterSection"} */}
            If you select custom date and time for reporting as favorite then
            you should click <strong>filter</strong> icon
          </div>
          <div
            className="alert bg-warning alert-icon-left alert-dismissible ml-5"
            role="alert"
          >
            <span className="alert-icon">
              <i className="la la-eye"></i>
            </span>
            {/* {"CDR_ClickFavoriteButton"} */}
            In the panel settings, you can click the <strong>eye icon</strong>
            it will filter the data automatically.
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportContentHeader;
