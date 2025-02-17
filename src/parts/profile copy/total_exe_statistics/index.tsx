import ProfileComponent from "@/components/others/profilecomponent";
import React from "react";

interface LocalizationService {
  [key: string]: string;
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_TotalExtExtStatistic: "Total Ext to Ext Statistic",
  };
  return localization[key] || key;
};

const TotalExtExtStatisticCard: React.FC = () => {
  return (
    <div className="col-md-3 last-call-statistic-container">
      <div className="card box-shadow-0 border-dark-blue companyprofilecards">
        <div className="card-header card-head-inverse bg-dark-blue">
          <h4 className="card-title text-white titlesizeweight">
            <i className="ft-phone-forwarded"></i>&nbsp;&nbsp;
            {getLocalization("CDR_TotalExtExtStatistic")}
          </h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li>
                <a data-action="collapse">
                  <i className="ft-minus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body" id="Ext2ExtStatistic">
            {/* <img
              src="/app-assets/images/loading.gif"
              style={{
                display: "block",
                margin: "0 auto",
                width: "64px",
                height: "64px",
              }}
              alt="Loading..."
            /> */}
            <ProfileComponent total={45} answered={10} unanswered={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalExtExtStatisticCard;
