"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { ECharts } from "echarts";
import useStoreInApp from "@/zuststand/useStoreInApp";

interface LocalizationService {
  [key: string]: string;
}

interface MostContactedData {
  dataList: {
    $values: Array<{ d_name: string; numofcalls: number }>;
  };
  dataNameList: {
    $values: string[];
  };
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_MostContacted: "Most Contacted",
    CDR_Daily: "Daily",
    CDR_Weekly: "Weekly",
    CDR_Monthly: "Monthly",
    CDR_Yearly: "Yearly",
    Top5List: "Top 5 List",
    Person: "Person",
    NoData: "No Data Available",
  };
  return localization[key] || key;
};

const MostContactedCard: React.FC = () => {
  const [filter, setFilter] = useState<string>("2"); // Default to Monthly
  const [data, setData] = useState<MostContactedData | null>(null);
  const chartRef = useRef<ECharts | null>(null);
  const { theme, setTheme } = useStoreInApp();

  const isDarkTheme = theme; // Replace with your theme logic

  // Mock data
  const mockData: MostContactedData = {
    dataList: {
      $values: [
        { d_name: "ADNAN DIKICI (5010)", numofcalls: 4 },
        { d_name: "GUVENLIK (5027)", numofcalls: 4 },
      ],
    },
    dataNameList: {
      $values: ["ADNAN DIKICI (5010)", "GUVENLIK (5027)"],
    },
  };

  useEffect(() => {
    // Simulate fetching data based on the selected filter
    setData(mockData);
  }, [filter]);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartOptions = {
    title: {
      text: getLocalization("Top5List"),
      subtext: "",
      x: "center",
      textStyle: { color: isDarkTheme ? "#fff" : "#000", fontSize: 18 },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    color: ["#FF6BDD", "#48C4FB", "#FEAA4D", "#FE4D51", "#666ee8"],
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
          title: { pie: "Switch to pies", funnel: "Switch to funnel" },
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
        restore: { show: true, title: "Restore" },
        saveAsImage: { show: true, title: "Save as image", lang: ["Save"] },
      },
    },
    calculable: true,
    legend: {
      orient: "vertical",
      x: "left",
      data: data?.dataNameList.$values || [],
      textStyle: { color: isDarkTheme ? "#fff" : "#000", fontSize: 14 },
    },
    series: [
      {
        name: getLocalization("Person"),
        type: "pie",
        radius: "70%",
        center: ["50%", "57.5%"],
        data:
          data?.dataList.$values.map((item) => ({
            value: item.numofcalls,
            name: item.d_name,
          })) || [],
      },
    ],
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{getLocalization("CDR_MostContacted")}</h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <div className="heading-elements">
              <span
                className="dropdown DashboardGraph MostContactedFilter"
                style={{ top: "-15px" }}
              >
                <button
                  id="btnSearchDrop1"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="btn btn-info btn-sm dropdown-toggle dropdown-menu-right"
                >
                  <i className="ft-calendar white"></i>
                </button>
                <span
                  aria-labelledby="btnSearchDrop1"
                  className="dropdown-menu mt-1 dropdown-menu-right"
                  style={{
                    position: "absolute",
                    transform: "translate3d(-101px, 25px, 0px)",
                    top: "0px",
                    left: "0px",
                    willChange: "transform",
                  }}
                >
                  <a
                    className={`dropdown-item ${filter == "4" && "active"}`}
                    data-item="4"
                    onClick={() => setFilter("4")}
                  >
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Daily")}
                  </a>
                  <a
                    className={`dropdown-item ${filter == "1" && "active"}`}
                    data-item="1"
                    onClick={() => setFilter("1")}
                  >
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Weekly")}
                  </a>
                  <a
                    className={`dropdown-item ${filter == "2" && "active"}`}
                    data-item="2"
                    onClick={() => setFilter("2")}
                  >
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Monthly")}
                  </a>
                  <a
                    className={`dropdown-item ${filter == "3" && "active"}`}
                    data-item="3"
                    onClick={() => setFilter("3")}
                  >
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Yearly")}
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body">
            <ReactECharts
              option={chartOptions}
              style={{ height: "400px" }}
              //@ts-ignore
              ref={chartRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostContactedCard;
