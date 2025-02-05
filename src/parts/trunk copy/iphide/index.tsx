"use client";
import React, { useEffect, useState } from "react";
import { useGetTrunkUserInfo } from "@/services/api_service/company_service";
import { json } from "stream/consumers";
import TrunkComponent from "../trunkcompont";
const IPhide = ({
  setIsOpen,
  checkboxes,
}: {
  checkboxes: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      console.log("Data of trunk", getTrunkUserInfoData.result);
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
      <input type="hidden" id="IpAddress" value={ipAddress} />
      <input type="hidden" id="Gmt" value={gmt} />

      <h1 className="text-center mb-2">
        TRUNK STATUS
        {/* @_staticService.GetLocalization("CDR_TrunkStatus").Data */}
      </h1>
      <button
        data-toggle="modal"
        data-target="#default-modal"
        className="btn btn-primary"
        style={{ marginTop: "-100px;" }}
        onClick={() => setIsOpen(true)}
      >
        Change Trunk
        {/* @_staticService.GetLocalization("CDR_ChangeTrunk").Data */}
      </button>
      <button id="AgentBusyButton" style={{ display: "none" }}>
        Socket button
      </button>
      <TrunkComponent checkboxes={checkboxes} />
    </>
  );
};

export default IPhide;
