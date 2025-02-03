"use client";
import React, { useEffect, useRef } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";
import CallStatsCardCopy from "@/components/Card/call_stats_card copy";

interface DataProps {
  dates: string[];
  calls: number[];
  inbound: number[];
  outbound: number[];
  missed: number[];
  abandoned: number[];
  internal: number[];
}

const DashBoardStats2: React.FC = () => {
  const canvasRefs = {
    call: useRef<HTMLCanvasElement | null>(null),
    inbound: useRef<HTMLCanvasElement | null>(null),
    outbound: useRef<HTMLCanvasElement | null>(null),
    answered: useRef<HTMLCanvasElement | null>(null),
    unanswered: useRef<HTMLCanvasElement | null>(null),
    internal: useRef<HTMLCanvasElement | null>(null),
  };

  const charts: Record<string, Chart | null> = {
    call: null,
    inbound: null,
    outbound: null,
    answered: null,
    unanswered: null,
    internal: null,
  };

  const data: DataProps = {
    dates: [
      "01/12/2024",
      "02/12/2024",
      "03/12/2024",
      "04/12/2024",
      "05/12/2024",
      "06/12/2024",
      "07/12/2024",
      "08/12/2024",
      "09/12/2024",
      "10/12/2024",
      "11/12/2024",
      "12/12/2024",
      "13/12/2024",
      "14/12/2024",
      "15/12/2024",
      "16/12/2024",
      "17/12/2024",
      "18/12/2024",
      "19/12/2024",
      "20/12/2024",
      "21/12/2024",
      "22/12/2024",
      "23/12/2024",
      "24/12/2024",
      "25/12/2024",
      "26/12/2024",
      "27/12/2024",
      "28/12/2024",
      "29/12/2024",
      "30/12/2024",
      "31/12/2024",
    ],
    calls: [
      21, 5, 5, 6, 1, 10, 13, 3, 2, 5, 7, 7, 7, 4, 4, 4, 9, 9, 14, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    inbound: [
      12, 5, 3, 5, 1, 8, 5, 2, 2, 5, 5, 1, 5, 2, 4, 4, 7, 7, 12, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ],
    outbound: [
      0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ],
    missed: [
      7, 0, 2, 0, 0, 1, 6, 2, 0, 0, 1, 5, 1, 2, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ],
    abandoned: [
      14, 5, 3, 6, 1, 9, 7, 1, 2, 5, 6, 2, 6, 2, 4, 4, 8, 8, 12, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ],
    internal: [
      9, 0, 2, 0, 0, 1, 8, 1, 0, 0, 0, 3, 2, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ],
  };

  const initChart = (
    ref: React.RefObject<HTMLCanvasElement>,
    color1: string,
    label: string,
    borderColor: string,
    chartKey: keyof typeof charts,
    chartData: number[],
    labels: string[]
  ) => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 80, 0, 130);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    const chartConfig: { data: ChartData; options: ChartOptions } = {
      data: {
        labels,
        datasets: [
          {
            label,
            data: chartData,
            backgroundColor: gradient,
            borderColor,
            borderWidth: 2,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
      },
    };

    charts[chartKey] = new Chart(ctx, {
      type: "bar",
      ...chartConfig,
    });
  };

  useEffect(() => {
    initChart(
      canvasRefs.call,
      "rgb(255, 107, 221)",
      "Total Calls",
      "#FF6BDD",
      "call",
      data.calls,
      data.dates
    );
    initChart(
      canvasRefs.inbound,
      "rgb(252, 175, 87)",
      "Total Inbound",
      "#FFB051",
      "inbound",
      data.inbound,
      data.dates
    );
    initChart(
      canvasRefs.outbound,
      "rgb(142, 109, 212)",
      "Total Outbound",
      "#8E6DD4",
      "outbound",
      data.outbound,
      data.dates
    );
    initChart(
      canvasRefs.answered,
      "rgb(76, 203, 252)",
      "Total Missed",
      "#4CCBFC",
      "answered",
      data.missed,
      data.dates
    );
    initChart(
      canvasRefs.unanswered,
      "rgb(254, 77, 81)",
      "Total Abandoned",
      "#FE4D51",
      "unanswered",
      data.abandoned,
      data.dates
    );
    initChart(
      canvasRefs.internal,
      "rgb(101, 224, 202)",
      "Total Internal",
      "#65E0CA",
      "internal",
      data.internal,
      data.dates
    );

    return () => {
      Object.values(charts).forEach((chart) => chart?.destroy());
    };
  }, []);

  return (
    <div className="col-md-8 index-graphic-bar">
      <div id="crypto-stats-3" className="row">
        <CallStatsCardCopy
          iconextraClass="la la-line-chart"
          buttonColor="#ff6bdd"
          title="Total Calls"
          cardId="DashboardTotalCalls"
          cardPercentage="DashboardTotalCalls-Percent"
          canvasId="chart-total-calls"
          ref={canvasRefs.call}
        />
        <CallStatsCardCopy
          iconextraClass="ft-phone-incoming buttonAnimation"
          buttonColor="#ffb051"
          title="Total Inbound"
          cardId="DashboardTotalInbound"
          cardPercentage="DashboardTotalInbound-Percent"
          canvasId="chart-total-inbound"
          ref={canvasRefs.inbound}
        />
        <CallStatsCardCopy
          iconextraClass="ft-phone-outgoing"
          buttonColor="#8e6dd4"
          title="Total Outbound"
          cardId="DashboardTotalOutbound"
          cardPercentage="DashboardTotalOutbound-Percent"
          canvasId="chart-total-outbound"
          ref={canvasRefs.outbound}
        />
        <CallStatsCardCopy
          iconextraClass="ft-phone-missed"
          buttonColor="#4ccbfc"
          title="Total Answered"
          cardId="DashboardTotalMissed"
          cardPercentage="DashboardTotalMissed-Percent"
          canvasId="chart-total-missed"
          ref={canvasRefs.answered}
        />
        <CallStatsCardCopy
          iconextraClass="ft-phone-off"
          buttonColor="#fe4d51"
          title="Total Unanswered"
          cardId="DashboardTotalAbondaned"
          cardPercentage="DashboardTotalAbondaned-Percent"
          canvasId="chart-total-abondaned"
          ref={canvasRefs.unanswered}
        />
        <CallStatsCardCopy
          iconextraClass="ft-users"
          buttonColor="#65e0e0"
          title="Total Internal"
          cardId="DashboardTotalExt2Ext"
          cardPercentage="DashboardTotalExt2Ext-Percent"
          canvasId="chart-total-ext2ext"
          ref={canvasRefs.internal}
        />
      </div>
    </div>
  );
};

export default DashBoardStats2;
