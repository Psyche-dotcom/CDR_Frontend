import React from "react";

const ProfileCrumb = () => {
  return (
    <div className="content-header row profile-settings">
      <div className="content-header-left col-md-4 col-12 mb-2">
        <h3 className="content-header-title mb-0">
          Profile
          {/* {_staticService.GetLocalization("CDR_Profile").Data} */}
        </h3>
        <div className="row breadcrumbs-top">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">
                  Dashboard
                  {/* {_staticService.GetLocalization("CDR_Dashboard").Data} */}
                </a>
              </li>
              <li className="breadcrumb-item active">
                Profile
                {/* {_staticService.GetLocalization("CDR_Profile").Data} */}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="content-header-right col-md-8 col-12 mb-2">
        <div className="text-right nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="button connection-details-button nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Connection Details
            {/* {_staticService.GetLocalization("CDR_ConnectionDetails").Data} */}
          </a>
          <a
            className="button user-details-button nav-item nav-link"
            id="nav-user-info-tab"
            data-toggle="tab"
            href="#nav-user-info"
            role="tab"
            aria-controls="nav-user-info"
            aria-selected="true"
          >
            User Information
            {/* {_staticService.GetLocalization("CDR_UserInformation").Data} */}
          </a>
          <a
            className="button password-change-button nav-item nav-link"
            id="nav-password-change-tab"
            data-toggle="tab"
            href="#nav-password-change"
            role="tab"
            aria-controls="nav-password-change"
            aria-selected="false"
          >
            Password
            {/* {_staticService.GetLocalization("CDR_Password").Data} */}
          </a>
          <a
            className="button timezone-button nav-item nav-link"
            id="nav-timezone-tab"
            data-toggle="tab"
            href="#nav-timezone"
            role="tab"
            aria-controls="nav-timezone"
            aria-selected="false"
          >
            Timezone
            {/* {_staticService.GetLocalization("CDR_Timezone").Data} */}
          </a>
          <a
            className="button theme-settings-button nav-item nav-link"
            id="nav-theme-settings-tab"
            data-toggle="tab"
            href="#nav-theme-settings"
            role="tab"
            aria-controls="nav-theme-settings"
            aria-selected="false"
          >
            ThemeSettings
            {/* {_staticService.GetLocalization("CDR_ThemeSettings").Data} */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCrumb;
