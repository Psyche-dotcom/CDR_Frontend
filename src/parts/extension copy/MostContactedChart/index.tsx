"use client";
import React, { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
  ChartTypeRegistry,
} from "chart.js/auto";

const mockData = {
  $id: "1",
  labels: {
    $id: "2",
    $values: [
      "2160 - Emre Orhan",
      "2161 - Emre Orhan",
      "5010 - ADNAN DIKICI",
      "5027 - GUVENLIK",
      "1200 - V2 Resepsiyon",
      "2220 - Çetin Altaş",
      "2868 - Ainur Tanadbayeva Cep",
      "1001 - Hiddenbay Info",
      "2260 - Süleyman Çelik",
      "2250 - Mehmet İbili",
    ],
  },
  inbound: {
    $id: "3",
    $values: [160, 71, 0, 1, 0, 0, 0, 0, 0, 0],
  },
  outbound: {
    $id: "4",
    $values: [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  missed: {
    $id: "5",
    $values: [92, 42, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

const MostContactedChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const chartData = {
          labels: mockData.labels.$values,
          datasets: [
            {
              type: "bar",
              label: "Inbound",
              data: mockData.inbound.$values,
              backgroundColor: "#12F8C0",
              borderColor: "transparent",
              borderWidth: 2,
            },
            {
              type: "bar",
              label: "Outbound",
              data: mockData.outbound.$values,
              backgroundColor: "#FF52A5",
              borderColor: "transparent",
              borderWidth: 2,
            },
            {
              type: "bar",
              label: "Missed",
              data: mockData.missed.$values,
              backgroundColor: "#FFE37E",
              borderColor: "transparent",
              borderWidth: 2,
            },
          ],
        };

        const chartOptions: ChartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              grid: {
                color: "#f3f3f3",
                drawTicks: false,
              },
              ticks: {
                padding: 15,
              },
            },
            y: {
              display: true,
              grid: {
                color: "#f3f3f3",
                drawTicks: false,
              },
            },
          },
          onClick: (event, elements) => {
            if (elements.length > 0) {
              const index = elements[0].index;
              const x_value = chartData.labels[index];
              window.location.href = `/dashboard2/user/${
                x_value.split("-")[0]
              }`;
            }
          },
        };

        const config: ChartConfiguration = {
          type: "bar",
          //@ts-ignore
          data: chartData,
          options: chartOptions,
        };

        chartInstance.current = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="card-body chartjs">
      <canvas
        ref={chartRef}
        height="400"
        style={{ cursor: "pointer" }}
      ></canvas>
    </div>
  );
};

export default MostContactedChart;
