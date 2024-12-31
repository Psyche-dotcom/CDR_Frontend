"use client";
import { useGetTrunkUserInfo } from "@/services/api_service/company_service";
import { getLocalization, getProfilePicture, user } from "@/utils";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userinfo, setuserinfo] = useState({});
  const { push } = useRouter();
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
      setuserinfo(getTrunkUserInfoData.result);
    }
  }, [getTrunkUserInfoIsLoading, getTrunkUserInfoData]);
  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    push("/login");
  };

  //@ts-ignore
  const userFirstLetter = userinfo?.firstName?.substring(0, 1).toLowerCase();
  const profilePicture = getProfilePicture(userFirstLetter);

  return (
    <li className="dropdown dropdown-user nav-item">
      <a
        className="dropdown-toggle nav-link dropdown-user-link"
        href="#"
        data-toggle="dropdown"
      >
        <span className="mr-1">
          {getLocalization("Layout_Merhaba")},
          <span
            className="user-name text-bold-700"
            style={{ textTransform: "capitalize" }}
          >
            {/* @ts-ignore */}
            {userinfo?.firstName} {userinfo.lastName}
          </span>
        </span>
        <span className="avatar">
          <img src={profilePicture} alt="avatar" />
          <i></i>
        </span>
      </a>

      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="/dashboard/user_profile">
          <i className="ft-user"></i> {getLocalization("Layout_Profil")}
        </a>
        <a className="dropdown-item" href="/dashboard/membership">
          <i className="ft-credit-card"></i> {getLocalization("CDR_Membership")}
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" onClick={handleLogout}>
          <i className="ft-power"></i> {getLocalization("Layout_CikisYap")}
        </a>
      </div>
    </li>
  );
};

export default UserDropdown;
