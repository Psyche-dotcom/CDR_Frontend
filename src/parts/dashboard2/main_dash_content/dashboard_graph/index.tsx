import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
interface ChartData {
  xAxis: string[];
  inbound: number[];
  outbound: number[];
  total: number[];
}
const DashboardCard: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    xAxis: [],
    inbound: [],
    outbound: [],
    total: [],
  });
  let res = {
    $id: "1",
    xAxis: {
      $id: "2",
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
      $id: "3",
      $values: [331, 415, 479, 516, 363, 584, 491, 583, 241, 289, 163, 95],
    },
    outboundList: {
      $id: "4",
      $values: [42, 31, 23, 12, 7, 26, 34, 15, 10, 16, 14, 8],
    },
    totalList: {
      $id: "5",
      $values: [373, 446, 502, 528, 370, 610, 525, 598, 251, 305, 177, 103],
    },
  };
  const [filter, setFilter] = useState<number>(2); // Default to 'Weekly'
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);

    setChartData({
      xAxis: res.xAxis.$values,
      inbound: res.inboundList.$values,
      outbound: res.outboundList.$values,
      total: res.totalList.$values,
    });
    setIsLoading(false);
  }, []);
  const getChartOptions = () => ({
    backgroundColor: isDarkTheme ? "#2c343c" : "#ffffff", // Dark theme adjustment
    grid: {
      x: 40,
      x2: 20,
      y: 20,
      y2: 40,
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(50,50,50,0.8)", // Dark tooltip
      textStyle: { color: "#fff" },
      formatter: (params: any) => {
        let tooltip = `<strong>${params[0].name}</strong><br>`;
        params.forEach((item: any) => {
          tooltip += `<span style="color:${item.color};">●</span> ${item.seriesName}: ${item.value}<br>`;
        });
        return tooltip;
      },
    },
    legend: {
      data: ["Inbound", "Outbound", "Total Calls"],
      textStyle: {
        color: isDarkTheme ? "#ddd" : "#333",
        fontSize: 12,
      },
      top: 10, // Adjust legend position
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: isDarkTheme ? "#ccc" : "#333" } },
      axisLabel: { color: isDarkTheme ? "#ddd" : "#333" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisLabel: { textStyle: { color: isDarkTheme ? "#ddd" : "#333" } },
      splitLine: { lineStyle: { color: isDarkTheme ? "#555" : "#eee" } },
    },
    series: [
      {
        name: "Inbound",
        type: "line",
        smooth: true,
        lineStyle: { width: 2 },
        itemStyle: {
          color: isDarkTheme ? "#35A3FF" : "#FF6BDD",
        },
        areaStyle: {
          color: isDarkTheme
            ? "rgba(53, 163, 255, 0.2)"
            : "rgba(255, 107, 221, 0.3)",
        },
        data: chartData.inbound,
      },
      {
        name: "Outbound",
        type: "line",
        smooth: true,
        lineStyle: { width: 2 },
        itemStyle: {
          color: isDarkTheme ? "#AF60FF" : "#6BF8C7",
        },
        areaStyle: {
          color: isDarkTheme
            ? "rgba(175, 96, 255, 0.2)"
            : "rgba(107, 248, 199, 0.3)",
        },
        data: chartData.outbound,
      },
      {
        name: "Total Calls",
        type: "line",
        smooth: true,
        lineStyle: { width: 2 },
        itemStyle: {
          color: isDarkTheme ? "#626BB4" : "#FFB051",
        },
        areaStyle: {
          color: isDarkTheme
            ? "rgba(98, 107, 180, 0.2)"
            : "rgba(255, 176, 81, 0.3)",
        },
        data: chartData.total,
      },
    ],
  });

  // const getChartOptions = () => ({
  //   grid: {
  //     x: 40,
  //     x2: 20,
  //     y: 35,
  //     y2: 25,
  //   },
  //   tooltip: {
  //     trigger: "axis",
  //   },
  //   legend: {
  //     data: ["Inbound", "Outbound", "Total Calls"],
  //     textStyle: {
  //       color: isDarkTheme ? "#fff" : "#000",
  //       fontSize: 14,
  //     },
  //   },
  //   calculable: true,
  //   color: isDarkTheme
  //     ? ["#35A3FF", "#AF60FF", "#626BB4"]
  //     : ["#FF6BDD", "#6BF8C7", "#FFB051"],
  //   xAxis: {
  //     type: "category",
  //     boundaryGap: false,
  //     data: chartData.xAxis,
  //   },
  //   yAxis: {
  //     type: "value",
  //     axisLabel: {
  //       textStyle: {
  //         color: isDarkTheme ? "#fff" : "#000",
  //         fontSize: 14,
  //       },
  //       rotate: 90,
  //     },
  //     splitNumber: 3,
  //   },
  //   series: [
  //     {
  //       name: "Inbound",
  //       type: "line",
  //       smooth: true,
  //       itemStyle: { areaStyle: { type: "default" } },
  //       data: chartData.inbound,
  //     },
  //     {
  //       name: "Outbound",
  //       type: "line",
  //       smooth: true,
  //       itemStyle: { areaStyle: { type: "default" } },
  //       data: chartData.outbound,
  //     },
  //     {
  //       name: "Total Calls",
  //       type: "line",
  //       smooth: true,
  //       itemStyle: { areaStyle: { type: "default" } },
  //       data: chartData.total,
  //     },
  //   ],
  // });
  return (
    <div className="col-md-4">
      <div className="card dashboard-right-graph">
        <div className="card-header">
          <h4 className="card-title">Total Calls</h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <span className="dropdown DashboardGraph">
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
                  top: 0,
                  left: 0,
                  willChange: "transform",
                }}
              >
                <a className="dropdown-item" data-item={2}>
                  <i className="la la-calendar"></i> Weekly
                </a>
                <a className="dropdown-item active" data-item={1}>
                  <i className="la la-calendar"></i> Monthly
                </a>
                <a className="dropdown-item" data-item={3}>
                  <i className="la la-calendar"></i> Yearly
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body">
            <div id="basic-area" className="height-400 echart-container">
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
    </div>
  );
};

export default DashboardCard;
