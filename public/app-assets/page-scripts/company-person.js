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

var MostContactedChart;
var MostContactedChartOptions;
var BaseUrl = "https://cdr-cloud.onrender.com" + "/api/company/";
var token = sessionStorage.getItem("accessToken");
$(function () {
  MostContactedChart = $("#combo-bar-line");

  MostContactedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: "#f3f3f3",
            drawTicks: false,
          },
          scaleLabel: {
            display: false,
            labelString: "Tüm Dahililer",
          },
          ticks: {
            padding: 15,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: "#f3f3f3",
            drawTicks: false,
          },
          scaleLabel: {
            display: false,
            labelString: "Çağrı Sayısı",
          },
        },
      ],
    },
    onClick: function (c, i) {
      e = i[0];
      var x_value = this.data.labels[e._index];
      window.location.href =
        "/Panel/Company/UserDetail/" + x_value.split("-")[0];
    },
  };

  GetTopData();
});

function GetTopData() {
  // SetCardOverlay($("#combo-bar-line").closest(".card"));

  const url = BaseUrl + "GetUsersStatistic";

  $.ajax({
    url: url,
    type: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      if (obj != null) {
        var chartData = {
          labels: obj.labels.$values,
          datasets: [
            {
              type: "bar",
              label: "Inbound",
              data: obj.inbound.$values,
              backgroundColor: "#12F8C0",
              borderColor: "transparent",
              borderWidth: 2,
            },
            {
              type: "bar",
              label: "Outbound",
              data: obj.outbound.$values,
              backgroundColor: "#FF52A5",
              borderColor: "transparent",
              borderWidth: 2,
            },
            {
              type: "bar",
              label: "Missed",
              data: obj.missed.$values,
              backgroundColor: "#FFE37E",
              borderColor: "transparent",
              borderWidth: 2,
            },
          ],
        };

        var config = {
          type: "bar",
          options: MostContactedChartOptions,
          data: chartData,
        };

        // Create the chart
        var lineChart = new Chart(MostContactedChart, config);
      }

      // RemoveCardOverlay($("#combo-bar-line").closest(".card"));
    },
    error: function (xhr, status, error) {
      console.error("Request failed:", error);
    },
  });
}

$(function () {
  Connect();
});

var Dt2 = $("#CompanyPersonTable").DataTable({
  processing: true,
  pageLength: 20,
  ajax: {
    url: BaseUrl + "GetUsers",
    type: "POST",
    contentType: "application/json",
    datatype: "json",
    dataSrc: function (json) {
      if (json != null) {
        var result = [];

        for (var i = 0; i < json.users.$values.length; i++) {
          var newobj = {
            No: json.users.$values[i].dn,
            NameSurname:
              GetAvatar(json.users.$values[i].display_name) +
              json.users.$values[i].display_name,
            Email:
              '<div class="person-email" id="email-' +
              json.users.$values[i].dn +
              '"></div>',
            Phone:
              '<div class="person-phone" id="phone-' +
              json.users.$values[i].dn +
              '"></div>',
            TotalInbound:
              json.users.$values[i].totalinbound > 0
                ? '<span style="font-weight:bold; color:#00b392">' +
                  json.users.$values[i].totalinbound +
                  "</span>"
                : json.users.$values[i].totalinbound,
            TotalOutbound:
              json.users.$values[i].totaloutbound > 0
                ? '<span style="font-weight:bold; color:#FF0266">' +
                  json.users.$values[i].totaloutbound +
                  "</span>"
                : json.users.$values[i].totaloutbound,
            TotalMissed:
              json.users.$values[i].totalmissed > 0
                ? '<span style="font-weight:bold; color:#FF8C4B">' +
                  json.users.$values[i].totalmissed +
                  "</span>"
                : json.users.$values[i].totalmissed,
            Button:
              '<a class="CallDetailsButton" href="/dashboard/user/' +
              json.users.$values[i].dn +
              '"> <img src="/app-assets/images/icons/eye-table.svg"></a>',
          };
          result.push(newobj);
        }
        return result;
      }
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
    { data: "No" },
    { data: "NameSurname" },
    { data: "Email" },
    { data: "Phone" },
    { data: "TotalInbound" },
    { data: "TotalOutbound" },
    { data: "TotalMissed" },
    { data: "Button" },
  ],
  fnDrawCallback: function (oSettings) {
    DrawPersonalInfo();
  },
  initComplete: function (settings, json) {
    //DrawPersonalInfo();
    setTimeout(function () {
      Dt2.columns.adjust().responsive.recalc();
    }, 5 * 1000);
  },
  bLengthChange: false,
  dom: "Bfrtip",
  buttons: [
    {
      extend: "excelHtml5",
      exportOptions: {
        columns: [0, 1, 2, 3, 4, 5, 6],
      },
      customize: function (xlsx) {
        var sheet = xlsx.xl.worksheets["sheet1.xml"];
        var numrows = 2;
        var clR = $("row", sheet);

        var _newArr = [];

        _newArr.push(clR[0].outerHTML);
        _newArr.push(clR[1].outerHTML);

        for (var i = 2; i < clR.length; i++) {
          var _outer = clR[i].outerHTML;

          _outer = '<row r="' + (i + 1) + '">';

          _outer += GetDynimacDataExport(i + 1, clR[i].outerHTML);

          _outer += "</row>";

          _newArr.push(_outer);
        }

        var _text = "";

        for (var i = 0; i < _newArr.length; i++) {
          _text += _newArr[i];
        }

        sheet.childNodes[0].childNodes[1].innerHTML = _text;

        $("#CompanyPersonTable").DataTable().page.len(20).draw();
      },
    },
  ],
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
  responsive: true,
  autoWidth: false,
});

var connection;

function DrawPersonalInfo() {
  if (Dt2 == undefined) {
    return false;
  }

  var data = Dt2.rows().data();
  for (var i = 0; i < data.length; i++) {
    connection.invoke("GetExtInfo", data[i].No);
  }
}

function Connect() {
  let userInfo = localStorage.getItem("UserData");

  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://" + JSON.parse(userInfo).ipAddress + ":8899/myMessageHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection.on("ExtInfo", function (msg) {
    var _obj = JSON.parse(msg);

    if (_obj.Email != "" && _obj.Email != null) {
      $("#email-" + _obj.ExtensionNumber).html(
        '<img src="/app-assets/images/icons/ext-mail.svg">' + _obj.Email
      );
    }

    if (_obj.MobileNumber != "" && _obj.MobileNumber != null) {
      $("#phone-" + _obj.ExtensionNumber).html(
        '<img src="/app-assets/images/icons/ext-phone.svg">' + _obj.MobileNumber
      );
    }
  });

  async function start() {
    try {
      await connection.start();
      DrawPersonalInfo();
    } catch (err) {
      console.log(err);
    }
  }

  connection.onclose(async () => {
    await start();
  });

  start();
}

$(".exportExcel").click(function () {
  $("#CompanyPersonTable").DataTable().page.len(2000).draw();

  setTimeout(function () {
    Dt2.button(".buttons-excel").trigger();
  }, 500);
});

function GetDynimacDataExport(i, outer) {
  var result = "";
  var _allT = "";
  var _allV = "";

  var allT = [];
  var allV = [];

  if (outer.indexOf("<t>") > -1) {
    var match,
      regex = /<t>(.*?)<\/t>/gi;
    while ((match = regex.exec(outer))) {
      _allT += match[1] + ",";
    }

    result = _allT.split(",")[0];
    allT = _allT.split(",");
  }

  if (outer.indexOf("<v>") > -1) {
    var match,
      regex = /<v>(.*?)<\/v>/gi;
    while ((match = regex.exec(outer))) {
      _allV += match[1] + ",";
    }

    allV = _allV.split(",");
  }

  if (!$.isNumeric(result)) {
    result = allV[0];
    allV.splice(0, 1);
  } else allT.splice(0, 1);

  var _noName =
    '<c t="inlineStr" r="A' +
    i +
    '"><is><t>' +
    result +
    '</t></is></c><c t="inlineStr" r="B' +
    i +
    '"><is><t>' +
    allT[0] +
    "</t></is></c>";
  var _emailPhone =
    '<c t="inlineStr" r="C' +
    i +
    '"><is><t>' +
    RegexHtmlTag($("#email-" + result).html()) +
    '</t></is></c><c t="inlineStr" r="D' +
    i +
    '"><is><t>' +
    RegexHtmlTag($("#phone-" + result).html()) +
    "</t></is></c>";
  var _totals =
    '<c t="inlineStr" r="E' +
    i +
    '"><is><t>' +
    allV[0] +
    '</t></is></c><c t="inlineStr" r="F' +
    i +
    '"><is><t>' +
    allV[1] +
    '</t></is></c><c t="inlineStr" r="G' +
    i +
    '"><is><t>' +
    allV[2] +
    "</t></is></c>";

  console.log(_noName + _emailPhone + _totals);

  return _noName + _emailPhone + _totals;
}

function RegexHtmlTag(text) {
  console.log(text);
  if (text !== "" && text != undefined) {
    var regex = /(<([^>]+)>)/gi;

    var result = text.replace(regex, "");

    return result;
  } else {
    return "";
  }
}

function GetAvatar(displayname) {
  var icon =
    '<img src="/app-assets/images/icons/user-to.svg" style="margin-right: 5px;">';

  if (displayname.length > 0) {
    var letter = displayname.toLowerCase().substring(0, 1);

    if (isNumeric(letter)) return icon;

    var filePath = "/app-assets/avatar/";

    if (new String(letter).valueOf() === new String("ç").valueOf())
      filePath += "CC.svg";
    else if (new String(letter).valueOf() == new String("i").valueOf())
      filePath += "II.svg";
    else if (new String(letter).valueOf() === new String("ö").valueOf())
      filePath += "OO.svg";
    else if (new String(letter).valueOf() === new String("ş").valueOf())
      filePath += "SS.svg";
    else if (new String(letter).valueOf() === new String("ü").valueOf())
      filePath += "UU.svg";
    else filePath += letter.toUpperCase() + ".svg";

    return '<img src="' + filePath + '" style="width:25px;margin-right: 5px;">';
  }

  return icon;
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
