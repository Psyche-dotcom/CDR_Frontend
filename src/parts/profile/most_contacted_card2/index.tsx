"use client";
import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

import { useMutatePostWithTokenRequest } from "@/services/api_service/general_service";
import { routes } from "@/services/api_route";

interface DataItem {
  numofcalls: number;
  d_name: string;
}

const getLocalization = (key: string): string => {
  const localization: Record<string, string> = {
    CDR_MostContacted: "Most Contacted",
    CDR_Daily: "Daily",
    CDR_Weekly: "Weekly",
    CDR_Monthly: "Monthly",
    CDR_Yearly: "Yearly",
    Localization_NoData: "No Data",
    Localization_Person: "Person",
    Localization_Top5List: "Top 5 List",
  };
  return localization[key] || key;
};

const MostContactedCard2: React.FC = () => {
  const [filter, setFilter] = useState<number>(2); // Default to Monthly
  const [seriesData, setSeriesData] = useState<
    { value: number; name: string }[]
  >([]);
  const [legendData, setLegendData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDarkTheme] = useState(false);

  const chartOptions = {
    title: {
      text: getLocalization("Localization_Top5List"),
      subtext: "",
      x: "center",
      textStyle: { color: isDarkTheme ? "#fff" : "#000", fontSize: 18 },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    color: ["#FF6BDD", "#48C4FB", "#FEAA4D", "#FE4D51", "#666ee8"],
    // toolbox: {
    //   feature: {
    //     saveAsImage: { title: "Save as Image" },
    //     restore: { title: "Restore" },
    //   },
    // },
    toolbox: {
      show: true,
      orient: "vertical",
      feature: {
        mark: {
          show: true,
          title: {
            mark: "Markline switch",
            markUndo: "Undo markline",
            markClear: "Clear markline",
          },
        },
        dataView: {
          show: true,
          readOnly: false,
          title: "View data",
          lang: ["View chart data", "Close", "Update"],
        },
        magicType: {
          show: true,
          title: {
            pie: "Switch to pies",
            funnel: "Switch to funnel",
          },
          type: ["pie", "funnel"],
          option: {
            funnel: {
              x: "25%",
              y: "20%",
              width: "50%",
              height: "70%",
              funnelAlign: "left",
              max: 1548,
            },
          },
        },
        restore: {
          show: true,
          title: "Restore",
        },
        saveAsImage: {
          show: true,
          title: "Same as image",
          lang: ["Save"],
        },
      },
    },

    calculable: true,

    legend: {
      orient: "vertical",
      left: "left",
      data: legendData,
      textStyle: { color: isDarkTheme ? "#fff" : "#000", fontSize: 14 },
    },
    series: [
      {
        name: getLocalization("Localization_Person"),
        type: "pie",
        radius: "70%",
        center: ["50%", "57.5%"],
        data: seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  const { responseData, responseError, responseIsLoading, requestPayload } =
    useMutatePostWithTokenRequest((res: any) => {
      console.log("resp", res);
      const dataList: DataItem[] = res.dataList.$values;

      if (dataList.length > 0) {
        const processedData = dataList.map((item) => ({
          value: item.numofcalls,
          name: item.d_name,
        }));
        setSeriesData(processedData);
        setLegendData(processedData.map((item) => item.name));
      } else {
        setSeriesData([]);
        setLegendData([]);
      }
      setIsLoading(false);
    });

  useEffect(() => {
    requestPayload({
      payload: {},
      route: routes.mostContact() + `?_f=${filter}`,
    });
  }, [filter]);

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{getLocalization("CDR_MostContacted")}</h4>
          <div className="heading-elements">
            <div className="dropdown DashboardGraph MostContactedFilter">
              <button
                className="btn btn-info btn-sm dropdown-toggle"
                id="btnFilterDropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={(e) => e.currentTarget.blur()}
              >
                <i className="ft-calendar white"></i>
              </button>
              <div
                className="dropdown-menu mt-1 dropdown-menu-right"
                style={{ zIndex: 1050 }}
              >
                {[0, 1, 2, 3].map((index) => (
                  <a
                    key={index}
                    className={`dropdown-item ${
                      filter === index ? "active" : ""
                    }`}
                    onClick={() => setFilter(index)}
                  >
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization(
                      ["CDR_Daily", "CDR_Weekly", "CDR_Monthly", "CDR_Yearly"][
                        index
                      ]
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <ReactECharts
                option={
                  seriesData.length > 0
                    ? chartOptions
                    : {
                        ...chartOptions,
                        title: {
                          ...chartOptions.title,
                          text: getLocalization("Localization_NoData"),
                          left: "center",
                          top: "center",
                        },
                        series: [],
                      }
                }
                style={{ height: 400 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostContactedCard2;
