$(function () {
    GetDashboardTotal();
});

function GetDashboardTotal() {
    SetCardOverlay($("#DashboardTotalCalls").closest(".card"));
    SetCardOverlay($("#DashboardTotalInbound").closest(".card"));
    SetCardOverlay($("#DashboardTotalOutbound").closest(".card"));
    SetCardOverlay($("#DashboardTotalMissed").closest(".card"));
    SetCardOverlay($("#DashboardTotalAbondaned").closest(".card"));
    SetCardOverlay($("#DashboardTotalExt2Ext").closest(".card"));
    $(".index-graphic-bar .numbersize").removeAttr("style");

    $.post("/data/dashboard-total", { _f: $(".DashboardFilter.active").attr("data-item") }, function (obj) {

        $('#DashboardTotalCalls').countTo({
            from: 0,
            to: obj.totalcalls,
            speed: 450
        });

        $('#DashboardTotalInbound').countTo({
            from: 0,
            to: obj.totalinbound,
            speed: 450
        });

        $('#DashboardTotalOutbound').countTo({
            from: 0,
            to: obj.totaloutbound,
            speed: 450
        });

        $('#DashboardTotalMissed').countTo({
            from: 0,
            to: obj.totalmissed,
            speed: 450
        });

        $('#DashboardTotalAbondaned').countTo({
            from: 0,
            to: obj.totalabandoned,
            speed: 450
        });

        $('#DashboardTotalExt2Ext').countTo({
            from: 0,
            to: obj.totalext2ext,
            speed: 450
        });

        setTimeout(function () {
            $(".index-graphic-bar .numbersize").each(function () {
                var _text = $(this).text();
                $(this).removeAttr("style");

                if (_text.length <= 4) {
                    $(this).attr("style", "font-size: 3.3rem !important;line-height: 3.3rem!important;")
                }
                else if (_text.length == 5) {
                    $(this).attr("style", "font-size: 42px !important;line-height: 3.3rem!important;")
                }
                else if (_text.length > 5) {
                    $(this).attr("style", "font-size: 38px !important;line-height: 3.3rem!important;")
                }
            });
        }, 910);

        RemoveCardOverlay($("#DashboardTotalCalls").closest(".card"));
        RemoveCardOverlay($("#DashboardTotalInbound").closest(".card"));
        RemoveCardOverlay($("#DashboardTotalOutbound").closest(".card"));
        RemoveCardOverlay($("#DashboardTotalMissed").closest(".card"));
        RemoveCardOverlay($("#DashboardTotalAbondaned").closest(".card"));
        RemoveCardOverlay($("#DashboardTotalExt2Ext").closest(".card"));
    });
}

var Dt = $('#AllTable').DataTable({ 
    "serverSide": true,
    "orderMulti": false,
    "processing": true,
    "pageLength": 10,
    "ajax": {
        "url": "/data/get-abondaned-calls",
        "type": "POST",
        "datatype": "json",
        "data": function (d) {
            //d.json = GetFilters();
        },
    },
    "columns": [
        { "data": "call_id", "visible": false },
        { "data": "tablecolumnfrom" },
        { "data": "tablecolumninorout" },
        { "data": "tablecolumnduration" },
        { "data": "tablecolumntalktime" },
        { "data": "tablecolumnringtime" },
        { "data": "tablecolumndate" },
        { "data": "tablecolumnstarttime" },
        { "data": "tablecolumnstoptime" },
        { "data": "tablecolumnbutton" }
    ],
    "fnDrawCallback": function (oSettings) {
    },


    "createdRow": function (row, data, index) {
        var _arr = ["rgb(42 246 156)", "rgb(255 44 161)", "rgb(81 172 255)", "rgb(255 133 64)"];

        $(row).find("td:first").css('border-left' , "4px solid " + _arr[Math.floor(Math.random() * _arr.length)]);
        
    },
    resposive: true,
    "bLengthChange": false,
    searching: false,
    "autoWidth": false
});

$(".customizer-toggle").on("click", (function () {
    $(".customizer").toggleClass("open");
}));

$(".customizer-close").on("click", (function () {
    $(".customizer").removeClass("open");
}));

$(document).on("click", ".CallDetailsButton", function () {
    $("#abondaned-detail-modal").modal("show");
});
