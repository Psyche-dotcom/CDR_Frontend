var Localization = {
  sEmptyTable: "No data available in table",
  sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
  sInfoEmpty: "Showing 0 to 0 of 0 entries",
  sInfoFiltered: "(filtered from _MAX_ total entries)",
  sLengthMenu: "Show _MENU_ entries",
  sLoadingRecords: "Loading...",
  sProcessing: "Processing..",
  sSearch: "Search",
  sZeroRecords: "No matching records found",
  sFirst: "First",
  sLast: "Last",
  sNext: "Next",
  sPrevious: "Previous",
  Favorite: "Favorite",
  FavoriBaslikMesaji: "Please write your favorite name",
  WriteSomething: "Write something",
  EnAz1SecimYap: "Select at least 1 option",
  Error: "Error",
  Success: "Success",
  AreYouSure: "Are You Sure",
  FavoriSilmekEminMisiniz: "Are you sure to delete your favorite filter?",
  EvetSil: "Yes, delete it",
  FavoriFiltrelemesiBulunamadi: "Favorite filter information not found",
  RecordingNotFound: "Recording Not Found",
  SelectPackage: "Select Package",
  SelectedPackage: "Selected Package",
};

var BaseUrl = "https://cdr-cloud.onrender.com" + "/api/membership/";
var BaseUrl2 = "https://cdr-cloud.onrender.com" + "/api/";
var token = sessionStorage.getItem("accessToken");

$(function () {
  DrawGraph();
});

$("#TransactionTable").DataTable({
  processing: true,
  pageLength: 10,
  ajax: {
    url: BaseUrl + "GetTransactionList",
    type: "POST",
    datatype: "json",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    dataSrc: function (json) {
      var result = [];

      if (json.transactions != null) {
        for (var i = 0; i < json.transactions.$values.length; i++) {
          var newobj = {
            Date: json.transactions.$values[i].createdDateString,
            PackageName: json.transactions.$values[i].packageName,
            Transaction: json.transactions.$values[i].transactionId,
            Price:
              '<span class="table-price">' +
              json.transactions.$values[i].priceString +
              "</span>",
          };
          result.push(newobj);
        }
      }

      return result;
    },
  },

  columns: [
    {
      data: "Date",
      render: function (data, type, row, meta) {
        if (type === "display") {
          var tempdata = StringToDate(data);
          return (
            '<span class="table-date">' + DateToString(tempdata) + "</span>"
          );
        } else {
          return data;
        }
      },
    },
    { data: "PackageName" },
    { data: "Transaction" },
    { data: "Price" },
  ],
  fnDrawCallback: function (oSettings) {},
  resposive: true,
  autoWidth: false,
  bLengthChange: false,
  order: [[0, "desc"]],
  language: {
    sEmptyTable: Localization.sEmptyTable,
    sInfo: Localization.sInfo,
    sInfoEmpty: Localization.sInfoEmpty,
    sInfoFiltered: Localization.sInfoFiltered,
    sLengthMenu: Localization.sLengthMenu,
    sLoadingRecords: Localization.sLoadingRecords,
    sSearch: Localization.sSearch,
    sZeroRecords: Localization.sZeroRecords,
    oPaginate: {
      sFirst: Localization.sFirst,
      sLast: Localization.sLast,
      sNext: Localization.sNext,
      sPrevious: Localization.sPrevious,
    },
  },
  oLanguage: { sProcessing: '<span class="load load-button"></span>' },
});

function StringToDate(data) {
  try {
    var _year = Number(data.split(" ")[0].split("-")[0]);
    var _month = Number(data.split(" ")[0].split("-")[1]);
    var _day = Number(data.split(" ")[0].split("-")[2]);
    var _hour = Number(data.split(" ")[1].split(":")[0]);
    var _minute = Number(data.split(" ")[1].split(":")[1]);
    var _second = Number(data.split(" ")[1].split(":")[2].split(".")[0]);

    return new Date(_year, _month - 1, _day, _hour, _minute, _second);
  } catch (e) {
    return data;
  }
}

function DateToString(data) {
  if (typeof data.getMonth === "function") {
    var mm = data.getMonth() + 1;
    var dd = data.getDate();
    var HH = data.getHours();
    var Minute = data.getMinutes();

    var result = (dd > 9 ? "" : "0") + dd + "/";
    result += (mm > 9 ? "" : "0") + mm + "/";
    result += data.getFullYear() + " ";
    result += (HH > 9 ? "" : "0") + HH + ":";
    result += (Minute > 9 ? "" : "0") + Minute;

    return result;
  } else {
    return data;
  }
}

function DrawGraph() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var gradientList = [];

  var gradient = new am4core.LinearGradient();
  gradient.addColor(am4core.color("#a3a0e4"));
  gradient.addColor(am4core.color("#70b0ec"));
  gradient.addColor(am4core.color("#00d4ff"));
  gradient.rotation = 90;

  var gradient2 = new am4core.LinearGradient();
  //gradient2.addColor(am4core.color("#e4a0a4"));
  //gradient2.addColor(am4core.color("#ecb270"));
  //gradient2.addColor(am4core.color("#ffeb00"));

  gradient2.addColor(am4core.color("#ef629f"));
  gradient2.addColor(am4core.color("#ffd298"));

  gradient2.rotation = 90;

  gradientList.push(gradient2);
  gradientList.push(gradient);

  var colorSet = new am4core.ColorSet();
  colorSet.list = ["#ef629f", "#a3a0e4"].map(function (color) {
    return new am4core.color(color);
  });

  // Create chart instance
  var chart = am4core.create("chartdiv-all", am4charts.RadarChart);

  // Add data
  chart.data = [
    {
      category: "Outbound",
      value: _now,
      full: _full,
    },
  ];

  chart.colors = colorSet;

  // Make chart not full circle
  chart.startAngle = 0;
  chart.endAngle = 365;
  chart.innerRadius = am4core.percent(60);

  // Set number format
  chart.numberFormatter.numberFormat = "";

  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.grid.template.strokeOpacity = 0;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.fontWeight = 500;
  categoryAxis.renderer.labels.hidden = true;
  categoryAxis.renderer.labels.template.adapter.add(
    "fill",
    function (fill, target) {
      return target.dataItem.index >= 0
        ? chart.colors.getIndex(target.dataItem.index)
        : fill;
    }
  );
  categoryAxis.renderer.minGridDistance = 20;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeOpacity = 0;
  valueAxis.min = 0;
  valueAxis.max = 100;
  valueAxis.strictMinMax = true;

  // Create series
  var series1 = chart.series.push(new am4charts.RadarColumnSeries());
  series1.dataFields.valueX = "full";
  series1.dataFields.categoryY = "category";
  series1.clustered = false;
  series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
    "alternativeBackground"
  );
  series1.columns.template.fillOpacity = 0.08;
  series1.columns.template.cornerRadiusTopLeft = 0;
  series1.columns.template.strokeWidth = 0;
  series1.columns.template.radarColumn.cornerRadius = 80;
  series1.columns.template.width = am4core.percent(80);

  var series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueX = "value";
  series2.dataFields.categoryY = "category";
  series2.clustered = false;
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
  series2.columns.template.radarColumn.cornerRadius = 80;
  series2.columns.template.width = am4core.percent(80);

  series2.columns.template.adapter.add("fill", function (fill, target) {
    return gradientList[target.dataItem.index];
  });
}

$("#BuyPackageButtonTop").click(function () {
  $("#BuyPackageButton").trigger("click");
});

$("#btnShowPromotionCodeModal").click(function () {
  $("#UsePromotionCodeModal").modal("show");
});

$("#BuyPackageButton").click(function () {
  $(".PostLoader").show();

  const url = BaseUrl + "GetBuyPackage";
  $.ajax({
    url: url,
    type: "GET",
    beforeSend: function (xhr) {
      // Add the JWT token to the request headers
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    },
    success: function (obj) {
      $("#BuyPackageContent").html(obj);

      $(".number-tab-steps").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="step">#index#</span> #title#',
        labels: {
          finish: Localization.Send,
          next: Localization.sNext,
          previous: Localization.sPrevious,
        },
        onInit: function () {
          $(".bselect:not(.Setted)").each(function () {
            var selectonclose = typeof $(this).attr("multiple") == "undefined";
            $(this).css("width", "100%");

            $(this).select2({
              width: "100%",
              closeOnSelect: selectonclose,
              language: "tr",
            });

            $(this).addClass("Setted");
          });

          if (Country > 0) {
            $("#invoice-country").val(Country).trigger("change");
          }
        },
        onStepChanged: function () {
          $(".number-tab-steps .actions ul li:last-child").hide();
        },
        onStepChanging: function (event, currentIndex, newIndex) {
          if (currentIndex == 0 && (newIndex == 1 || newIndex == 2)) {
            var _selectedPackage = $(".package-list-item.selected").length;
            if (_selectedPackage == 0) {
              toastr.error(
                Localization.PleaseSelectPackage,
                Localization.Error
              );
            } else {
              $(".page-loader-wrapper").show();

              var data = {
                PackagePublicId: $(
                  ".package-list-item.selected .SelectedPackageInput"
                ).val(),
              };

              const url = BaseUrl + "CreateDeposit";

              $.ajax({
                url: url,
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                beforeSend: function (xhr) {
                  xhr.setRequestHeader("Authorization", `Bearer ${token}`);
                },
                success: function (obj) {
                  $(".page-loader-wrapper").hide();

                  obj = jQuery.parseJSON(obj);

                  if (obj.ResultStatus == 0) {
                    SelectDeposite = obj.PublicId;

                    if (typeof iyziInit != "undefined") {
                      iyziInit = undefined;
                    }

                    var data2 = {
                      DepositId: obj.PublicId,
                    };

                    const url2 =
                      BaseUrl + `CreditCard?DepositId=${obj.PublicId}`;

                    $.ajax({
                      url: url2,
                      type: "GET",
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                      success: function (obj2) {
                        $("#credit-card-container").html(obj2);
                      },
                    });

                    return true;
                  } else {
                    toastr.error(obj.Message, Localization.Error);
                    $(".steps ul li:first a").trigger("click");
                  }
                },
                error: function (xhr, status, error) {
                  console.error("An error occurred:", status, error);
                },
              });

              return true;
            }
          } else if (currentIndex == 1 && newIndex == 0) {
            if (typeof iyziInit != "undefined") {
              iyziInit = undefined;
            }
            return true;
          } else return true;
        },
        onFinished: function (event, currentIndex) {},
      });

      $(".PostLoader").hide();

      $("html, body").animate(
        {
          scrollTop: $("#BuyPackageContent").offset().top,
        },
        1000
      );
    },
  });
});

$(document).on("click", ".selectedPackage", function () {
  $(".package-list-item").removeClass("selected");
  $(this).closest(".package-list-item").addClass("selected");

  $(".package-button").remove();

  $(".package-list-item").each(function () {
    var _that = $(this);
    if (_that.hasClass("selected")) {
      _that
        .find(".card-footer")
        .append(
          '<button type="button" class="btn btn-lg package-button btn-block btn-warning">' +
            Localization.SelectedPackage +
            "</button>"
        );
    } else {
      _that
        .find(".card-footer")
        .append(
          '<button type="button" class="btn btn-lg btn-block package-button btn-outline-warning selectedPackage">' +
            Localization.SelectPackage +
            "</button>"
        );
    }
  });
});

$(document).on("keyup paste", "#invoice-zip-code", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

$(document).on("change", "#invoice-country", function () {
  const url = BaseUrl2 + `user/GetCityListByCountryId?CountryId=${this.value}`;
  $.ajax({
    url: url,
    type: "POST",
    data: { CountryId: this.value },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      $("#invoice-city").html("");

      for (var i = 0; i < obj.$values.length; i++) {
        $("#invoice-city").append(
          '<option value="' +
            obj.$values[i].id +
            '" ' +
            (obj.$values[i].id == City ? "selected" : "") +
            ">" +
            obj.$values[i].name +
            "</option>"
        );
      }

      $("#invoice-city").trigger("change");
    },
    error: function (xhr, status, error) {
      console.error("An error occurred:", status, error);
    },
  });
});

$(document).on("click", "#save-invoice-information", function (event) {
  event.preventDefault();

  var data = {
    CountryId: $("#invoice-country").val(),
    CityId: $("#invoice-city").val(),
    Address: $("#invoice-address").val(),
    ZipCode: $("#invoice-zip-code").val(),
  };

  const url = BaseUrl + "InvoiceInformation";

  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      obj = jQuery.parseJSON(obj);

      if (obj.ResultStatus == 0) {
        toastr.success(obj.Message, Localization.Success);

        if (typeof iyziInit != "undefined") {
          iyziInit = undefined;
        }

        var data2 = {
          DepositId: SelectDeposite,
        };

        const url2 = BaseUrl + `CreditCard?DepositId=${SelectDeposite}`;

        $.ajax({
          url: url2,
          type: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: data2,
          success: function (obj2) {
            $("#credit-card-container").html(obj2);
          },
          error: function (xhr, status, error) {
            console.error(
              "An error occurred while fetching credit card data:",
              status,
              error
            );
          },
        });
      } else {
        toastr.error(obj.Message, Localization.Error);
      }
    },
    error: function (xhr, status, error) {
      console.error("An error occurred:", status, error);
    },
  });
});

$(document).on("click", "#btnUsePromotionCode", function (event) {
  event.preventDefault();

  if (
    $("#txtPromotionCode").val() === null ||
    $("#txtPromotionCode").val() === ""
  ) {
    toastr.error("Promotion Code Can Not Be Empty", Localization.Error);
    return;
  }

  $("#btnUsePromotionCode").prop("disabled", true);

  var data = {
    PromotionCode: $("#txtPromotionCode").val(),
  };

  const url = BaseUrl + `UsePromotionCode?PromotionCode=${data.PromotionCode}`;

  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      obj = jQuery.parseJSON(obj);

      if (obj.ResultStatus == 0) {
        $("#UsePromotionCodeModal").modal("hide");
        $("#txtPromotionCode").val("");
        $("#btnUsePromotionCode").prop("disabled", false);
        toastr.success(obj.Message, Localization.Success);
      } else {
        $("#UsePromotionCodeModal").modal("hide");
        $("#txtPromotionCode").val("");
        $("#btnUsePromotionCode").prop("disabled", false);
        toastr.error(obj.Message, Localization.Error);
      }
    },
    error: function (xhr, status, error) {
      console.error("An error occurred:", status, error);
    },
  });
});
