var Localization = {
  TotalCalls: "Total Calls",
  Outbound: "Outbound",
  Inbound: "Inbound",
  NoData: "NoData",
  TotalInbound: "Total Inbound",
  TotalOutbound: "Total Outbound",
  TotalExt2Ext: "Total Internal",
  TotalAbandoned: "Total Abandoned",
  TotalMissed: "Total Missed",
};
$(function () {
  GetMostOutbound();
  GetMostAnswered();
  GetMostTalk();
  GetMostInbound();
  GetDashboardTotal();
});
// const BaseUrl = process.env.NEXT_PUBLIC_API_URLS + "/api/page/";
const BaseUrl = "https://cdr-cloud.onrender.com" + "/api/page/";

console.log("baseurl");
function GetDashboardTotal() {
  // Set overlays on dashboard cards
  SetCardOverlay($("#DashboardTotalCalls").closest(".card"));
  SetCardOverlay($("#DashboardTotalInbound").closest(".card"));
  SetCardOverlay($("#DashboardTotalOutbound").closest(".card"));
  SetCardOverlay($("#DashboardTotalMissed").closest(".card"));
  SetCardOverlay($("#DashboardTotalAbondaned").closest(".card"));
  SetCardOverlay($("#DashboardTotalExt2Ext").closest(".card"));

  $(".index-graphic-bar .numbersize").removeAttr("style");

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");
  const url = BaseUrl + "GetDashboardTotal";
  console.log("Token", token);
  // Make the API call with the Authorization header
  $.ajax({
    type: "POST",
    url: url,
    data: { _f: $(".DashboardFilter.active").attr("data-item") },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      if (data != null) {
        var obj = jQuery.parseJSON(data);

        // Update the dashboard totals with animations
        $("#DashboardTotalCalls").countTo({
          from: 0,
          to: obj.totalcalls,
          speed: 450,
        });
        $("#DashboardTotalInbound").countTo({
          from: 0,
          to: obj.totalinbound,
          speed: 450,
        });
        $("#DashboardTotalOutbound").countTo({
          from: 0,
          to: obj.totaloutbound,
          speed: 450,
        });
        $("#DashboardTotalMissed").countTo({
          from: 0,
          to: obj.totalmissed,
          speed: 450,
        });
        $("#DashboardTotalAbondaned").countTo({
          from: 0,
          to: obj.totalabandoned,
          speed: 450,
        });
        $("#DashboardTotalExt2Ext").countTo({
          from: 0,
          to: obj.totalext2ext,
          speed: 450,
        });

        // Adjust font sizes based on content length
        setTimeout(function () {
          $(".index-graphic-bar .numbersize").each(function () {
            var _text = $(this).text();
            $(this).removeAttr("style");

            if (_text.length <= 4) {
              $(this).attr(
                "style",
                "font-size: 3.3rem !important;line-height: 3.3rem!important;"
              );
            } else if (_text.length == 5) {
              $(this).attr(
                "style",
                "font-size: 42px !important;line-height: 3.3rem!important;"
              );
            } else if (_text.length > 5) {
              $(this).attr(
                "style",
                "font-size: 38px !important;line-height: 3.3rem!important;"
              );
            }
          });
        }, 910);
      }

      // Remove overlays from dashboard cards
      RemoveCardOverlay($("#DashboardTotalCalls").closest(".card"));
      RemoveCardOverlay($("#DashboardTotalInbound").closest(".card"));
      RemoveCardOverlay($("#DashboardTotalOutbound").closest(".card"));
      RemoveCardOverlay($("#DashboardTotalMissed").closest(".card"));
      RemoveCardOverlay($("#DashboardTotalAbondaned").closest(".card"));
      RemoveCardOverlay($("#DashboardTotalExt2Ext").closest(".card"));
    },
  });
}

$(".DashboardFilter").click(function () {
  var _this = $(this);

  $(".DashboardFilter").removeClass("active");
  _this.addClass("active");

  setTimeout(function () {
    GetDashboardTotal();

    var _type = parseInt(_this.attr("data-item"));

    switch (_type) {
      case 1: //günlük
        $('button[data-type="1"][data-statue="1"]').trigger("click");
        $('button[data-type="2"][data-statue="1"]').trigger("click");
        $('button[data-type="3"][data-statue="1"]').trigger("click");
        $('button[data-type="4"][data-statue="1"]').trigger("click");
        break;
      case 2: //aylık
        $('.DashboardGraph a[data-item="2"]').trigger("click");
        $('button[data-type="1"][data-statue="3"]').trigger("click");
        $('button[data-type="2"][data-statue="3"]').trigger("click");
        $('button[data-type="3"][data-statue="3"]').trigger("click");
        $('button[data-type="4"][data-statue="3"]').trigger("click");
        break;
      case 3: //yıllık
        $('.DashboardGraph a[data-item="3"]').trigger("click");
        $('button[data-type="1"][data-statue="4"]').trigger("click");
        $('button[data-type="2"][data-statue="4"]').trigger("click");
        $('button[data-type="3"][data-statue="4"]').trigger("click");
        $('button[data-type="4"][data-statue="4"]').trigger("click");
        break;
      case 4: //haftalık
        $('.DashboardGraph a[data-item="1"]').trigger("click");
        $('button[data-type="1"][data-statue="2"]').trigger("click");
        $('button[data-type="2"][data-statue="2"]').trigger("click");
        $('button[data-type="3"][data-statue="2"]').trigger("click");
        $('button[data-type="4"][data-statue="2"]').trigger("click");
        break;
      default:
    }
  }, 500);
});

var DashboardTotalChart;
var chartOptions;

$(window).on("load", function () {
  require.config({
    paths: {
      echarts: "../../../app-assets/vendors/js/charts/echarts",
    },
  });

  require([
    "echarts",
    "echarts/chart/bar",
    "echarts/chart/line",
  ], function (ec) {
    DashboardTotalChart = ec.init(document.getElementById("basic-area"));

    chartOptions = {
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
        data: [
          Localization.Inbound,
          Localization.Outbound,
          Localization.TotalCalls,
        ],
        textStyle: {
          color: IsDarkTheme ? "#fff" : "#000",
          fontSize: 14,
        },
      },

      color: IsDarkTheme
        ? ["#35A3FF", "#AF60FF", "#626BB4"]
        : ["#FF6BDD", "#6BF8C7", "#FFB051"],

      calculable: true,
    };

    DashboardTotalChart.setOption(chartOptions);

    $(function () {
      $(window).on("resize", resize);
      $(".menu-toggle").on("click", resize);
      function resize() {
        setTimeout(function () {
          DashboardTotalChart.resize();
        }, 200);
      }
    });

    $(".DashboardGraph .dropdown-item.active").trigger("click");
  });
});

$(".DashboardGraph .dropdown-item").click(function () {
  // Set overlay on the card containing the dropdown items
  SetCardOverlay($(".DashboardGraph .dropdown-item").closest(".card"));

  // Manage active class for dropdown items
  $(".DashboardGraph .dropdown-item").removeClass("active");
  $(this).addClass("active");

  // Get the filter value
  var _filter = $(this).attr("data-item");

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");
  console.log("Key:::", token);
  const url = BaseUrl + "GetDashboardGraph";

  // Make the API call with Authorization header
  $.ajax({
    type: "POST",
    url: url,
    data: { _f: _filter },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      if (obj != null) {
        var _xAxis = obj.xAxis.$values;
        var inbound = obj.inboundList.$values;
        var outbound = obj.outboundList.$values;
        var total = obj.totalList.$values;

        var xAxis = [];

        for (var i = 0; i < _xAxis.length; i++) {
          xAxis.push({
            value: _xAxis[i],
            textStyle: { color: IsDarkTheme ? "#fff" : "#000", fontSize: 14 },
          });
        }

        // Set up the chart options
        DashboardTotalChart.setOption(chartOptions, true);

        // Handle the case when there is no data
        if (inbound.length == 0 && outbound.length == 0 && total.length == 0) {
          DashboardTotalChart.setOption({
            title: {
              show: true,
              textStyle: {
                color: "#000000",
                fontSize: 20,
              },
              text: Localization.NoData,
              left: "center",
              top: "center",
            },
            xAxis: {
              show: false,
            },
            yAxis: {
              show: false,
            },
            series: [],
          });
        } else {
          // Update chart with data
          DashboardTotalChart.setOption({
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                data: xAxis,
              },
            ],
            series: [
              {
                name: Localization.Inbound,
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: inbound,
              },
              {
                name: Localization.Outbound,
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: outbound,
              },
              {
                name: Localization.TotalCalls,
                type: "line",
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: "default" } } },
                data: total,
              },
            ],
            yAxis: [
              {
                type: "value",
                axisLabel: {
                  textStyle: {
                    color: IsDarkTheme ? "#fff" : "#000",
                    fontSize: 14,
                  },
                  rotate: 90,
                },
                splitNumber: 3,
              },
            ],
          });
        }
      }

      // Remove overlay from the card
      RemoveCardOverlay($(".DashboardGraph .dropdown-item").closest(".card"));
    },
  });
});

var ChartTotalCalls;
var ChartTotalCallsOptions;
var ChartTotalCallsGradient;

var ChartTotalInbound;
var ChartTotalInboundOptions;
var ChartTotalInboundGradient;

var ChartTotalOutbound;
var ChartTotalOutboundOptions;
var ChartTotalOutboundGradient;

var ChartTotalMissed;
var ChartTotalMissedOptions;
var ChartTotalMissedGradient;

var ChartTotalAbondaned;
var ChartTotalAbondanedOptions;
var ChartTotalAbondanedGradient;

var ChartTotalExt2Ext;
var ChartTotalExt2ExtOptions;
var ChartTotalExt2ExtGradient;

function InitTotalCalls() {
  var btcChartjs = document
    .getElementById("chart-total-calls")
    .getContext("2d");

  ChartTotalCallsGradient = btcChartjs.createLinearGradient(0, 80, 0, 130);
  ChartTotalCallsGradient.addColorStop(0, "rgb(255, 107, 221)");
  ChartTotalCallsGradient.addColorStop(1, "rgba(255,255,255,0)");

  var BTCStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(255, 145, 73,0.8)",
    legend: {
      display: false,
    },
    hover: {
      mode: "label",
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: 0,
            suggestedMax: 85,
          },
        },
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    title: {
      display: false,
      fontColor: "#fff",
      fullWidth: true,
      fontSize: 30,
      text: "52%",
    },
    cornerRadius: 10,

    fullCornerRadius: false,

    stackedRounded: false,
  };

  ChartTotalCallsOptions = {
    type: "bar",

    // Chart Options
    options: BTCStats,

    // Chart Data
    data: {},
  };

  ChartTotalCalls = new Chart(btcChartjs, ChartTotalCallsOptions);
}

function InitTotalInbound() {
  var btcChartjs = document
    .getElementById("chart-total-inbound")
    .getContext("2d");

  ChartTotalInboundGradient = btcChartjs.createLinearGradient(0, 80, 0, 130);
  ChartTotalInboundGradient.addColorStop(0, "rgb(252, 175, 87, 1)");
  ChartTotalInboundGradient.addColorStop(1, "rgba(255,255,255,0)");

  var BTCStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(255, 145, 73,0.8)",
    legend: {
      display: false,
    },
    hover: {
      mode: "label",
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: 0,
            suggestedMax: 85,
          },
        },
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    title: {
      display: false,
      fontColor: "#fff",
      fullWidth: true,
      fontSize: 30,
      text: "52%",
    },
    cornerRadius: 10,

    fullCornerRadius: false,

    stackedRounded: false,
  };

  ChartTotalInboundOptions = {
    type: "bar",

    // Chart Options
    options: BTCStats,

    // Chart Data
    data: {},
  };

  ChartTotalInbound = new Chart(btcChartjs, ChartTotalInboundOptions);
}

function InitTotalOutbound() {
  var btcChartjs = document
    .getElementById("chart-total-outbound")
    .getContext("2d");

  ChartTotalOutboundGradient = btcChartjs.createLinearGradient(0, 80, 0, 130);
  ChartTotalOutboundGradient.addColorStop(0, "rgb(142, 109, 212, 1)");
  ChartTotalOutboundGradient.addColorStop(1, "rgba(255,255,255,0)");

  var BTCStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(255, 145, 73,0.8)",
    legend: {
      display: false,
    },
    hover: {
      mode: "label",
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: 0,
            suggestedMax: 85,
          },
        },
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    title: {
      display: false,
      fontColor: "#fff",
      fullWidth: true,
      fontSize: 30,
      text: "52%",
    },
    cornerRadius: 10,

    fullCornerRadius: false,

    stackedRounded: false,
  };

  ChartTotalOutboundOptions = {
    type: "bar",

    // Chart Options
    options: BTCStats,

    // Chart Data
    data: {},
  };

  ChartTotalOutbound = new Chart(btcChartjs, ChartTotalOutboundOptions);
}

function InitTotalMissed() {
  var btcChartjs = document
    .getElementById("chart-total-missed")
    .getContext("2d");

  ChartTotalMissedGradient = btcChartjs.createLinearGradient(0, 80, 0, 130);
  ChartTotalMissedGradient.addColorStop(0, "rgb(76, 203, 252, 1)");
  ChartTotalMissedGradient.addColorStop(1, "rgba(255,255,255,0)");

  var BTCStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(255, 145, 73,0.8)",
    legend: {
      display: false,
    },
    hover: {
      mode: "label",
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: 0,
            suggestedMax: 85,
          },
        },
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    title: {
      display: false,
      fontColor: "#fff",
      fullWidth: true,
      fontSize: 30,
      text: "52%",
    },
    cornerRadius: 10,

    fullCornerRadius: false,

    stackedRounded: false,
  };

  ChartTotalMissedOptions = {
    type: "bar",

    // Chart Options
    options: BTCStats,

    // Chart Data
    data: {},
  };

  ChartTotalMissed = new Chart(btcChartjs, ChartTotalMissedOptions);
}

function InitTotalAbondaned() {
  var btcChartjs = document
    .getElementById("chart-total-abondaned")
    .getContext("2d");

  ChartTotalAbondanedGradient = btcChartjs.createLinearGradient(0, 80, 0, 130);
  ChartTotalAbondanedGradient.addColorStop(0, "rgb(254, 77, 81, 1)");
  ChartTotalAbondanedGradient.addColorStop(1, "rgba(255,255,255,0)");

  var BTCStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(255, 145, 73,0.8)",
    legend: {
      display: false,
    },
    hover: {
      mode: "label",
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: 0,
            suggestedMax: 85,
          },
        },
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    title: {
      display: false,
      fontColor: "#fff",
      fullWidth: true,
      fontSize: 30,
      text: "52%",
    },
    cornerRadius: 10,

    fullCornerRadius: false,

    stackedRounded: false,
  };

  ChartTotalAbondanedOptions = {
    type: "bar",

    // Chart Options
    options: BTCStats,

    // Chart Data
    data: {},
  };

  ChartTotalAbondaned = new Chart(btcChartjs, ChartTotalAbondanedOptions);
}

function InitTotalExt2Ext() {
  var btcChartjs = document
    .getElementById("chart-total-ext2ext")
    .getContext("2d");

  ChartTotalExt2ExtGradient = btcChartjs.createLinearGradient(0, 80, 0, 130);
  ChartTotalExt2ExtGradient.addColorStop(0, "rgb(101, 224, 202, 1)");
  ChartTotalExt2ExtGradient.addColorStop(1, "rgba(255,255,255,0)");

  var BTCStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(255, 145, 73,0.8)",
    legend: {
      display: false,
    },
    hover: {
      mode: "label",
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: 0,
            suggestedMax: 85,
          },
        },
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    title: {
      display: false,
      fontColor: "#fff",
      fullWidth: true,
      fontSize: 30,
      text: "52%",
    },
    cornerRadius: 10,

    fullCornerRadius: false,

    stackedRounded: false,
  };

  ChartTotalExt2ExtOptions = {
    type: "bar",

    // Chart Options
    options: BTCStats,

    // Chart Data
    data: {},
  };

  ChartTotalExt2Ext = new Chart(btcChartjs, ChartTotalExt2ExtOptions);
}

function DrawTotalCalls(labelList, dataList) {
  var BTCMonthData = {
    labels: labelList,
    datasets: [
      {
        label: "TotalCalls",
        data: dataList,
        backgroundColor: ChartTotalCallsGradient,
        borderColor: "#FF6BDD",
        borderWidth: 2,
        strokeColor: "#ffad87",
        pointRadius: 3,
      },
    ],
  };

  ChartTotalCallsOptions.data = BTCMonthData;
  ChartTotalCalls.update();
}

function DrawTotalInbound(labelList, dataList) {
  var BTCMonthData = {
    labels: labelList,
    datasets: [
      {
        label: Localization.TotalInbound,
        data: dataList,
        backgroundColor: ChartTotalInboundGradient,
        borderColor: "#FFB051",
        borderWidth: 2,
        strokeColor: "#ffad87",
        pointRadius: 3,
      },
    ],
  };

  ChartTotalInboundOptions.data = BTCMonthData;
  ChartTotalInbound.update();
}

function DrawTotalOutbound(labelList, dataList) {
  var BTCMonthData = {
    labels: labelList,
    datasets: [
      {
        label: Localization.TotalOutbound,
        data: dataList,
        backgroundColor: ChartTotalOutboundGradient,
        borderColor: "#8E6DD4",
        borderWidth: 2,
        strokeColor: "#ffad87",
        pointRadius: 3,
      },
    ],
  };

  ChartTotalOutboundOptions.data = BTCMonthData;
  ChartTotalOutbound.update();
}

function DrawTotalMissed(labelList, dataList) {
  var BTCMonthData = {
    labels: labelList,
    datasets: [
      {
        label: Localization.TotalMissed,
        data: dataList,
        backgroundColor: ChartTotalMissedGradient,
        borderColor: "#4CCBFC",
        borderWidth: 2,
        strokeColor: "#ffad87",
        pointRadius: 3,
      },
    ],
  };

  ChartTotalMissedOptions.data = BTCMonthData;
  ChartTotalMissed.update();
}

function DrawTotalAbondaned(labelList, dataList) {
  var BTCMonthData = {
    labels: labelList,
    datasets: [
      {
        label: Localization.TotalAbandoned,
        data: dataList,
        backgroundColor: ChartTotalAbondanedGradient,
        borderColor: "#FE4D51",
        borderWidth: 2,
        strokeColor: "#ffad87",
        pointRadius: 3,
      },
    ],
  };

  ChartTotalAbondanedOptions.data = BTCMonthData;
  ChartTotalAbondaned.update();
}

function DrawTotalExt2Ext(labelList, dataList) {
  var BTCMonthData = {
    labels: labelList,
    datasets: [
      {
        label: Localization.TotalExt2Ext,
        data: dataList,
        backgroundColor: ChartTotalExt2ExtGradient,
        borderColor: "#65E0CA",
        borderWidth: 2,
        strokeColor: "#ffad87",
        pointRadius: 3,
      },
    ],
  };

  ChartTotalExt2ExtOptions.data = BTCMonthData;
  ChartTotalExt2Ext.update();
}

$(function () {
  InitTotalCalls();

  InitTotalInbound();

  InitTotalOutbound();

  InitTotalMissed();

  InitTotalAbondaned();

  InitTotalExt2Ext();

  setTimeout(function () {
    GetDashboardTotalGraph();
  }, 500);
});

function GetDashboardTotalGraph() {
  const url = BaseUrl + "GetDashboardTotalGraph";

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");

  // Make the API call with the Authorization header
  $.ajax({
    type: "POST",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      if (obj != null) {
        // Draw graphs using data from the response
        DrawTotalCalls(obj.dates.$values, obj.calls.$values);
        $(".DashboardTotalCalls-Percent").html(obj.callspercent);

        DrawTotalInbound(obj.dates.$values, obj.inbound.$values);
        $(".DashboardTotalInbound-Percent").html(obj.inboundpercent);

        DrawTotalOutbound(obj.dates.$values, obj.outbound.$values);
        $(".DashboardTotalOutbound-Percent").html(obj.outboundpercent);

        DrawTotalMissed(obj.dates.$values, obj.missed.$values);
        $(".DashboardTotalMissed-Percent").html(obj.missedpercent);

        DrawTotalAbondaned(obj.dates.$values, obj.abandoned.$values);
        $(".DashboardTotalAbondaned-Percent").html(obj.abandonedpercent);

        DrawTotalExt2Ext(obj.dates.$values, obj.ext2ext.$values);
        $(".DashboardTotalExt2Ext-Percent").html(obj.ext2extpercent);
      }
    },
    error: function (error) {
      console.error("Error fetching dashboard total graph data: ", error);
    },
  });
}

Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth;

  // If radius is less than 0 or is large enough to cause drawing errors a max
  //      radius is imposed. If cornerRadius is not defined set it to 0.
  var cornerRadius = this._chart.config.options.cornerRadius;
  var fullCornerRadius = this._chart.config.options.fullCornerRadius;
  var stackedRounded = this._chart.config.options.stackedRounded;
  var typeOfChart = this._chart.config.type;

  if (cornerRadius < 0) {
    cornerRadius = 0;
  }
  if (typeof cornerRadius == "undefined") {
    cornerRadius = 0;
  }
  if (typeof fullCornerRadius == "undefined") {
    fullCornerRadius = false;
  }
  if (typeof stackedRounded == "undefined") {
    stackedRounded = false;
  }

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || "bottom";
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || "left";
  }

  // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line
  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2;
    // Adjust borderWidth when bar top position is near vm.base(zero).
    var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
    var borderRight =
      right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
    var borderBottom =
      bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
    // not become a vertical line?
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    // not become a horizontal line?
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;

  // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |
  var corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom],
  ];

  // Find first (starting) corner with fallback to 'bottom'
  var borders = ["bottom", "left", "top", "right"];
  var startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  // Draw rectangle from 'startCorner'
  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  var nextCornerId, nextCorner, width, height, x, y;
  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    nextCornerId = i + 1;
    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    nextCorner = cornerAt(nextCornerId);

    width = corners[2][0] - corners[1][0];
    height = corners[0][1] - corners[1][1];
    x = corners[1][0];
    y = corners[1][1];

    var radius = cornerRadius;
    // Fix radius being too large
    if (radius > Math.abs(height) / 2) {
      radius = Math.floor(Math.abs(height) / 2);
    }
    if (radius > Math.abs(width) / 2) {
      radius = Math.floor(Math.abs(width) / 2);
    }

    var x_tl, x_tr, y_tl, y_tr, x_bl, x_br, y_bl, y_br;
    if (height < 0) {
      // Negative values in a standard bar chart
      x_tl = x;
      x_tr = x + width;
      y_tl = y + height;
      y_tr = y + height;

      x_bl = x;
      x_br = x + width;
      y_bl = y;
      y_br = y;

      // Draw
      ctx.moveTo(x_bl + radius, y_bl);

      ctx.lineTo(x_br - radius, y_br);

      // bottom right
      ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);

      ctx.lineTo(x_tr, y_tr + radius);

      // top right
      fullCornerRadius
        ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr)
        : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);

      ctx.lineTo(x_tl + radius, y_tl);

      // top left
      fullCornerRadius
        ? ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius)
        : ctx.lineTo(x_tl, y_tl, x_tl, y_tl + radius);

      ctx.lineTo(x_bl, y_bl - radius);

      //  bottom left
      ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
    } else if (width < 0) {
      // Negative values in a horizontal bar chart
      x_tl = x + width;
      x_tr = x;
      y_tl = y;
      y_tr = y;

      x_bl = x + width;
      x_br = x;
      y_bl = y + height;
      y_br = y + height;

      // Draw
      ctx.moveTo(x_bl + radius, y_bl);

      ctx.lineTo(x_br - radius, y_br);

      //  Bottom right corner
      fullCornerRadius
        ? ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius)
        : ctx.lineTo(x_br, y_br, x_br, y_br - radius);

      ctx.lineTo(x_tr, y_tr + radius);

      // top right Corner
      fullCornerRadius
        ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr)
        : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);

      ctx.lineTo(x_tl + radius, y_tl);

      // top left corner
      ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);

      ctx.lineTo(x_bl, y_bl - radius);

      //  bttom left corner
      ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
    } else {
      var lastVisible = 0;
      for (
        var findLast = 0, findLastTo = this._chart.data.datasets.length;
        findLast < findLastTo;
        findLast++
      ) {
        if (!this._chart.getDatasetMeta(findLast).hidden) {
          lastVisible = findLast;
        }
      }
      var rounded = this._datasetIndex === lastVisible;

      if (rounded) {
        //Positive Value
        ctx.moveTo(x + radius, y);

        ctx.lineTo(x + width - radius, y);

        // top right
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

        ctx.lineTo(x + width, y + height - radius);

        // bottom right
        if (fullCornerRadius || typeOfChart == "horizontalBar")
          ctx.quadraticCurveTo(
            x + width,
            y + height,
            x + width - radius,
            y + height
          );
        else ctx.lineTo(x + width, y + height, x + width - radius, y + height);

        ctx.lineTo(x + radius, y + height);

        // bottom left
        if (fullCornerRadius)
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        else ctx.lineTo(x, y + height, x, y + height - radius);

        ctx.lineTo(x, y + radius);

        // top left
        if (fullCornerRadius || typeOfChart == "bar")
          ctx.quadraticCurveTo(x, y, x + radius, y);
        else ctx.lineTo(x, y, x + radius, y);
      } else {
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y);
      }
    }
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};

$(".customizer-toggle").on("click", function () {
  $(".customizer").toggleClass("open");
});

$(".customizer-close").on("click", function () {
  $(".customizer").removeClass("open");
});

var DashboardPostArray = [];

$(document).on("click", "#nav-tab button", function () {
  $(this).tab("show");

  var _type = $(this).attr("data-type");
  var _statue = $('#nav-tab button[data-type="' + _type + '"].active').attr(
    "data-statue"
  );

  if (DashboardPostArray.indexOf("top-five-" + _type + "-" + _statue) == -1) {
    if (_type == "1") {
      GetMostTalk();
    } else if (_type == "2") {
      GetMostAnswered();
    } else if (_type == "3") {
      GetMostInbound();
    } else if (_type == "4") {
      GetMostOutbound();
    }
  }
});

function GetMostOutbound() {
  // Get the status and target div from active button attributes
  var _statue = $('#nav-tab button[data-type="4"].active').attr("data-statue");
  var _div = $('#nav-tab button[data-type="4"].active').attr("data-target");

  // Show a loading spinner while the request is in progress
  $(_div).html(
    '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px" />'
  );

  const url = BaseUrl + "DashboardMostOutbound";

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");

  // Make the API request using the token in the headers
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { _f: _statue },
    success: function (obj) {
      // Populate the div with the response data
      $(_div).html(obj);
      DashboardPostArray.push("top-five-4-" + _statue);
    },
    error: function (error) {
      console.error("Error fetching most outbound data: ", error);
      $(_div).html(
        '<p style="text-align:center;color:red;">Failed to load data.</p>'
      );
    },
  });
}

function GetMostAnswered() {
  // Get the status and target div from active button attributes
  var _statue = $('#nav-tab button[data-type="2"].active').attr("data-statue");
  var _div = $('#nav-tab button[data-type="2"].active').attr("data-target");

  // Show a loading spinner while the request is in progress
  $(_div).html(
    '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px" />'
  );

  const url = BaseUrl + "DashboardMostAnswered";

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");

  // Make the API request using the token in the headers
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { _f: _statue },
    success: function (obj) {
      // Populate the div with the response data
      $(_div).html(obj);
      DashboardPostArray.push("top-five-2-" + _statue);
    },
    error: function (error) {
      console.error("Error fetching most answered data: ", error);
      $(_div).html(
        '<p style="text-align:center;color:red;">Failed to load data.</p>'
      );
    },
  });
}

function GetMostTalk() {
  // Get the status and target div from active button attributes
  var _statue = $('#nav-tab button[data-type="1"].active').attr("data-statue");
  var _div = $('#nav-tab button[data-type="1"].active').attr("data-target");

  // Show a loading spinner while the request is in progress
  $(_div).html(
    '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px" />'
  );

  const url = BaseUrl + "DashboardMostTalk";

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");

  // Make the API request using the token in the headers
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { _f: _statue },
    success: function (obj) {
      // Populate the div with the response data
      $(_div).html(obj);
      DashboardPostArray.push("top-five-1-" + _statue);
    },
    error: function (error) {
      console.error("Error fetching most talk data: ", error);
      $(_div).html(
        '<p style="text-align:center;color:red;">Failed to load data.</p>'
      );
    },
  });
}

function GetMostInbound() {
  // Get the status and target div from active button attributes
  var _statue = $('#nav-tab button[data-type="3"].active').attr("data-statue");
  var _div = $('#nav-tab button[data-type="3"].active').attr("data-target");

  // Show a loading spinner while the request is in progress
  $(_div).html(
    '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px" />'
  );

  const url = BaseUrl + "DashboardMostInbound";

  // Get the token from local storage
  const token = sessionStorage.getItem("accessToken");

  // Make the API request using the token in the headers
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { _f: _statue },
    success: function (obj) {
      // Populate the div with the response data
      $(_div).html(obj);
      DashboardPostArray.push("top-five-3-" + _statue);
    },
    error: function (error) {
      console.error("Error fetching most inbound data: ", error);
      $(_div).html(
        '<p style="text-align:center;color:red;">Failed to load data.</p>'
      );
    },
  });
}

$("#most-talk-refresh").click(function () {
  GetMostTalk();
});

$("#most-ans-refresh").click(function () {
  GetMostAnswered();
});

$("#least-talk-refresh").click(function () {
  GetMostInbound();
});

$("#least-ans-refresh").click(function () {
  GetMostOutbound();
});
