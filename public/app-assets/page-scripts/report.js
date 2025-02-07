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
  RecordingDownload: "Recording Download",
  AudioRecordingsVoiceRecord: "Audio Recordings Voice Record",
  WriteSomethingMessage: "Please give the favorite a name",
};

var BaseUrl = "https://cdr-cloud.onrender.com" + "/api/company/";
var token = sessionStorage.getItem("accessToken");
console.log("reportbase", BaseUrl);
var Dt = $("#AllTable").DataTable({
  serverSide: true,
  orderMulti: false,
  processing: true,
  pageLength: 10,
  ajax: {
    url: BaseUrl + "GetReportList",
    type: "POST",
    contentType: "application/json",
    datatype: "json",
    data: function (d) {
      return JSON.stringify({
        draw: d.draw,
        start: d.start,
        length: d.length,
        json: GetFilters(),
        ReportDate: $("#ReportDate").val(),
        ReportCount: parseInt($("#ReportCount").val()) || 0,
      });
    },

    dataSrc: function (json) {
      $("#ReportDate").val(json.reportDate);
      console.log("dt data", json);
      return json.data.$values;
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    error: function (xhr, status, error) {
      console.error("AJAX error: ", error);
      console.error("Status: ", status);
      console.error("Response: ", xhr.responseText);
    },
  },
  columns: [
    { data: "call_id", visible: false },
    { data: "tablecolumndate" },
    { data: "tablecolumnstarttime" },
    { data: "tablecolumnfrom" },
    { data: "tablecolumnto" },
    { data: "tablecolumninorout" },
    { data: "tablecolumnduration" },
    { data: "tablecolumntalktime" },
    { data: "tablecolumnstatus" },
    { data: "tablecolumnbutton" },
  ],
  fnDrawCallback: function (oSettings) {
    $("#ReportCount").val(this.fnSettings().fnRecordsTotal());
  },
  createdRow: function (row, data, index) {
    $(row).addClass("report-table-row-border-" + data.inorout);
  },
  autoWidth: false,
  bLengthChange: false,
  searching: false,
  language: {
    sEmptyTable: Localization.sEmptyTable,
    sInfo: Localization.sInfo,
    sInfoEmpty: Localization.sInfoEmpty,
    sInfoFiltered: Localization.sInfoFiltered,
    sLengthMenu: Localization.sLengthMenu,
    sLoadingRecords: Localization.sLoadingRecords,
    sProcessing: Localization.sProcessing,
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

$(document).ready(function () {
  $(".datetimepicker").datetimepicker({ format: "Y.m.d H:i" });
  GetFavoriteFilterList();
});

$(".customizer-toggle").on("click", function () {
  $(".customizer").toggleClass("open");
});

$(".customizer-close").on("click", function () {
  $(".customizer").removeClass("open");
});

$("#FilterDateSelect").on("change", function () {
  if (this.value == 5) {
    $("#FilterDateCustomDiv").slideDown();
  } else {
    $("#FilterDateCustomDiv").slideUp();
    $("#FilterDateCustomDiv input").val("");
  }
});

$("input[type=radio][name=date-radio]").change(function () {
  if (this.value == 11) {
    $("#FilterDateCustomDiv").slideDown();
  } else {
    $("#FilterDateCustomDiv").slideUp();
    $("#FilterDateCustomDiv input").val("");
  }
});

$("input[type=radio][name=source-creteria-radio]").change(function () {
  var _placeholder = $(this).attr("data-placeholder");

  if (this.value != 1) {
    $("#SourceCriteriaInputDiv input").attr("placeholder", _placeholder);
    $("#SourceCriteriaInputDiv").slideDown();
  } else {
    $("#SourceCriteriaInputDiv").slideUp();
    $("#SourceCriteriaInputDiv input").val("");
    $("#SourceCriteriaInputDiv input").removeAttr("placeholder");
  }
});

$("input[type=radio][name=target-creteria-radio]").change(function () {
  var _placeholder = $(this).attr("data-placeholder");

  if (this.value != 1) {
    $("#TargetCriteriaInputDiv input").attr("placeholder", _placeholder);
    $("#TargetCriteriaInputDiv").slideDown();
  } else {
    $("#TargetCriteriaInputDiv").slideUp();
    $("#TargetCriteriaInputDiv input").val("");
    $("#TargetCriteriaInputDiv input").removeAttr("placeholder");
  }
});
$("#AddFavorite").click(function () {
  swal(
    {
      title: Localization.Favorite,
      text: Localization.FavoriBaslikMesaji,
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      inputPlaceholder: Localization.WriteSomething,
    },
    function (inputValue) {
      if (inputValue === false) return false;
      if (inputValue.trim() === "") {
        swal.showInputError(Localization.WriteSomethingMessage);
        return false;
      }

      FavoriteFilter(inputValue);
    }
  );

  const style = document.createElement("style");
  style.innerHTML = `
    .sweet-alert.show-input input {
      -webkit-text-security: none !important; /* Disable password masking */
    }
  `;
  document.head.appendChild(style);
});

// $("#AddFavorite").click(function () {
//   swal(
//     {
//       title: Localization.Favorite,
//       text: Localization.FavoriBaslikMesaji,
//       type: "input",
//       showCancelButton: true,
//       closeOnConfirm: false,
//       inputPlaceholder: Localization.WriteSomething,
//       input: "text",
//     },
//     function (inputValue) {
//       if (inputValue === false) return false;
//       if (inputValue.trim() === "") {
//         swal.showInputError(Localization.WriteSomethingMessage);
//         return false;
//       }

//       FavoriteFilter(inputValue);
//     }
//   );
// });

function FavoriteFilter(Title) {
  var _dates = $("input[name=date-radio]:checked").val();
  var _dateCustomStart = $("#CustomDateStart").val();
  var _dateCustomEnd = $("#CustomDateEnd").val();

  var _filterSource = $("input[name=source-radio]:checked").val();
  var _filterSourceCriteria = $(
    "input[name=source-creteria-radio]:checked"
  ).val();
  var _filterSourceCriteriaInput = $("#SourceCriteriaInput").val();

  var _filterTarget = $("input[name=target-radio]:checked").val();
  var _filterTargetCriteria = $(
    "input[name=target-creteria-radio]:checked"
  ).val();
  var _filterTargetCriteriaInput = $("#TargetCriteriaInput").val();

  var _filterStatus = $("input[name=criteria-radio]:checked").val();

  var _filterDuration = $("input[name=duration-radio]:checked").val();

  if (
    _dates == undefined &&
    _dateCustomStart == "" &&
    _dateCustomEnd == "" &&
    _filterSource == undefined &&
    _filterSourceCriteria == undefined &&
    _filterSourceCriteriaInput == "" &&
    _filterTarget == undefined &&
    _filterTargetCriteria == undefined &&
    _filterTargetCriteriaInput == "" &&
    _filterStatus == undefined &&
    _filterDuration == undefined
  ) {
    toastr.error(Localization.EnAz1SecimYap, Localization.Error);
    swal.close();
    return false;
  }

  var obj = {
    Title: Title,
    Dates: _dates,
    DatesStart: _dateCustomStart,
    DatesEnd: _dateCustomEnd,
    Source: _filterSource,
    SourceCriteria: _filterSourceCriteria,
    SourceCriteriaInput: _filterSourceCriteriaInput,
    Target: _filterTarget,
    TargetCriteria: _filterTargetCriteria,
    TargetCriteriaInput: _filterTargetCriteriaInput,
    Status: _filterStatus,
    Duration: _filterDuration,
  };

  var data = {
    Title: Title,
    Json: JSON.stringify(obj),
    UserId: 0,
  };
  console.log(data);
  const url = BaseUrl + "CreateReportFavoriteFilter";
  $.ajax({
    url: url,
    type: "POST",
    contentType: "application/json",
    datatype: "json",
    data: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      var response = jQuery.parseJSON(obj);
      if (response.ResultStatus == 0) {
        toastr.success(response.Message, Localization.Success);
        GetFavoriteFilterList();
        DeleteAllFilters();
      } else {
        toastr.error(response.Message, Localization.Error);
      }
      swal.close();
    },
    error: function (error) {
      console.error("Error in API request:", error);
    },
  });
}

function GetFavoriteFilterList() {
  $("#FavoriteReportList").html(
    '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px;" />'
  );
  const url = BaseUrl + "GetReportFavoriteFilterList";
  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      $("#FavoriteReportList").html(obj);
      $('[data-toggle="tooltip"]').tooltip();
    },
    error: function (error) {
      console.error("Error in API request:", error);
    },
  });
}

$(document).on("click", ".favorite-button-delete", function () {
  var _id = $(this).attr("data-item");

  swal(
    {
      title: Localization.AreYouSure,
      text: Localization.FavoriSilmekEminMisiniz,
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: Localization.EvetSil,
      closeOnConfirm: false,
    },
    function (selected) {
      if (selected === false) return false;

      // var data = {
      //   Id: _id,
      // };
      const url = BaseUrl + `DeleteReportFavoriteFilter?Id=${_id}`;

      $.ajax({
        url: url,
        type: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        success: function (obj) {
          var response = jQuery.parseJSON(obj);

          if (response.ResultStatus == 0) {
            toastr.success(response.Message, Localization.Success);
            GetFavoriteFilterList();
          } else {
            toastr.error(response.Message, Localization.Error);
          }
          swal.close();
        },
        error: function (error) {
          console.error("Error in API request:", error);
        },
      });
    }
  );
});

function DeleteAllFilters() {
  $("input[name=date-radio]").prop("checked", false);
  $("#CustomDateStart").val("");
  $("#CustomDateEnd").val("");

  $("input[name=source-radio]").prop("checked", false);
  $("input[name=source-creteria-radio]").prop("checked", false);
  $("#SourceCriteriaInput").val("");

  $("input[name=target-radio]").prop("checked", false);
  $("input[name=target-creteria-radio]").prop("checked", false);
  $("#TargetCriteriaInput").val("");

  $("input[name=criteria-radio]").prop("checked", false);

  $("input[name=duration-radio]").prop("checked", false);

  $("#TargetCriteriaInputDiv").slideUp();
  $("#SourceCriteriaInputDiv").slideUp();
  $("#FilterDateCustomDiv").slideUp();
}

$(document).on("click", ".favorite-button-view", function () {
  var _id = $(this).attr("data-item");

  var _jsonSpan = $("#FavoriteFilterDataList-" + _id).html();

  if (_jsonSpan == "") {
    toastr.error(Localization.FavoriFiltrelemesiBulunamadi, Localization.Error);
    return false;
  }

  DeleteAllFilters();

  var _json = JSON.parse(_jsonSpan);

  $("input[name=date-radio][value=" + _json.Dates + "]").prop("checked", true);
  if (_json.Dates != undefined && _json.Dates == 11) {
    $("#FilterDateCustomDiv").slideDown();
  }
  $("#CustomDateStart").val(_json.DatesStart);
  $("#CustomDateEnd").val(_json.DatesEnd);

  $("input[name=source-radio][value=" + _json.Source + "]").prop(
    "checked",
    true
  );
  $(
    "input[name=source-creteria-radio][value=" + _json.SourceCriteria + "]"
  ).prop("checked", true);
  if (_json.SourceCriteria != undefined && _json.SourceCriteria != 1) {
    $("#SourceCriteriaInputDiv").slideDown();
  }
  $("#SourceCriteriaInput").val(_json.SourceCriteriaInput);

  $("input[name=target-radio][value=" + _json.Target + "]").prop(
    "checked",
    true
  );
  $(
    "input[name=target-creteria-radio][value=" + _json.TargetCriteria + "]"
  ).prop("checked", true);
  if (_json.TargetCriteria != undefined && _json.TargetCriteria != 1) {
    $("#TargetCriteriaInputDiv").slideDown();
  }
  $("#TargetCriteriaInput").val(_json.TargetCriteriaInput);

  $("input[name=criteria-radio][value=" + _json.Status + "]").prop(
    "checked",
    true
  );

  $("input[name=duration-radio][value=" + _json.Duration + "]").prop(
    "checked",
    true
  );

  $(".customizer-close").trigger("click");

  if (_json.Dates != 11) {
    $("#Filter").trigger("click");
  }
});

function GetFilters() {
  var _dates = $("input[name=date-radio]:checked").val();
  var _dateCustomStart = $("#CustomDateStart").val();
  var _dateCustomEnd = $("#CustomDateEnd").val();

  var _filterSource = $("input[name=source-radio]:checked").val();
  var _filterSourceCriteria = $(
    "input[name=source-creteria-radio]:checked"
  ).val();
  var _filterSourceCriteriaInput = $("#SourceCriteriaInput").val();

  var _filterTarget = $("input[name=target-radio]:checked").val();
  var _filterTargetCriteria = $(
    "input[name=target-creteria-radio]:checked"
  ).val();
  var _filterTargetCriteriaInput = $("#TargetCriteriaInput").val();

  var _filterStatus = $("input[name=criteria-radio]:checked").val();

  var _filterDuration = $("input[name=duration-radio]:checked").val();

  var obj = {
    Title: "",
    Dates: _dates,
    DatesStart: _dateCustomStart,
    DatesEnd: _dateCustomEnd,
    Source: _filterSource,
    SourceCriteria: _filterSourceCriteria,
    SourceCriteriaInput: _filterSourceCriteriaInput,
    Target: _filterTarget,
    TargetCriteria: _filterTargetCriteria,
    TargetCriteriaInput: _filterTargetCriteriaInput,
    Status: _filterStatus,
    Duration: _filterDuration,
  };

  return JSON.stringify(obj);
}

$("#Filter").click(function () {
  $("#ReportCount").val(-1);
  $("#ReportDate").val("");

  var _filterSourceCriteriaInput = $("#SourceCriteriaInput").val();
  var _filterTargetCriteriaInput = $("#TargetCriteriaInput").val();

  if (
    $("#SourceCriteriaInputDiv").is(":visible") &&
    _filterSourceCriteriaInput.length == 0
  )
    $("#SourceCriteriaMessage").show();
  else $("#SourceCriteriaMessage").hide();

  if (
    $("#TargetCriteriaInputDiv").is(":visible") &&
    _filterTargetCriteriaInput.length == 0
  )
    $("#TargetCriteriaMessage").show();
  else $("#TargetCriteriaMessage").hide();

  Dt.ajax.reload();
  console.log("Click on Filter button");

  // Destroy existing DataTable before reloading
  // if ($.fn.DataTable.isDataTable("#AllTable")) {
  //   $("#AllTable").DataTable().clear().destroy();
  // }

  // // Reload data
  // loadTableData();
  $("html, body").animate(
    {
      scrollTop: $("#AllCallsCard").offset().top - 80,
    },
    800
  );
});

$(".exportExcel").click(function () {
  var _json = GetFilters();
  console.log(_json);

  // Replace with your dynamic Bearer token
  var sonuc = BaseUrl + "ExportReportCalls?json=" + encodeURIComponent(_json);

  if (_json != null && _json.length > 0) {
    $.ajax({
      url: sonuc,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      contentType: "application/json",
      xhrFields: {
        responseType: "blob", // Expect a binary file as a response
      },
      success: function (data, status, xhr) {
        console.log("File downloaded successfully");

        // Create a blob from the response data
        var blob = new Blob([data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        // Extract the filename from the Content-Disposition header
        var disposition = xhr.getResponseHeader("Content-Disposition");
        var fileName;

        if (disposition) {
          // Match filename from either `filename*` or `filename` field
          var utf8Match = /filename\*\s*=\s*UTF-8''([^;]+)/.exec(disposition);
          var standardMatch = /filename\s*=\s*([^;]+)/.exec(disposition);

          if (utf8Match) {
            fileName = decodeURIComponent(utf8Match[1]);
          } else if (standardMatch) {
            fileName = standardMatch[1].replace(/['"]/g, ""); // Remove quotes
          }
        }

        // Fallback filename if not provided
        if (!fileName) {
          var date = new Date();
          var day = String(date.getDate()).padStart(2, "0");
          var month = String(date.getMonth() + 1).padStart(2, "0");
          var year = date.getFullYear();
          var uniqueKey = Math.random().toString(36).substring(2, 12); // Generate a random 10-character key
          fileName = `report-calls-${day}${month}${year}-${uniqueKey}.xlsx`;
        }

        // Create a download link and trigger the download
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
        toastr.error("An error occurred while exporting the report.");
      },
    });
  } else {
    toastr.error("Please provide filters to export.");
  }
});
