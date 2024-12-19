const Localization = {
  TotalInbound: "Total Inbound",
  TotalOutbound: "Total Outbound",
  TotalExt2Ext: "Total Internal",
  TotalMissed: "Total Missed",
  TotalAbandoned: "Total  Abandoned",
  NoData: "No Data",
  Inbound: "Inbound",
  Outbound: "Outbound",
  Top5List: "Top 5 List",
};

const IsDarkTheme = false;
$(function () {
  GetTotalCalls(3);

  GetGeneralStatistic();

  GetInboundStatistic();

  GetOutboundStatistic();

  GetExt2ExtStatistic();
});
const BaseUrl = "https://cdr-cloud.onrender.com" + "/api/company/";
const token = sessionStorage.getItem("accessToken");

function GetTotalCalls(_f) {
  SetCardOverlay($("#MonthlyTotalCalls"));

  const url = BaseUrl + "GetTotalCalls";

  $.ajax({
    url: url,
    type: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      var _xAxis = obj.xAxis.$values;
      var inbound = obj.inboundList.$values;
      var outbound = obj.outboundList.$values;

      var xAxis = [];

      for (var i = 0; i < _xAxis.length; i++) {
        xAxis.push({
          value: _xAxis[i],
          textStyle: { color: IsDarkTheme ? "#fff" : "#000", fontSize: 14 },
        });
      }

      require.config({
        paths: {
          echarts: "../vendors/js/charts/echarts",
        },
      });

      require(["echarts", "echarts/chart/bar", "echarts/chart/line"], function (
        ec
      ) {
        var myChart = ec.init(document.getElementById("basic-column"));

        if (_xAxis.length == 0) {
          myChart.setOption({
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
            legend: {
              show: false,
            },
            series: [],
          });
        } else {
          var chartOptions = {
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
              data: [Localization.Inbound, Localization.Outbound],
              textStyle: {
                color: IsDarkTheme ? "#fff" : "#000",
                fontSize: 14,
              },
            },

            color: ["#4466FD", "#FE3B89"],

            calculable: true,

            xAxis: [
              {
                type: "category",
                data: xAxis.length > 0 ? xAxis : [Localization.NoData],
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

            series: [
              {
                name: Localization.Inbound,
                type: "bar",
                data: inbound,
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
                name: Localization.Outbound,
                type: "bar",
                data: outbound,
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

          myChart.setOption(chartOptions);
        }

        $(function () {
          $(window).on("resize", resize);
          $(".menu-toggle").on("click", resize);

          function resize() {
            setTimeout(function () {
              myChart.resize();
            }, 200);
          }
        });
      });

      RemoveCardOverlay($("#MonthlyTotalCalls"));
    },
    error: function (error) {
      console.error("Error in API request:", error);
    },
  });
}

var CallSummaryChart;
var chartOptions2;

$(function () {
  require.config({
    paths: {
      echarts: "../vendors/js/charts/echarts",
    },
  });

  require([
    "echarts",
    "echarts/chart/bar",
    "echarts/chart/line",
  ], function (ec) {
    CallSummaryChart = ec.init(document.getElementById("stacked-column"));

    chartOptions2 = {
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
          Localization.TotalInbound,
          Localization.TotalInbound,
          Localization.TotalOutbound,
          Localization.TotalExt2Ext,
          Localization.TotalMissed,
          Localization.TotalAbandoned,
        ],
        textStyle: {
          color: IsDarkTheme ? "#fff" : "#000",
          fontSize: 14,
        },
      },

      color: ["#0CE2BC", "#FF9F40", "#36A2EB", "#FF6384", "#FFCE56"],

      calculable: true,

      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: { color: IsDarkTheme ? "#fff" : "#000", fontSize: 14 },
          },
        },
      ],
    };

    CallSummaryChart.setOption(chartOptions2);

    $(function () {
      $(window).on("resize", resize);
      $(".menu-toggle").on("click", resize);
      function resize() {
        setTimeout(function () {
          CallSummaryChart.resize();
        }, 200);
      }
    });

    $("#CallSummaryFilter").trigger("change");
  });
});

$("#CallSummaryFilter").on("change", function () {
  SetCardOverlay($("#CallSummaryCard"));

  var _filter = this.value;

  const url = BaseUrl + "GetCallSummary";

  var payload = { _f: _filter };

  $.ajax({
    url: url,
    type: "POST",
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      var _xAxis = obj.dates.$values;
      var inbound = obj.inbound.$values;
      var outbound = obj.outbound.$values;
      var missed = obj.missed.$values;
      var ext2ext = obj.ext2ext.$values;
      var abandoned = obj.abandoned.$values;

      if (_xAxis.length > 0) {
        var xAxis = [];

        for (var i = 0; i < _xAxis.length; i++) {
          var _item = _xAxis[i].split(".");
          var _new = _item[0];
          xAxis.push({
            value: _new,
            textStyle: { color: IsDarkTheme ? "#fff" : "#000", fontSize: 14 },
          });
        }

        CallSummaryChart.setOption(chartOptions2, true);

        CallSummaryChart.setOption({
          xAxis: [
            {
              type: "category",
              data: _filter == 1 ? _xAxis : xAxis,
            },
          ],
          series: [
            {
              name: Localization.TotalInbound,
              type: "bar",
              data: inbound,
              stack: "advertising",
            },
            {
              name: Localization.TotalOutbound,
              type: "bar",
              data: outbound,
              stack: "advertising",
            },
            {
              name: Localization.TotalExt2Ext,
              type: "bar",
              data: ext2ext,
              stack: "advertising",
            },
            {
              name: Localization.TotalMissed,
              type: "bar",
              data: missed,
              stack: "search",
            },
            {
              name: Localization.TotalAbandoned,
              type: "bar",
              data: abandoned,
              stack: "search",
            },
          ],
        });
      } else {
        var msgOption = {
          title: {
            show: true,
            textStyle: {
              color: "black",
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
        };
        CallSummaryChart.clear();
        CallSummaryChart.hideLoading();
        CallSummaryChart.setOption(msgOption);
      }

      RemoveCardOverlay($("#CallSummaryCard"));
    },
    error: function (error) {
      console.error("Error in API request:", error);
    },
  });
});

var MostContactedChart;
var MostContactedChartOptions;

$(function () {
  require.config({
    paths: {
      echarts: "../vendors/js/charts/echarts",
    },
  });

  require([
    "echarts",
    "echarts/chart/pie",
    "echarts/chart/funnel",
  ], function (ec) {
    MostContactedChart = ec.init(document.getElementById("basic-pie"));
    console.log("most contacted here ");
    MostContactedChartOptions = {
      title: {
        text: Localization.Top5List,
        subtext: "",
        x: "center",
        textStyle: { color: IsDarkTheme ? "#fff" : "#000", fontSize: 18 },
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
    };

    MostContactedChart.setOption(MostContactedChartOptions);

    $(function () {
      $(window).on("resize", resize);
      $(".menu-toggle").on("click", resize);

      function resize() {
        setTimeout(function () {
          MostContactedChart.resize();
        }, 200);
      }
    });

    GetMostContacted(
      $(".MostContactedFilter .dropdown-item.active").attr("data-item")
    );
  });
});

function GetMostContacted(f) {
  // SetCardOverlay($(".MostContactedFilter .dropdown-item").closest(".card"));

  const url = BaseUrl + "GetMostContacted";

  var payload = { _f: f };

  $.ajax({
    url: url,
    type: "POST",
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      var _seriesData = [];

      for (var i = 0; i < obj.dataList.$values.length; i++) {
        _seriesData.push({
          value: obj.dataList.$values[i].numofcalls,
          name: obj.dataList.$values[i].d_name,
        });
      }

      MostContactedChart.setOption(MostContactedChartOptions, true);

      if (_seriesData.length == 0) {
        MostContactedChart.setOption({
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
          legend: {
            show: false,
          },
          series: [],
        });
      } else {
        var options = {
          legend: {
            orient: "vertical",
            x: "left",
            data: obj.dataNameList,
            textStyle: { color: IsDarkTheme ? "#fff" : "#000", fontSize: 14 },
          },
          series: [
            {
              name: Localization.Person,
              type: "pie",
              radius: "70%",
              center: ["50%", "57.5%"],
              data: _seriesData,
            },
          ],
        };

        MostContactedChart.setOption(options);
      }

      RemoveCardOverlay(
        $(".MostContactedFilter .dropdown-item").closest(".card")
      );
    },
    error: function (error) {
      console.error("Error in API request:", error);
    },
  });
}

$(".MostContactedFilter .dropdown-item").click(function () {
  $(".MostContactedFilter .dropdown-item").removeClass("active");
  $(this).addClass("active");

  GetMostContacted(
    $(".MostContactedFilter .dropdown-item.active").attr("data-item")
  );
});

$(".customizer-toggle").on("click", function () {
  $(".customizer").toggleClass("open");
});

$(".customizer-close").on("click", function () {
  $(".customizer").removeClass("open");
});

var StatisticFilterPost = [];

$(".StatisticFilter").click(function () {
  var _this = $(this);

  $(".StatisticFilter").removeClass("active");
  _this.addClass("active");

  GetGeneralStatistic();

  GetInboundStatistic();

  GetOutboundStatistic();

  GetExt2ExtStatistic();
});

function GetGeneralStatistic() {
  var _filter = $(".StatisticFilter.active").attr("data-item");

  var _row = StatisticFilterPost.find(
    (x) => x.type === 1 && x.time === _filter
  );

  if (_row == undefined) {
    $("#GeneralStatistic").html(
      '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px;" />'
    );

    const url = BaseUrl + `GeneralStatistic?_f=${_filter}`;

    $.ajax({
      url: url,
      type: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (obj) {
        $("#GeneralStatistic").html(obj);

        StatisticFilterPost.push({ type: 1, time: _filter, data: obj });
      },
      error: function (error) {
        console.error("Error in API request:", error);
      },
    });
  } else {
    $("#GeneralStatistic").html(_row.data);
  }
}

function GetInboundStatistic() {
  var _filter = $(".StatisticFilter.active").attr("data-item");

  var _row = StatisticFilterPost.find(
    (x) => x.type === 2 && x.time === _filter
  );

  if (_row == undefined) {
    $("#InboundStatistic").html(
      '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px;" />'
    );

    const url = BaseUrl + `InboundStatistic?_f=${_filter}`;

    $.ajax({
      url: url,
      type: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (obj) {
        $("#InboundStatistic").html(obj);

        StatisticFilterPost.push({ type: 2, time: _filter, data: obj });
      },
      error: function (error) {
        console.error("Error in API request:", error);
      },
    });
  } else {
    $("#InboundStatistic").html(_row.data);
  }
}

function GetOutboundStatistic() {
  var _filter = $(".StatisticFilter.active").attr("data-item");

  var _row = StatisticFilterPost.find(
    (x) => x.type === 3 && x.time === _filter
  );

  if (_row == undefined) {
    $("#OutboundStatistic").html(
      '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px;" />'
    );

    const url = BaseUrl + `OutboundStatistic?_f=${_filter}`;

    $.ajax({
      url: url,
      type: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (obj) {
        $("#OutboundStatistic").html(obj);

        StatisticFilterPost.push({ type: 3, time: _filter, data: obj });
      },
      error: function (error) {
        console.error("Error in API request:", error);
      },
    });
  } else {
    $("#OutboundStatistic").html(_row.data);
  }
}

function GetExt2ExtStatistic() {
  var _filter = $(".StatisticFilter.active").attr("data-item");

  var _row = StatisticFilterPost.find(
    (x) => x.type === 4 && x.time === _filter
  );

  if (_row == undefined) {
    $("#Ext2ExtStatistic").html(
      '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px;" />'
    );

    const url = BaseUrl + `InternalStatistic?_f=${_filter}`;

    $.ajax({
      url: url,
      type: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (obj) {
        $("#Ext2ExtStatistic").html(obj);

        StatisticFilterPost.push({ type: 4, time: _filter, data: obj });
      },
      error: function (error) {
        console.error("Error in API request:", error);
      },
    });
  } else {
    $("#Ext2ExtStatistic").html(_row.data);
  }
}
