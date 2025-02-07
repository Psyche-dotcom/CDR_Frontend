// const BaseUrlperson = "https://cdr-cloud.onrender.com" + "/api/company/";

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

  Adet1KisiSec: "Please Select at least one person",
  VeriSilmeyeEminMisiniz:
    "-_Replace_- Adet Veriyi Silmek İstediğinize Emin Misiniz",
  AreYouSure: "Are You Sure",
  Sil: "Delete",
  Cancel: "Cancel",
  ExcelFormatindaDosyaYukle:
    "Please upload your file in Excel format (ie. xlxs, xls)",
  DosyaSeciniz: "Please select a file",
  SadeceExcelDosyasiSec: "Please select only excel files",

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
  RecordingDownload: "Recording Download",
  AudioRecordingsVoiceRecord: "Audio Recordings Voice Record",
};
const Currenturl = window.location.href;

// Split the URL by "/" and get the last segment
let ext = Currenturl.split("/").pop();

$(function () {
  GetTop();

  GetTopSixAnsweredNumber();
  GetTopSixMissedNumber();
  GetTopSixConversationTime();
  GetTopSixConversationNumber();
  $(".datetimepicker").datetimepicker({ format: "Y.m.d", timepicker: false });
});

var Dt = $("#CallInfoTable").DataTable({
  processing: true,
  pageLength: 10,
  ajax: {
    url:
      "https://cdr-cloud.onrender.com" +
      "/api/company/" +
      `GetUserDetaiReport?id=${ext}&_f=${$(
        ".call-info-filter .nav-link.active"
      ).attr("data-type")}`,
    type: "POST",
    datatype: "json",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
    data: function (d) {},
    dataSrc: function (json) {
      console.log("all data", json);
      if (json != null) {
        var result = [];

        for (var i = 0; i < json.dataList.$values.length; i++) {
          var newobj = {
            call_id: json.dataList.$values[i].call_id,
            from: json.dataList.$values[i].tablecolumnfrom,
            to: json.dataList.$values[i].tablecolumnto,
            inorout: json.dataList.$values[i].tablecolumninorout,
            durationstring: json.dataList.$values[i].tablecolumnduration,
            talktimestring: json.dataList.$values[i].tablecolumntalktime,
            ringtimestring: json.dataList.$values[i].tablecolumnringtime,
            date: json.dataList.$values[i].tablecolumndate,
            starttimestring: json.dataList.$values[i].tablecolumnstarttime,
            stoptimestring: json.dataList.$values[i].tablecolumnstoptime,
            status: json.dataList.$values[i].tablecolumnstatus,
            button: json.dataList.$values[i].tablecolumnbutton,
          };
          result.push(newobj);
        }
        return result;
      }
    },
  },

  columns: [
    { data: "call_id", visible: false },
    { data: "date" },
    { data: "starttimestring" },
    { data: "from" },
    { data: "to" },
    { data: "inorout" },
    { data: "durationstring" },
    { data: "talktimestring" },
    { data: "ringtimestring" },
    { data: "stoptimestring" },
    { data: "status" },
    { data: "button" },
  ],
  fnDrawCallback: function (oSettings) {
    $(".call-info-filter a").removeClass("disabled-button");
  },
  responsive: true,
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

// $(".exportExcel").click(function () {
//   var no = localStorage.getItem("ext");
//   var f = $(".call-info-filter .nav-link.active").attr("data-type");
//   var sd = $("#StartDate").val();
//   var ed = $("#EndDate").val();

//   var sonuc = BaseUrl + `ExportCompanyUserDetaiReport?id=${no}&f=${f}`;
//   var control = true;

//   if (no != null && no.length > 0) {
//     sonuc += (control ? "?" : "&") + "id=" + no;
//     control = false;
//   }

//   if (f != null && f.length > 0) {
//     sonuc += (control ? "?" : "&") + "f=" + f;
//     control = false;
//   }

//   if (sd != null && sd.length > 0) {
//     sonuc += (control ? "?" : "&") + "sd=" + sd;
//     control = false;
//   }

//   if (ed != null && ed.length > 0) {
//     sonuc += (control ? "?" : "&") + "ed=" + ed;
//     control = false;
//   }

//   window.open(sonuc, "_blank");
// });

$(".exportExcel").click(function () {
  var no = ext;
  var f = $(".call-info-filter .nav-link.active").attr("data-type");
  var sd = $("#StartDate").val();
  var ed = $("#EndDate").val();
  var sonuc =
    "https://cdr-cloud.onrender.com" +
    "/api/company/" +
    `ExportCompanyUserDetaiReport?id=${no}&f=${f}`;
  $.ajax({
    url: sonuc,
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
    contentType: "application/json",
    xhrFields: {
      responseType: "blob",
    },
    success: function (data, status, xhr) {
      console.log("File downloaded successfully");

      var blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      var disposition = xhr.getResponseHeader("Content-Disposition");
      var fileName;

      if (disposition) {
        var utf8Match = /filename\*\s*=\s*UTF-8''([^;]+)/.exec(disposition);
        var standardMatch = /filename\s*=\s*([^;]+)/.exec(disposition);

        if (utf8Match) {
          fileName = decodeURIComponent(utf8Match[1]);
        } else if (standardMatch) {
          fileName = standardMatch[1].replace(/['"]/g, "");
        }
      }

      if (!fileName) {
        var date = new Date();
        var day = String(date.getDate()).padStart(2, "0");
        var month = String(date.getMonth() + 1).padStart(2, "0");
        var year = date.getFullYear();
        var uniqueKey = Math.random().toString(36).substring(2, 12);
        fileName = `call-list-${day}${month}${year}-${uniqueKey}.xlsx`;
      }

      var downloadUrl = window.URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    error: function (xhr) {
      console.error("Error exporting:", xhr.responseText);
      alert("An error occurred while exporting the report.");
    },
  });
});

$(".customizer-toggle").on("click", function () {
  $(".customizer").toggleClass("open");
});

$(".customizer-close").on("click", function () {
  $(".customizer").removeClass("open");
});

var CompanyPersonFilterPost = [];

$(".DetailTimesFilter").click(function () {
  var _this = $(this);

  $(".DetailTimesFilter").removeClass("active");
  _this.addClass("active");

  GetTop();

  GetTopSixConversationTime();
  GetTopSixAnsweredNumber();
  GetTopSixMissedNumber();
  GetTopSixConversationNumber();
});

function GetTop() {
  var _filter = $(".DetailTimesFilter.active").attr("data-item");

  var _row = CompanyPersonFilterPost.find(
    (x) => x.type === 1 && x.time === _filter
  );

  if (_row == undefined) {
    SetCardOverlay($("#numofanswered").closest(".card"));
    SetCardOverlay($("#totalcalls").closest(".card"));
    SetCardOverlay($("#numofmissed").closest(".card"));
    SetCardOverlay($("#totaltalktime").closest(".card"));

    const url =
      "https://cdr-cloud.onrender.com" +
      "/api/company/" +
      `GetUserDetailTop?id=${ext}&_f=${_filter}`;

    $.ajax({
      url: url,
      type: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      success: function (obj) {
        if (obj != null) {
          $("#numofanswered").html(obj.numofanswered);
          $("#totalcalls").html(obj.numofcalls);
          $("#numofmissed").html(obj.numofmissed);
          $("#totaltalktime").html(obj.totaltalktime);

          $("#totalcalls-progress").attr("aria-valuenow", obj.numofcalls);
          $("#totalcalls-progress").attr("aria-valuemin", 0);
          $("#totalcalls-progress").attr("aria-valuemax", 1000);
          $("#totalcalls-progress").css("width", obj.numofcalls / 10 + "%");

          $("#totaltalktime-progress").attr("aria-valuenow", obj.totalminutes);
          $("#totaltalktime-progress").attr("aria-valuemin", 0);
          $("#totaltalktime-progress").attr("aria-valuemax", 500);
          $("#totaltalktime-progress").css("width", obj.totalminutes / 5 + "%");

          $("#numofanswered-progress").attr("aria-valuenow", obj.numofanswered);
          $("#numofanswered-progress").attr("aria-valuemin", 0);
          $("#numofanswered-progress").attr("aria-valuemax", 1000);
          $("#numofanswered-progress").css(
            "width",
            obj.numofanswered / 10 + "%"
          );

          $("#numofmissed-progress").attr("aria-valuenow", obj.numofmissed);
          $("#numofmissed-progress").attr("aria-valuemin", 0);
          $("#numofmissed-progress").attr("aria-valuemax", 1000);
          $("#numofmissed-progress").css("width", obj.numofmissed / 10 + "%");

          CompanyPersonFilterPost.push({ type: 1, time: _filter, data: obj });
          console.log("companyin", CompanyPersonFilterPost);
        }

        RemoveCardOverlay($("#numofanswered").closest(".card"));
        RemoveCardOverlay($("#totalcalls").closest(".card"));
        RemoveCardOverlay($("#numofmissed").closest(".card"));
        RemoveCardOverlay($("#totaltalktime").closest(".card"));
      },
      error: function (xhr, status, error) {
        console.error("An error occurred:", error);
      },
    });
  } else {
    $("#numofanswered").html(_row.data.numofanswered);
    $("#totalcalls").html(_row.data.numofcalls);
    $("#numofmissed").html(_row.data.numofmissed);
    $("#totaltalktime").html(_row.data.totaltalktime);

    $("#totalcalls-progress").attr("aria-valuenow", _row.data.numofcalls);
    $("#totalcalls-progress").attr("aria-valuemin", 0);
    $("#totalcalls-progress").attr("aria-valuemax", 1000);
    $("#totalcalls-progress").css("width", _row.data.numofcalls / 10 + "%");

    $("#totaltalktime-progress").attr("aria-valuenow", _row.data.totalminutes);
    $("#totaltalktime-progress").attr("aria-valuemin", 0);
    $("#totaltalktime-progress").attr("aria-valuemax", 500);
    $("#totaltalktime-progress").css("width", _row.data.totalminutes / 5 + "%");

    $("#numofanswered-progress").attr("aria-valuenow", _row.data.numofanswered);
    $("#numofanswered-progress").attr("aria-valuemin", 0);
    $("#numofanswered-progress").attr("aria-valuemax", 1000);
    $("#numofanswered-progress").css(
      "width",
      _row.data.numofanswered / 10 + "%"
    );

    $("#numofmissed-progress").attr("aria-valuenow", _row.data.numofmissed);
    $("#numofmissed-progress").attr("aria-valuemin", 0);
    $("#numofmissed-progress").attr("aria-valuemax", 1000);
    $("#numofmissed-progress").css("width", _row.data.numofmissed / 10 + "%");
  }
}

function GetTopSixConversationNumber() {
  var _filter = $(".DetailTimesFilter.active").attr("data-item");
  console.log("company", CompanyPersonFilterPost);
  var _row = CompanyPersonFilterPost.find(
    (x) => x.type === 2 && x.time === _filter
  );

  console.log("row", _row);

  console.log("filter", _filter);

  // if (_row == undefined) {
  //   SetCardOverlay($("#TopSixConversationNumber").closest(".card"));

  //   const url = `GetUserDetailTopSixCalls?id=${localStorage.getItem(
  //     "ext"
  //   )}&_f=${_filter}`;

  //   $.ajax({
  //     url: url,
  //     type: "GET",
  //     headers: {
  //       Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
  //     },
  //     success: function (obj) {
  //       $("#TopSixConversationNumber").html(obj);

  //       CompanyPersonFilterPost.push({ type: 2, time: _filter, data: obj });

  //       // RemoveCardOverlay($("#TopSixConversationNumber").closest(".card"));
  //     },
  //     error: function (xhr, status, error) {
  //       console.error("Request failed:", status, error);
  //     },
  //   });
  // } else {
  //   $("#TopSixConversationNumber").html(_row.data);
  // }
}

function GetTopSixConversationTime() {
  var _filter = $(".DetailTimesFilter.active").attr("data-item");

  var _row = CompanyPersonFilterPost.find(
    (x) => x.type === 3 && x.time === _filter
  );

  if (_row == undefined) {
    SetCardOverlay($("#TopSixConversationTime").closest(".card"));

    const url =
      "https://cdr-cloud.onrender.com" +
      "/api/company/" +
      `GetUserDetailTopSixTalkTime?id=${ext}&_f=${_filter}`;

    $.get({
      url: url,
      beforeSend: function (xhr) {
        xhr.setRequestHeader(
          "Authorization",
          "Bearer " + sessionStorage.getItem("accessToken")
        );
      },
      success: function (obj) {
        $("#TopSixConversationTime").html(obj);

        CompanyPersonFilterPost.push({ type: 3, time: _filter, data: obj });

        RemoveCardOverlay($("#TopSixConversationTime").closest(".card"));
      },
      error: function (err) {
        console.error("Error fetching data:", err);
      },
    });
  } else {
    $("#TopSixConversationTime").html(_row.data);
  }
}

function GetTopSixAnsweredNumber() {
  var _filter = $(".DetailTimesFilter.active").attr("data-item");

  var _row = CompanyPersonFilterPost.find(
    (x) => x.type === 4 && x.time === _filter
  );

  if (_row == undefined) {
    SetCardOverlay($("#TopSixAnsweredNumber").closest(".card"));

    const url =
      "https://cdr-cloud.onrender.com" +
      "/api/company/" +
      `GetUserDetailTopSixAnsweredCalls?id=${ext}&_f=${_filter}`;

    $.ajax({
      url: url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      success: function (obj) {
        $("#TopSixAnsweredNumber").html(obj);

        CompanyPersonFilterPost.push({ type: 4, time: _filter, data: obj });

        RemoveCardOverlay($("#TopSixAnsweredNumber").closest(".card"));
      },
      error: function (err) {
        console.error("Error fetching data:", err);
      },
    });
  } else {
    $("#TopSixAnsweredNumber").html(_row.data);
  }
}

function GetTopSixMissedNumber() {
  var _filter = $(".DetailTimesFilter.active").attr("data-item");

  var _row = CompanyPersonFilterPost.find(
    (x) => x.type === 5 && x.time === _filter
  );

  if (_row == undefined) {
    SetCardOverlay($("#TopSixMissedNumber").closest(".card"));

    const url =
      "https://cdr-cloud.onrender.com" +
      "/api/company/" +
      `GetUserDetailTopMissedCalls?id=${ext}&_f=${_filter}`;
    $.ajax({
      url: url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      success: function (obj) {
        $("#TopSixMissedNumber").html(obj);

        CompanyPersonFilterPost.push({ type: 5, time: _filter, data: obj });

        RemoveCardOverlay($("#TopSixMissedNumber").closest(".card"));
      },
      error: function (err) {
        console.error("Error fetching data:", err);
      },
    });
  } else {
    $("#TopSixMissedNumber").html(_row.data);
  }
}

$(".call-info-filter a").click(function () {
  // Remove 'active' class from all the tabs
  $(".call-info-filter a").removeClass("active");

  // Add 'active' class to the clicked tab
  $(this).addClass("active");

  // Disable all buttons to avoid multiple clicks
  $(".call-info-filter a").addClass("disabled-button");

  // setTimeout(function () {
  //   // Reload the data
  //   Dt.ajax.reload();
  // }, 300);
});
$(".call-info-filter a").click(function () {
  // Remove 'active' from all links and add to the clicked one
  $(".call-info-filter a").removeClass("active");
  $(this).addClass("active");

  // Disable all buttons
  $(".call-info-filter a").addClass("disabled-button");

  // Update the AJAX URL dynamically before reloading
  var newFilterType = $(this).attr("data-type"); // Get the new filter value
  var newUrl =
    "https://cdr-cloud.onrender.com" +
    "/api/company/" +
    `GetUserDetaiReport?id=${ext}&_f=${newFilterType}`;

  Dt.ajax.url(newUrl).load(); // Update the URL and reload the table
});
