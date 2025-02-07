"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { ECharts } from "echarts";
import useStoreInApp from "@/zuststand/useStoreInApp";

interface LocalizationService {
  [key: string]: string;
}

interface TotalCallsData {
  xAxis: { $values: string[] };
  inboundList: { $values: number[] };
  outboundList: { $values: number[] };
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_MonthlyTotalCalls: "Monthly Total Calls",
    Inbound: "Inbound",
    Outbound: "Outbound",
    NoData: "No Data Available",
  };
  return localization[key] || key;
};

const MonthlyTotalCallsCard: React.FC = () => {
  const [data, setData] = useState<TotalCallsData | null>(null);
  const chartRef = useRef<ECharts | null>(null);
  const { theme, setTheme } = useStoreInApp();
  const isDarkTheme = theme; // Replace with your theme logic

  // Mock data
  const mockData: TotalCallsData = {
    xAxis: {
      $values: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    inboundList: {
      $values: [331, 415, 479, 516, 363, 584, 491, 583, 241, 289, 163, 95],
    },
    outboundList: {
      $values: [42, 31, 23, 12, 7, 26, 34, 15, 10, 16, 14, 8],
    },
  };

  useEffect(() => {
    // Simulate fetching data
    setData(mockData);
  }, []);

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
    grid: {
      x: 40,
      x2: 40,
      y: 35,
      y2: 25,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [getLocalization("Inbound"), getLocalization("Outbound")],
      textStyle: {
        color: isDarkTheme ? "#fff" : "#000",
        fontSize: 14,
      },
    },
    color: ["#4466FD", "#FE3B89"],
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: data?.xAxis.$values || [getLocalization("NoData")],
        axisLabel: {
          textStyle: {
            color: isDarkTheme ? "#fff" : "#000",
            fontSize: 14,
          },
        },
      },
    ],
    //@ts-ignore
    calculable: true,
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: isDarkTheme ? "#fff" : "#000",
            fontSize: 14,
          },
          rotate: 90,
        },
        splitNumber: 3,
      },
    ],
    series: [
      {
        name: getLocalization("Inbound"),
        type: "bar",
        data: data?.inboundList.$values || [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              textStyle: {
                fontWeight: 500,
              },
            },
          },
        },
      },
      {
        name: getLocalization("Outbound"),
        type: "bar",
        data: data?.outboundList.$values || [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              textStyle: {
                fontWeight: 500,
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div className="col-md-6">
      <div className="card" id="MonthlyTotalCalls">
        <div className="card-header">
          <h4 className="card-title">
            {getLocalization("CDR_MonthlyTotalCalls")}
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

export default MonthlyTotalCallsCard;
