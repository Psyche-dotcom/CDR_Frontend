import { useGetUserExtension } from "@/services/api_service/company_service";
import React, { useEffect } from "react";

interface UserHeaderContentProps {
  id: string;

  localizations: {
    [key: string]: string;
  };
}

const UserHeaderContent: React.FC<UserHeaderContentProps> = ({
  id,

  localizations,
}) => {
  const {
    getUserExtensionIsFetching,
    getUserExtensionIsFetched,
    getUserExtensionIsLoading,
    getUserExtensionDataError,
    getUserExtensionData,
    refreshGetUserExtensionData,
    getUserExtensionRequest,
  } = useGetUserExtension({ enabled: true, subpart: id });

  // useEffect(() => {
  //   /// getUserExtensionRequest({ enabled: true, subpart: id });
  // }, [id]);
  useEffect(() => {
    if (!getUserExtensionIsLoading && getUserExtensionData !== null) {
      localStorage.setItem("ext", getUserExtensionData?.detail?.dn);
      console.log("Data of user ext", getUserExtensionData);
    }
  }, []);
  return (
    <div className="content-header row">
      {/* <input
        type="hidden"
        value={getUserExtensionData?.detail?.dn}
        id="ExtNo"
      />
      <input
        type="hidden"
        id="IpAddress"
        value={getUserExtensionData?.user?.ipAddress || ""}
      /> */}

      <div className="content-header-left col-md-6 col-12 mb-2">
        <h3 className="content-header-title mb-0">
          {getUserExtensionData?.detail?.display_name}
        </h3>
        <div className="row breadcrumbs-top">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">{localizations["CDR_Dashboard"]}</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/dashboard/user">
                  {localizations["CDR_CompanyExtensions"]}
                </a>
              </li>
              <li className="breadcrumb-item active">
                {localizations["CDR_Extension_Statistic_Report"]}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeaderContent;
