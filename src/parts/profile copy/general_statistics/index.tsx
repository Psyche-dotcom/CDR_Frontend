import StatisticRow from "@/components/others/statistic_row";
import React from "react";

interface LocalizationService {
  [key: string]: string;
}

const statistics = [
  {
    label: "Total Call Time",
    value: "00 h : 43 m : 00 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Average Call Time",
    value: "00 h : 00 m : 18 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Total Talk Time",
    value: "02 h : 00 m : 38 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Average Talk Time",
    value: "00 h : 00 m : 52 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Total Ring Time",
    value: "00 h : 32 m : 31 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Average Ring Time",
    value: "00 h : 00 m : 14 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Total System Talk Time",
    value: "00 h : 00 m : 09 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
  {
    label: "Average System Talk Time",
    value: "00 h : 22 m : 45 s",
    icon: "/app-assets/images/icons/bi_clock-fill-green.svg",
  },
];

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_GeneralStatistic: "General Statistic",
  };
  return localization[key] || key;
};

const GeneralStatisticCard: React.FC = () => {
  return (
    <div className="col-md-3 last-call-statistic-container">
      <div className="card box-shadow-0 border-dark-blue companyprofilecards">
        <div className="card-header card-head-inverse bg-dark-blue">
          <h4 className="card-title text-white titlesizeweight">
            <i className="ft-bar-chart"></i>&nbsp;&nbsp;
            {getLocalization("CDR_GeneralStatistic")}
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
          <div className="card-body" id="GeneralStatistic">
            <table className="melocom last-call-statistic titlesizeweight">
              <tbody>
                {statistics.map((stat, index) => (
                  <StatisticRow
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    icon={stat.icon}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStatisticCard;
