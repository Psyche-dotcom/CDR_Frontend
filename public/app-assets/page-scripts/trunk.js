var _dataTable = $("#TrunkDataTable").DataTable({
  createdRow: function (row, data, dataIndex, cells) {
    $(row).find("td").eq(0).addClass("badge-state-border");

    var _id = $(row).find("div").attr("data-id");

    var _border = $("#trunk-item-" + _id)
      .find(".card")
      .css("border-left");
    var _color = "#bfbdbd";

    if (_border != undefined) {
      _color = _border.split(" ").slice(2).join(" ");
    }

    $(row)
      .find("td")
      .eq(0)
      .css("border-left", "5px solid " + _color);

    $(row).find("td").eq(6).css("padding", "0 2rem");
  },
  language: {
    sEmptyTable: "No data available in table",
    //Localization.sEmptyTable,
    sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
    //Localization.sInfo,
    sInfoEmpty: "Showing 0 to 0 of 0 entries",
    //Localization.sInfoEmpty,
    sInfoFiltered: "(filtered from _MAX_ total entries)",
    //Localization.sInfoFiltered,
    sLengthMenu: "Show _MENU_ entries",
    //Localization.sLengthMenu,
    sLoadingRecords: "Loading...",
    //Localization.sLoadingRecords,
    sProcessing: "Processing...",
    //Localization.sProcessing,
    sSearch: "Search:",
    //Localization.sSearch,
    sZeroRecords: "No matching records found",
    //Localization.sZeroRecords,
    oPaginate: {
      sFirst: "First",
      //Localization.sFirst,
      sLast: "Last",
      //Localization.sLast,
      sNext: "Next",
      //Localization.sNext,
      sPrevious: "Previous",
      //Localization.sPrevious
    },
  },
  order: [[8, "asc"]],
});

$(function () {
  Connect();
  setInterval(function () {
    $("#AgentBusyButton").trigger("click");
  }, 1000);

  setInterval(function () {
    SocketTrunkTotals();
    DataTableData();
  }, 1000);
});

var AllTrunksActiveCalls = [];
var AllTrunksInfo = [];
var SelectedTrunk = "-1";
var VisibleTrunks = [];
var ChartList = [];
var _isStart = true;
var SignalrConnection;
var MessageProxy;

function Connect() {
  let userInfo = localStorage.getItem("UserData");

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://" + JSON.parse(userInfo).ipAddress + ":8899/myMessageHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection.on("ServerMessage", function (msg) {
    GetData(msg);

    if (_isStart) {
      StartTrunk();
    }
  });

  async function start() {
    try {
      await connection.start();

      $("#AgentBusyButton").click(function () {
        connection.invoke("GetSipInfo").catch((err) => console.error(err));
      });
    } catch (err) {
      console.log(err);
    }
  }

  connection.onclose(async () => {
    await start();
  });

  start();
}

function GetData(message) {
  var _json = JSON.parse(message);
  console.log("sig", _json);
  AllTrunksActiveCalls = _json.AllTrunksActiveCalls;
  AllTrunksInfo = _json.AllTrunksInfo;
}

function StartTrunk() {
  $(".trunk-container").html(
    '<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px;" id="LoadingGif" />'
  );

  DrawTrunk(true, {});

  if (VisibleTrunks.length == 0) {
    if (AllTrunksInfo[0] != null && AllTrunksInfo[0] != undefined) {
      DrawTrunk(false, AllTrunksInfo[0]);
    }

    if (AllTrunksInfo[1] != null && AllTrunksInfo[1] != undefined) {
      DrawTrunk(false, AllTrunksInfo[1]);
    }

    if (AllTrunksInfo[2] != null && AllTrunksInfo[2] != undefined) {
      DrawTrunk(false, AllTrunksInfo[2]);
    }
  } else {
    for (var i = 0; i < AllTrunksInfo.length; i++) {
      for (var j = 0; j < VisibleTrunks.length; j++) {
        var isContains = AllTrunksInfo[i].indexOf(VisibleTrunks[j] + ",") > -1;
        if (isContains) {
          DrawTrunk(false, AllTrunksInfo[i]);
          break;
        }
      }
    }
  }

  DrawModalTrunk();
  _isStart = false;
  $("#LoadingGif").remove();
}

function DrawTrunk(IsParent, Obj) {
  var _htmlTrunk;
  var _graphId = 0;

  if (IsParent) {
    var InboundTotal = 0;
    var OutboundTotal = 0;
    var ActiveTotal = 0;

    for (var i = 0; i < AllTrunksInfo.length; i++) {
      var objSplit = AllTrunksInfo[i].split(",");

      var _active = parseInt(objSplit[3].split(":")[1]);
      var _inbound = parseInt(objSplit[4].split(":")[1]);
      var _outbound = parseInt(objSplit[5].split(":")[1]);

      InboundTotal += _inbound;
      OutboundTotal += _outbound;
      ActiveTotal += _active;
    }

    _htmlTrunk = ` <div class="col-xl-3 col-md-6 column" id="trunk-item-all">
            <div class="card pull-up bg-hexagons trunk-card-design">
                <div class="card-header" style="background: none">
                    <h4 class="card-title"><span class="danger">1.</span>  
                    All Trunks
                    </h4>
                    <a class="btn btn-sm TrunkDetailButton" style="float: right;" data-item="-1" data-name="All Trunks"><img src="/app-assets/images/icons/detail-button.svg" /></a>

                </div>
                <div class="card-content collapse show">
                    <div class="card-body pt-0">
                        <h1 style="font-size: 100px;" class="trunk-active">${ActiveTotal}</h1>
                        <div class="trunk-inbound-number">
                            <img src="/app-assets/images/icons/inbound-trunk.svg" /></i> <h2 style="color:#9196e3 !important" class="trunk-inbound">${InboundTotal}</h2>
                        </div>
                        <div class="trunk-inbound-number">
                            <img src="/app-assets/images/icons/outbound-trunk.svg" /></i><h2 style="color:#e36496 !important" class="trunk-outbound">${OutboundTotal}</h2>
                        </div>
                       
                        <div class="clearfix"></div>
                        <section class="trunk-chart-div">
                            <div id="chartdiv-all"></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>`;
  } else {
    var objSplit = Obj.split(",");

    var _name = objSplit[0].split(":")[1];
    var _id = objSplit[1].split(":")[1];
    var _active = objSplit[3].split(":")[1];
    var _inbound = objSplit[4].split(":")[1];
    var _outbound = objSplit[5].split(":")[1];

    _htmlTrunk = ` <div class="col-xl-3 col-md-6 column" id="trunk-item-${_id}">
            <div class="card pull-up bg-hexagons trunk-card-design">
                <div class="card-header" style="background: none">
                    <h4 class="card-title"><span class="danger">${
                      $(".trunk-container .column").length + 1
                    }.</span>  ${_name}</h4>
                    <a class="btn btn-sm TrunkDetailButton" style="float: right;" data-item="${_id}" data-name="${_name}"><img src="/app-assets/images/icons/detail-button.svg" /></a>
                </div>
                <div class="card-content collapse show">
                    <div class="card-body pt-0">
                        <h1 style="font-size: 100px;" class="trunk-active">${_active}</h1>
                        <div class="trunk-inbound-number">
                            <img src="/app-assets/images/icons/inbound-trunk.svg" /> <h2 style="color:#9196e3 !important" class="trunk-inbound">${_inbound}</h2>
                        </div>
                        <div class="trunk-inbound-number">
                            <img src="/app-assets/images/icons/outbound-trunk.svg" /> <h2 style="color:#e36496 !important" class="trunk-outbound">${_outbound}</h2>
                        </div>
                        
                        <div class="clearfix"></div>
                        <section class="trunk-chart-div">
                            <div id="chartdiv-${_id}"></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>`;

    if (_isStart) {
      VisibleTrunks.push(_id);
    }

    _graphId = _id;
  }

  $(".trunk-container").append(_htmlTrunk);
  DrawGraph(_graphId);
}

function SocketTrunkTotals() {
  var InboundTotal = 0;
  var OutboundTotal = 0;
  var ActiveTotal = 0;

  for (var i = 0; i < AllTrunksInfo.length; i++) {
    var objSplit = AllTrunksInfo[i].split(",");

    var _active = parseInt(objSplit[3].split(":")[1]);
    var _inbound = parseInt(objSplit[4].split(":")[1]);
    var _outbound = parseInt(objSplit[5].split(":")[1]);

    InboundTotal += _inbound;
    OutboundTotal += _outbound;
    ActiveTotal += _active;
  }

  $("#trunk-item-all .trunk-active").html(ActiveTotal);
  $("#trunk-item-all .trunk-inbound").html(InboundTotal);
  $("#trunk-item-all .trunk-outbound").html(OutboundTotal);

  var _allChart = $.grep(ChartList, function (v) {
    return v.Id === 0;
  });

  if (_allChart.length > 0) {
    _allChart[0].Chart.data[0].value = OutboundTotal;
    _allChart[0].Chart.data[1].value = InboundTotal;

    _allChart[0].Chart.invalidateRawData();
  }

  for (var i = 0; i < AllTrunksInfo.length; i++) {
    var objSplit = AllTrunksInfo[i].split(",");

    var _id = objSplit[1].split(":")[1];
    var _active = parseInt(objSplit[3].split(":")[1]);
    var _inbound = parseInt(objSplit[4].split(":")[1]);
    var _outbound = parseInt(objSplit[5].split(":")[1]);

    $("#trunk-item-" + _id + " .trunk-active").html(_active);
    $("#trunk-item-" + _id + " .trunk-inbound").html(_inbound);
    $("#trunk-item-" + _id + " .trunk-outbound").html(_outbound);

    var _chart = $.grep(ChartList, function (v) {
      return v.Id === _id.toString();
    });

    if (_chart.length > 0) {
      _chart[0].Chart.data[0].value = _outbound;
      _chart[0].Chart.data[1].value = _inbound;

      // _chart[0].Chart.data[0].value = Math.floor((Math.random() * 200) + 1);
      // _chart[0].Chart.data[1].value = Math.floor((Math.random() * 200) + 1);

      _chart[0].Chart.invalidateRawData();
    }
  }
}

function DataTableData() {
  _dataTable.clear().draw();

  if (SelectedTrunk == "-1") {
    for (var i = 0; i < AllTrunksActiveCalls.length; i++) {
      var _row = DataRow(AllTrunksActiveCalls[i]);
      _dataTable.row.add(_row).draw(false);
    }
  } else {
    for (var i = 0; i < AllTrunksActiveCalls.length; i++) {
      var isContains = AllTrunksActiveCalls[i].indexOf(SelectedTrunk) > -1;
      if (isContains) {
        var _row = DataRow(AllTrunksActiveCalls[i]);
        _dataTable.row.add(_row).draw(false);
      }
    }
  }
}

function DataRow(Obj) {
  var objSplit = Obj.split(",");

  var _status = objSplit[0].split(":")[1];
  var _caller = objSplit[1].split(":")[1];
  var _callee = objSplit[2].split(":")[1];
  var _type = objSplit[3].split(":")[1];
  var _duration = objSplit[4].split(":").slice(1).join(":");
  var _Icstatus = objSplit[5].split(":").slice(1).join(":");
  var _id = objSplit[6].split(":")[1];
  var _callername = objSplit[7].split(":")[1];
  var _transferredCaller = objSplit[8].split(":")[1];

  var _gmt = parseFloat($("#Gmt").val());

  var _hour = parseInt(_gmt);
  var _minute = _gmt - _hour;
  _minute = _minute * 100;
  _minute = _minute.toFixed(2);
  _minute = parseInt(_minute);

  var _durationHour = _duration.split(":")[0];
  var _durationMinute = _duration.split(":")[1];
  var _durationSecond = _duration.split(":")[2];

  var _timeSpanDuration = new TimeSpan(
    0,
    _durationSecond,
    _durationMinute,
    _durationHour
  );
  _timeSpanDuration.addHours(-1 * _hour);
  _timeSpanDuration.addMinutes(-1 * _minute);

  _duration = _timeSpanDuration.toString();

  var _IcstatusParse = _Icstatus.split(" ")[1];
  var _IcstatusTimeSpan = new TimeSpan(
    0,
    _IcstatusParse.split(":")[2],
    _IcstatusParse.split(":")[1],
    _IcstatusParse.split(":")[0]
  );

  _IcstatusTimeSpan.addHours(_hour);
  _IcstatusTimeSpan.addMinutes(_minute);

  _Icstatus = _Icstatus.split(" ")[0] + " " + _IcstatusTimeSpan.toString();

  var _callerBracketsIn = "";
  var _callerBracketsOut = "";
  var _calleeBracketsIn = "";
  var _calleeBracketsOut = "";
  var _callerTrunkName = "";
  var _calleeTrunkName = "";

  if (_caller.indexOf("(") > -1) {
    _callerBracketsIn = _caller.match(/\((.*)\)/).pop();
    _callerBracketsOut = _caller.split("(")[0];
    _caller = _callerBracketsOut;
    _callerTrunkName = find(AllTrunksInfo, _callerBracketsOut);
    _callername =
      _callername == "" || _callername == null
        ? _callerBracketsIn
        : _callername;
  }

  if (_callee.indexOf("(") > -1) {
    _calleeBracketsIn = _callee.match(/\((.*)\)/).pop();
    _calleeBracketsOut = _callee.split("(")[0];
    _callee = _calleeBracketsOut;
    _calleeTrunkName = find(AllTrunksInfo, _calleeBracketsOut);
  }

  var _calleename = _calleeBracketsIn;
  var _trunkname =
    _callerTrunkName.length > 0
      ? _callerBracketsOut
      : _calleeTrunkName.length > 0
      ? _calleeBracketsOut
      : "";

  var durationType = _duration.split(":")[1];
  var parseDuration = durationType != undefined ? parseInt(durationType) : 0;

  var durationTypeHour = _duration.split(":")[0];
  var parseDurationHour =
    durationTypeHour != undefined ? parseInt(durationTypeHour) : 0;

  var _colorDuration = "#a8b6c4";
  var _colorWeight = "normal";
  var _colorIcon = "time-grey.svg";
  var _durationStatue = "0";

  if (parseDurationHour == 0) {
    if (parseDuration != 0) {
      if (parseDuration >= 5 && parseDuration < 10) {
        _colorDuration = _themeColorDuration[1];
        _colorWeight = "bold";
        _colorIcon = "time-blue.svg";
        _durationStatue = "2";
      } else if (parseDuration >= 10 && parseDuration < 20) {
        _colorDuration = _themeColorDuration[2];
        _colorWeight = "bold";
        _colorIcon = "time-orange.svg";
        _durationStatue = "3";
      } else if (parseDuration >= 20) {
        _colorDuration = _themeColorDuration[3];
        _colorWeight = "bold";
        _colorIcon = "time-red.svg";
        _durationStatue = "4";
      } else {
        _colorDuration = _themeColorDuration[0];
        _colorWeight = "bold";
        _colorIcon = "time-green.svg";
        _durationStatue = "1";
      }
    }
  } else {
    _colorDuration = _themeColorDuration[3];
    _colorWeight = "bold";
    _colorIcon = "time-red.svg";
    _durationStatue = "4";

    parseDuration =
      parseDuration == 0
        ? 60 * parseDurationHour
        : 60 * parseDurationHour + parseDuration;
  }

  var durationSecondType = _duration.split(":")[2];
  var parseSecondDuration =
    durationSecondType != undefined ? parseInt(durationSecondType) : 0;

  var _IcstatusDate = _Icstatus.split(" ")[0];
  var _IcstatusHour = _Icstatus.split(" ")[1];

  var _row = [];

  _row.push(_trunkname);
  _row.push(_caller);
  _row.push(
    '<img src="/app-assets/images/icons/user-green.svg" />' + _callername
  );
  _row.push(
    _type == "Inbound"
      ? '<div class="badge badge-inbound" data-id="' +
          _id +
          '"><i class="ft-phone-incoming"></i> ' +
          "Inbound" +
          "</div>"
      : _type == "Outbound"
      ? '<div class="badge badge-outbound" data-id="' +
        _id +
        '"><i class="ft-phone-outgoing"></i> ' +
        "Outbound" +
        "</div>"
      : ""
  );
  _row.push(_callee);
  _row.push(
    '<img src="/app-assets/images/icons/user-red.svg" />' + _calleename
  );
  if (parseSecondDuration == 1) {
    _row.push(
      '<span class="trunk-duration-number" style="color:' +
        _colorDuration +
        '">' +
        parseDuration +
        '</span><span class="trunk-duration-min"  style="color:' +
        _colorDuration +
        '">' +
        "Min" +
        '</span ><span class="trunk-duration-time"><img src="/app-assets/images/icons/' +
        _colorIcon +
        '" /> ' +
        '<span class="duration-statue"  data-item="' +
        _durationStatue +
        '" style="color:' +
        _colorDuration +
        "; font-weight:" +
        _colorWeight +
        '">' +
        _duration +
        "</span></span>"
    );
  } else {
    _row.push(
      '<span class="trunk-duration-number" style="color:' +
        _colorDuration +
        '">' +
        parseDuration +
        '</span><span class="trunk-duration-min"  style="color:' +
        _colorDuration +
        '">' +
        "Min" +
        '</span ><span class="trunk-duration-time"><img src="/app-assets/images/icons/' +
        _colorIcon +
        '" /> ' +
        '<span class="duration-statue"  data-item="' +
        _durationStatue +
        '" style="color:' +
        _colorDuration +
        "; font-weight:" +
        _colorWeight +
        '">' +
        _duration +
        "</span></span>"
    );
  }

  _row.push(
    _status == "Connected"
      ? '<div class="badge badge-warning" data-id="' +
          _id +
          '"><i class="ft-wifi"></i> ' +
          "Connected" +
          "</div>"
      : _status == "Ringing"
      ? '<div class="badge badge-success trunk-status-badge" data-id="' +
        _id +
        '"><i class="ft-phone-incoming"></i> ' +
        "Ringing" +
        "</div>"
      : _status == "Dialing"
      ? '<div class="badge badge-danger" data-id="' +
        _id +
        '"><i class="ft-phone-outgoing"></i> ' +
        "Dialing" +
        "</div>"
      : _status == "Transferring"
      ? '<div class="badge badge-danger" data-id="' +
        _id +
        '"><i class="ft-phone-outgoing"></i> Transferring ' +
        _transferredCaller +
        "</div>"
      : ""
  );
  //_row.push(_type);

  _row.push(
    '<div class="trunkstatue-date"><img src="/app-assets/images/icons/Calendar-purple.svg" />' +
      _IcstatusDate +
      "</div> " +
      ' <div class="trunkstatue-time"><img src="/app-assets/images/icons/time-date-green.svg"/>' +
      _IcstatusHour +
      "</div>"
  );

  return _row;
}

$(document).on("click", ".TrunkDetailButton", function () {
  var _type = $(this).attr("data-item");
  var _name = $(this).attr("data-name");

  SelectedTrunk = _type;
  $("#TableTitle").html(_name);
});

function DrawModalTrunk() {
  $("#trunk-modal-container").html("");

  for (var i = 0; i < AllTrunksInfo.length; i++) {
    var objSplit = AllTrunksInfo[i].split(",");

    var _name = objSplit[0].split(":")[1];
    var _id = objSplit[1].split(":")[1];

    $("#trunk-modal-container").append(
      '<div class="col-md-6">' +
        '<fieldset class="checkboxsas">' +
        "<label>" +
        '<input type="checkbox" class="option-input checkbox" value="' +
        _id +
        '" ' +
        (VisibleTrunks.indexOf(_id) > -1 ? "checked" : "") +
        "> " +
        _name +
        "</label>" +
        "</fieldset>" +
        "</div>"
    );
  }
}

$("#ChangeTrunkView").click(function () {
  var checkedList = [];
  $("#trunk-modal-container input[type=checkbox]").each(function () {
    if (this.checked) {
      checkedList.push($(this).val().toString());
    }
  });

  if (checkedList.length == 0) {
    toastr.error(
      //Localization.EnAz1SecimYap,
      "Select at least 1 option",
      "Error"
    );
    return false;
  } else if (checkedList.length > 3) {
    toastr.error(
      //Localization.EnCok3SecimYap,
      "You can select maximum 3 Trunks",
      "Error"
    );
    return false;
  }

  $("#default-modal").modal("hide");

  VisibleTrunks = checkedList;
  ChartList = [];
  StartTrunk();
});

function DrawGraph(_id) {
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
  var chart = am4core.create(
    "chartdiv-" + (_id == 0 ? "all" : _id),
    am4charts.RadarChart
  );

  // Add data
  chart.data = [
    {
      category: "Outbound",
      //Localization.Outbound,
      value: 0,
      full: _simultaneousCalls,
    },
    {
      category: "Inbound",

      //Localization.Inbound,
      value: 0,
      full: _simultaneousCalls,
    },
  ];

  chart.colors = colorSet;

  // Make chart not full circle
  chart.startAngle = -90;
  chart.endAngle = 180;
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
  valueAxis.max = _simultaneousCalls;
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

  // Add cursor
  chart.cursor = new am4charts.RadarCursor();

  ChartList.push({ Id: _id, Chart: chart });
}

function find(items, text) {
  text = text.split(" ");
  return items.filter(function (item) {
    return text.every(function (el) {
      return item.indexOf(el) > -1;
    });
  });
}
