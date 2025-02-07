import DateInput from "@/components/DateInput";
import RadioGroup from "@/components/RadioGroup";

const ReportDateFilter: React.FC = () => {
  const radioOptions1 = [
    {
      value: "2",
      label: "Yesterday",
      // getLocalization("CDR_Yesterday")
    },
    {
      value: "3",
      label: "Last 7 Days",

      // getLocalization("CDR_Last7Days")
    },
    {
      value: "4",
      label:
        //  getLocalization("CDR_Last30Days")
        "Last 30 Days",
    },
    { value: "5", label: "Last 3 Mounths" },
    {
      value: "6",
      label:
        // getLocalization("CDR_Last6Mounths")
        "Last 6 Mounths",
    },
  ];

  const radioOptions2 = [
    {
      value: "7",
      label: "From First Hour of This Day",
      // getLocalization("CDR_BugundenItibaren")
    },
    {
      value: "8",
      label: "From First Day   of This Week",
      // getLocalization("CDR_BuHaftaBasindan")
    },
    {
      value: "9",
      label: "From First Day  of This Month",
      // getLocalization("CDR_BuAyBasindan")
    },
    {
      value: "10",
      label: "From First Day  of This Year",
      // getLocalization("CDR_BuYilBasindan")
    },
  ];

  const radioOptions3 = [
    {
      value: "1",
      label: "All",
      // getLocalization("CDR_All")
    },
    {
      value: "11",
      label: "Custom",
      // getLocalization("CDR_Custom")
    },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">
              {/* {getLocalization("CDR_DateFilter")} */}
              Filter
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

          <div className="card-content collapse show date-content-filter">
            <div className="card-body">
              <div className="row">
                <RadioGroup
                  name="date-radio"
                  options={radioOptions1}
                  title={
                    "Date Option 1"
                    // getLocalization("CDR_DateOption1")
                  }
                  imageSrc="/app-assets/images/icons/filter-calendar.svg"
                />
                <RadioGroup
                  name="date-radio"
                  options={radioOptions2}
                  title={
                    "Date Option 2"
                    // getLocalization("CDR_DateOption2")
                  }
                  imageSrc="/app-assets/images/icons/filter-calendar.svg"
                />
                <RadioGroup
                  name="date-radio"
                  options={radioOptions3}
                  title={
                    "Date Option 3"
                    // getLocalization("CDR_DateOption3")
                  }
                  imageSrc="/app-assets/images/icons/filter-calendar.svg"
                />

                <div
                  className="col-md-3"
                  id="FilterDateCustomDiv"
                  style={{ display: "none" }}
                >
                  <h4 className="form-section calls-datefilter">
                    <img
                      src="/app-assets/images/icons/filter-calendar.svg"
                      alt=""
                    />{" "}
                    {/* {getLocalization("CDR_CustomSelect")} */}
                    Custom Select
                  </h4>
                  <div className="row">
                    <DateInput
                      label={
                        "Start Date"
                        // getLocalization("CDR_StartDate")
                      }
                      id="CustomDateStart"
                    />
                    <DateInput
                      label={
                        "EndDate"
                        // getLocalization("CDR_EndDate")
                      }
                      id="CustomDateEnd"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDateFilter;
