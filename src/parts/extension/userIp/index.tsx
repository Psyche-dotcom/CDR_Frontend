"use client";
import React, { useEffect, useState } from "react";
import { useGetTrunkUserInfo } from "@/services/api_service/company_service";
import { json } from "stream/consumers";
const UserIP = () => {
  const [ipAddress, setIpAddress] = useState("");
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
    }
  }, [getTrunkUserInfoIsLoading, getTrunkUserInfoData]);
  return (
    <>
      <input type="hidden" id="IpAddress" value={ipAddress} />
    </>
  );
};

export default UserIP;
