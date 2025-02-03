"use client";

import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { useMutatePostWithTokenRequest } from "@/services/api_service/general_service";
import { routes } from "@/services/api_route";
import "../../../../../../public/css/DashboardCard2.css";
interface ChartData {
  xAxis: string[];
  inbound: number[];
  outbound: number[];
  total: number[];
}

const DashboardCard2: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    xAxis: [],
    inbound: [],
    outbound: [],
    total: [],
  });
  const [filter, setFilter] = useState<number>(2); // Default to 'Weekly'
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // For dropdown control

  const { responseData, responseError, responseIsLoading, requestPayload } =
    useMutatePostWithTokenRequest((res: any) => {
      setChartData({
        xAxis: res.xAxis.$values,
        inbound: res.inboundList.$values,
        outbound: res.outboundList.$values,
        total: res.totalList.$values,
      });
      setIsLoading(false);
    });

  useEffect(() => {
    setIsLoading(true);
    requestPayload({
      payload: {},
      route: routes.dashboardGraphUrl() + `?_f=${filter}`,
    });
  }, [filter]);

  const getChartOptions = () => ({
    grid: {
      x: 40,
      x2: 20,
      y: 35,
      y2: 25,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Inbound", "Outbound", "Total Calls"],
      textStyle: {
        color: isDarkTheme ? "#fff" : "#000",
        fontSize: 14,
      },
    },
    color: isDarkTheme
      ? ["#35A3FF", "#AF60FF", "#626BB4"]
      : ["#FF6BDD", "#6BF8C7", "#FFB051"],
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: chartData.xAxis,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        textStyle: {
          color: isDarkTheme ? "#fff" : "#000",
          fontSize: 14,
        },
        rotate: 90,
      },
    },
    series: [
      {
        name: "Inbound",
        type: "line",
        smooth: true,
        itemStyle: { areaStyle: { type: "default" } },
        data: chartData.inbound,
      },
      {
        name: "Outbound",
        type: "line",
        smooth: true,
        itemStyle: { areaStyle: { type: "default" } },
        data: chartData.outbound,
      },
      {
        name: "Total Calls",
        type: "line",
        smooth: true,
        itemStyle: { areaStyle: { type: "default" } },
        data: chartData.total,
      },
    ],
  });

  // Dropdown toggle handler
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Set filter and close dropdown
  const handleFilterChange = (value: number) => {
    setFilter(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="col-md-4">
      <div className="card dashboard-right-graph">
        {/* Card Header */}
        <div className="card-header">
          <h4 className="card-title">Total Calls</h4>
          <div className="heading-elements relative">
            <div className="dropdown relative">
              <button className="btn btn-info btn-sm" onClick={toggleDropdown}>
                Filter
              </button>
              {isDropdownOpen && (
                <div
                  className="dropdown-menu absolute top-full right-0 bg-white shadow rounded-md mt-2 p-2 z-10"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a
                    className={`dropdown-item cursor-pointer block px-4 py-2 ${
                      filter === 2 ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleFilterChange(2)}
                  >
                    Weekly
                  </a>
                  <a
                    className={`dropdown-item cursor-pointer block px-4 py-2 ${
                      filter === 3 ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleFilterChange(3)}
                  >
                    Monthly
                  </a>
                  <a
                    className={`dropdown-item cursor-pointer block px-4 py-2 ${
                      filter === 4 ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleFilterChange(4)}
                  >
                    Yearly
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="card-content collapse show">
          <div className="card-body">
            {isLoading ? (
              <div className="text-center">Loading chart...</div>
            ) : (
              <ReactECharts
                option={getChartOptions()}
                style={{ height: "400px", width: "100%" }}
                notMerge={true}
                lazyUpdate={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard2;
