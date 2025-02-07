"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { ECharts } from "echarts";
import useStoreInApp from "@/zuststand/useStoreInApp";

interface LocalizationService {
  [key: string]: string;
}

interface CallSummaryData {
  dates: { $values: string[] };
  inbound: { $values: number[] };
  outbound: { $values: number[] };
  missed: { $values: number[] };
  abandoned: { $values: number[] };
  ext2ext: { $values: number[] };
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_CallSummary: "Call Summary",
    CDR_DisplayOptions: "Display Options",
    CDR_Hourly: "Hourly",
    CDR_Daily: "Daily",
    TotalInbound: "Total Inbound",
    TotalOutbound: "Total Outbound",
    TotalExt2Ext: "Total Ext2Ext",
    TotalMissed: "Total Missed",
    TotalAbandoned: "Total Abandoned",
    NoData: "No Data Available",
  };
  return localization[key] || key;
};

const CallSummaryCard: React.FC = () => {
  const [filter, setFilter] = useState<number>(2);
  const chartRef = useRef<ECharts | null>(null);
  const { theme, setTheme } = useStoreInApp();

  const mockData: CallSummaryData = {
    dates: {
      $values: [
        "-09:0",
        "-08:0",
        "-07:0",
        "-06:0",
        "-05:0",
        "-04:0",
        "-03:0",
        "-02:0",
        "-01:0",
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
      ],
    },
    inbound: {
      $values: [
        0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    outbound: {
      $values: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    missed: {
      $values: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    abandoned: {
      $values: [
        0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    ext2ext: {
      $values: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
  };

  const isDarkTheme = theme; // Replace with your theme logic

  const chartOptions = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [
        getLocalization("TotalInbound"),
        getLocalization("TotalOutbound"),
        getLocalization("TotalExt2Ext"),
        getLocalization("TotalMissed"),
        getLocalization("TotalAbandoned"),
      ],
      textStyle: {
        color: isDarkTheme ? "#fff" : "#000",
        fontSize: 14,
      },
    },
    color: ["#0CE2BC", "#FF9F40", "#36A2EB", "#FF6384", "#FFCE56"],
    calculable: true,
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: { color: isDarkTheme ? "#fff" : "#000", fontSize: 14 },
        },
      },
    ],
    xAxis: [
      {
        type: "category",
        data:
          filter === 1
            ? mockData.dates.$values
            : mockData.dates.$values.map((date) => ({
                value: date.split(".")[0],
                textStyle: {
                  color: isDarkTheme ? "#fff" : "#000",
                  fontSize: 14,
                },
              })),
      },
    ],
    series: [
      {
        name: getLocalization("TotalInbound"),
        type: "bar",
        data: mockData.inbound.$values,
        stack: "advertising",
      },
      {
        name: getLocalization("TotalOutbound"),
        type: "bar",
        data: mockData.outbound.$values,
        stack: "advertising",
      },
      {
        name: getLocalization("TotalExt2Ext"),
        type: "bar",
        data: mockData.ext2ext.$values,
        stack: "advertising",
      },
      {
        name: getLocalization("TotalMissed"),
        type: "bar",
        data: mockData.missed.$values,
        stack: "search",
      },
      {
        name: getLocalization("TotalAbandoned"),
        type: "bar",
        data: mockData.abandoned.$values,
        stack: "search",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card" id="CallSummaryCard">
          <div className="card-header">
            <h4 className="card-title">{getLocalization("CDR_CallSummary")}</h4>
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
            <div className="card-body">
              <div className="row justify-content-end mb-4">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>{getLocalization("CDR_DisplayOptions")}</label>
                    <select
                      className="form-control"
                      id="CallSummaryFilter"
                      value={filter}
                      onChange={(e) => setFilter(Number(e.target.value))}
                    >
                      <option value="1">{getLocalization("CDR_Hourly")}</option>
                      <option value="2">{getLocalization("CDR_Daily")}</option>
                    </select>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default CallSummaryCard;
