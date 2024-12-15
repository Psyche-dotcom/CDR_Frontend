import React from "react";

const ProfileCrumb = () => {
  // const { t } = useTranslation();
  return (
    <>
      <div className="customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block">
        <a className="customizer-close" style={{ cursor: "pointer" }}>
          <i className="ft-x font-medium-3"></i>
        </a>
        <a
          className="customizer-toggle box-shadow-3"
          style={{ backgroundColor: "#ffc6e0" }}
        >
          <i
            className="ft-settings font-medium-3 spinner white"
            style={{ color: "#e83e8c" }}
          ></i>
        </a>
        <div className="customizer-content p-2 ps">
          <h4 className="text-uppercase mb-0">
            {/* {t("cardSettings")} */}
            Card Settings
          </h4>
          <hr />
          <p>
            {/* {t("selectStatisticTimes")} */}
            Select Statistic Times
          </p>
          <div className="form-group">
            <div
              className="btn-group customizer-sidebar-options"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-outline-info StatisticFilter"
                data-item="1"
                data-sidebar="menu-light"
              >
                {/* {t("daily")} */}
                Daily{" "}
              </button>
              <button
                type="button"
                className="btn btn-outline-info StatisticFilter"
                data-item="2"
                data-sidebar="menu-dark"
              >
                {/* {t("weekly")} */}
                Weekly
              </button>
              <button
                type="button"
                className="btn btn-outline-info StatisticFilter active"
                data-item="3"
                data-sidebar="menu-dark"
              >
                {/* {t("monthly")} */}
                Monthly
              </button>
              <button
                type="button"
                className="btn btn-outline-info StatisticFilter"
                data-item="4"
                data-sidebar="menu-dark"
              >
                {/* {t("yearly")} */}
                Yearly
              </button>
            </div>
          </div>
          <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
            <div
              className="ps__thumb-x"
              tabIndex={0}
              style={{ left: 0, width: 0 }}
            ></div>
          </div>
          <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
            <div
              className="ps__thumb-y"
              tabIndex={0}
              style={{ top: 0, height: 0 }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCrumb;
