"use client";
import React, { useEffect, useState } from "react";
import { useGetTrunkUserInfo } from "@/services/api_service/company_service";

const HiddenCredential = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [TimeZone, setTimeZone] = useState("");
  const [Version, setVersion] = useState("");
  const [Port, setPort] = useState("");
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
      console.log("Data of trunk", getTrunkUserInfoData.result);
      window.localStorage.setItem(
        "UserData",
        JSON.stringify(getTrunkUserInfoData.result)
      );

      setIpAddress(getTrunkUserInfoData.result.ipAddress);
      setTimeZone(getTrunkUserInfoData.result.timezone);
      setVersion(getTrunkUserInfoData.result.version);
      setPort(getTrunkUserInfoData.result.port);
    }
  }, [getTrunkUserInfoIsLoading, getTrunkUserInfoData]);
  return (
    <>
      <input type="hidden" id="SocketIpAddress" value={ipAddress} />
      <input type="hidden" id="TimezoneText" value={TimeZone} />
      <input type="hidden" id="TempVersion" value={Version} />
      <input type="hidden" id="TempPort" value={Port} />
    </>
  );
};

export default HiddenCredential;
