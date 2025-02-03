"use client";
import { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface TrunkCardProps {
  id: string;
  name: string;
  active: number;
  inbound: number;
  outbound: number;
  isParent?: boolean;
}

const TrunkCard = ({
  id,
  name,
  active,
  inbound,
  outbound,
  isParent = false,
}: TrunkCardProps) => {
  const chartRef = useRef<am4charts.RadarChart | null>(null);

  useEffect(() => {
    // Initialize chart
    am4core.useTheme(am4themes_animated);
    const chart = am4core.create(`chartdiv-${id}`, am4charts.RadarChart);

    // Add data
    chart.data = [
      {
        category: "Outbound",
        value: outbound,
        full: 100, // Replace with your max value
      },
      {
        category: "Inbound",
        value: inbound,
        full: 100, // Replace with your max value
      },
    ];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(60);
    chart.numberFormatter.numberFormat = "";

    // Create axes
    //@ts-ignore
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    //@ts-ignore
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    //@ts-ignore
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add(
      "fill",
      (fill, target) => {
        return target.dataItem.index >= 0
          ? chart.colors.getIndex(target.dataItem.index)
          : fill;
      }
    );
    categoryAxis.renderer.minGridDistance = 20;
    //@ts-ignore
    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    //@ts-ignore
    valueAxis.min = 0;
    //@ts-ignore
    valueAxis.max = 100; // Simultaneous
    //@ts-ignore
    valueAxis.strictMinMax = true;

    // Create series
    const series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 80;
    series1.columns.template.width = am4core.percent(80);

    const series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 80;
    series2.columns.template.width = am4core.percent(80);

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();

    chartRef.current = chart;

    // Cleanup on unmount
    return () => {
      chart.dispose();
    };
  }, [id, inbound, outbound]);

  return (
    <div className="col-xl-3 col-md-6 column" id={`trunk-item-${id}`}>
      <div className="card pull-up bg-hexagons trunk-card-design">
        <div className="card-header" style={{ background: "none" }}>
          <h4 className="card-title">
            <span className="danger">{isParent ? "1." : `${id}.`}</span> {name}
          </h4>
          <a
            className="btn btn-sm TrunkDetailButton"
            style={{ float: "right" }}
            data-item={id}
            data-name={name}
          >
            <img src="/app-assets/images/icons/detail-button.svg" />
          </a>
        </div>
        <div className="card-content collapse show">
          <div className="card-body pt-0">
            <h1 style={{ fontSize: "100px" }} className="trunk-active">
              {active}
            </h1>
            <div className="trunk-inbound-number">
              <img src="/app-assets/images/icons/inbound-trunk.svg" />
              <h2
                style={{ color: "#9196e3 !important" }}
                className="trunk-inbound"
              >
                {inbound}
              </h2>
            </div>
            <div className="trunk-inbound-number">
              <img src="/app-assets/images/icons/outbound-trunk.svg" />
              <h2
                style={{ color: "#e36496 !important" }}
                className="trunk-outbound"
              >
                {outbound}
              </h2>
            </div>
            <div className="clearfix"></div>
            <section className="trunk-chart-div">
              <div id={`chartdiv-${id}`}></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrunkCard;
