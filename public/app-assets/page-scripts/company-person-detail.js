$(function () {
    GetTop();
    GetTopSixConversationNumber();
    GetTopSixAnsweredNumber();
    GetTopSixMissedNumber();
    GetTopSixConversationTime();
    $('.datetimepicker').datetimepicker({ format: 'Y.m.d', timepicker: false });
});

var Dt = $('#CallInfoTable').DataTable({
    "processing": true,
    "pageLength": 10,
    "ajax": {
        "url": "/Panel/Company/GetUserDetaiReport",
        "type": "POST",
        "datatype": "json",
        "data": function (d) {
            d.id = $('#ExtNo').val();
            d._f = $('.call-info-filter .nav-link.active').attr("data-type");
        },
        "dataSrc": function (json) {
            if (json != null) {
                var result = []

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
                    }
                    result.push(newobj)
                }
                return result;
            }
        }
    },
    "columns": [
        { "data": "call_id", "visible": false },
        { "data": "date" },
        { "data": "starttimestring" },
        { "data": "from" },
        { "data": "to" },
        { "data": "inorout" },
        { "data": "durationstring" },
        { "data": "talktimestring" },
        { "data": "ringtimestring" },
        { "data": "stoptimestring" },
        { "data": "status" },
        { "data": "button" }
    ],
    "fnDrawCallback": function (oSettings) {
        $(".call-info-filter a").removeClass("disabled-button");
    },
    responsive: true,
    autoWidth:false,
    "bLengthChange": false,
    "order": [[0, "desc"]],
    "language": {
        "sEmptyTable": Localization.sEmptyTable,
        "sInfo": Localization.sInfo,
        "sInfoEmpty": Localization.sInfoEmpty,
        "sInfoFiltered": Localization.sInfoFiltered,
        "sLengthMenu": Localization.sLengthMenu,
        "sLoadingRecords": Localization.sLoadingRecords,
        "sSearch": Localization.sSearch,
        "sZeroRecords": Localization.sZeroRecords,
        "oPaginate": {
            "sFirst": Localization.sFirst,
            "sLast": Localization.sLast,
            "sNext": Localization.sNext,
            "sPrevious": Localization.sPrevious
        }
    },
    oLanguage: { sProcessing: '<span class="load load-button"></span>' },
});

$(".exportExcel").click(function () {
    var no = $('#ExtNo').val();
    var f = $('.call-info-filter .nav-link.active').attr("data-type");
    var sd = $("#StartDate").val();
    var ed = $("#EndDate").val();

    var sonuc = "/Panel/Company/ExportCompanyUserDetaiReport";
    var control = true;

    if (no != null && no.length > 0) {
        sonuc += ((control) ? '?' : '&') + 'id=' + no;
        control = false;
    }

    if (f != null && f.length > 0) {
        sonuc += ((control) ? '?' : '&') + 'f=' + f;
        control = false;
    }

    if (sd != null && sd.length > 0) {
        sonuc += ((control) ? '?' : '&') + 'sd=' + sd;
        control = false;
    }

    if (ed != null && ed.length > 0) {
        sonuc += ((control) ? '?' : '&') + 'ed=' + ed;
        control = false;
    }

    window.open(sonuc, "_blank");
});

$(".customizer-toggle").on("click", (function () {
    $(".customizer").toggleClass("open");
}));

$(".customizer-close").on("click", (function () {
    $(".customizer").removeClass("open");
}));

var CompanyPersonFilterPost = [];

$(".DetailTimesFilter").click(function () {
    var _this = $(this);

    $('.DetailTimesFilter').removeClass('active')
    _this.addClass('active');

    GetTop();
    GetTopSixConversationNumber();
    GetTopSixConversationTime();
    GetTopSixAnsweredNumber();
    GetTopSixMissedNumber();
});

function GetTop() {
    var _filter = $(".DetailTimesFilter.active").attr("data-item");

    var _row = CompanyPersonFilterPost.find(x => x.type === 1 && x.time === _filter);

    if (_row == undefined) {
        SetCardOverlay($("#numofanswered").closest(".card"));
        SetCardOverlay($("#totalcalls").closest(".card"));
        SetCardOverlay($("#numofmissed").closest(".card"));
        SetCardOverlay($("#totaltalktime").closest(".card"));

        const url = "/Panel/Company/GetUserDetailTop";

        $.post(url, { id: $("#ExtNo").val(), _f: _filter }, function (obj) {

            if (obj != null) {
                $("#numofanswered").html(obj.numofanswered);
                $("#totalcalls").html(obj.numofcalls);
                $("#numofmissed").html(obj.numofmissed);
                $("#totaltalktime").html(obj.totaltalktime);

                $("#totalcalls-progress").attr("aria-valuenow", obj.numofcalls);
                $("#totalcalls-progress").attr("aria-valuemin", 0);
                $("#totalcalls-progress").attr("aria-valuemax", 1000);
                $("#totalcalls-progress").css("width", (obj.numofcalls / 10) + "%");

                $("#totaltalktime-progress").attr("aria-valuenow", obj.totalminutes);
                $("#totaltalktime-progress").attr("aria-valuemin", 0);
                $("#totaltalktime-progress").attr("aria-valuemax", 500);
                $("#totaltalktime-progress").css("width", (obj.totalminutes / 5) + "%");

                $("#numofanswered-progress").attr("aria-valuenow", obj.numofanswered);
                $("#numofanswered-progress").attr("aria-valuemin", 0);
                $("#numofanswered-progress").attr("aria-valuemax", 1000);
                $("#numofanswered-progress").css("width", (obj.numofanswered / 10) + "%");

                $("#numofmissed-progress").attr("aria-valuenow", obj.numofmissed);
                $("#numofmissed-progress").attr("aria-valuemin", 0);
                $("#numofmissed-progress").attr("aria-valuemax", 1000);
                $("#numofmissed-progress").css("width", (obj.numofmissed / 10) + "%");

                CompanyPersonFilterPost.push({ type: 1, time: _filter, data: obj });
            }

            RemoveCardOverlay($("#numofanswered").closest(".card"));
            RemoveCardOverlay($("#totalcalls").closest(".card"));
            RemoveCardOverlay($("#numofmissed").closest(".card"));
            RemoveCardOverlay($("#totaltalktime").closest(".card"));
        });
    } else {
        $("#numofanswered").html(_row.data.numofanswered);
        $("#totalcalls").html(_row.data.numofcalls);
        $("#numofmissed").html(_row.data.numofmissed);
        $("#totaltalktime").html(_row.data.totaltalktime);

        $("#totalcalls-progress").attr("aria-valuenow", _row.data.numofcalls);
        $("#totalcalls-progress").attr("aria-valuemin", 0);
        $("#totalcalls-progress").attr("aria-valuemax", 1000);
        $("#totalcalls-progress").css("width", (_row.data.numofcalls / 10) + "%");

        $("#totaltalktime-progress").attr("aria-valuenow", _row.data.totalminutes);
        $("#totaltalktime-progress").attr("aria-valuemin", 0);
        $("#totaltalktime-progress").attr("aria-valuemax", 500);
        $("#totaltalktime-progress").css("width", (_row.data.totalminutes / 5) + "%");

        $("#numofanswered-progress").attr("aria-valuenow", _row.data.numofanswered);
        $("#numofanswered-progress").attr("aria-valuemin", 0);
        $("#numofanswered-progress").attr("aria-valuemax", 1000);
        $("#numofanswered-progress").css("width", (_row.data.numofanswered / 10) + "%");

        $("#numofmissed-progress").attr("aria-valuenow", _row.data.numofmissed);
        $("#numofmissed-progress").attr("aria-valuemin", 0);
        $("#numofmissed-progress").attr("aria-valuemax", 1000);
        $("#numofmissed-progress").css("width", (_row.data.numofmissed / 10) + "%");
    }
}

function GetTopSixConversationNumber() {
    var _filter = $(".DetailTimesFilter.active").attr("data-item");

    var _row = CompanyPersonFilterPost.find(x => x.type === 2 && x.time === _filter);

    if (_row == undefined) {
        SetCardOverlay($("#TopSixConversationNumber").closest(".card"));

        const url = "/Panel/Company/GetUserDetailTopSixCalls";

        $.get(url, { id: $("#ExtNo").val(), _f: _filter }, function (obj) {
            $("#TopSixConversationNumber").html(obj);

            CompanyPersonFilterPost.push({ type: 2, time: _filter, data: obj });

            RemoveCardOverlay($("#TopSixConversationNumber").closest(".card"));
        });
    } else {
        $("#TopSixConversationNumber").html(_row.data);
    }
}

function GetTopSixConversationTime() {
    var _filter = $(".DetailTimesFilter.active").attr("data-item");

    var _row = CompanyPersonFilterPost.find(x => x.type === 3 && x.time === _filter);

    if (_row == undefined) {
        SetCardOverlay($("#TopSixConversationTime").closest(".card"));

        const url = "/Panel/Company/GetUserDetailTopSixTalkTime";

        $.get(url, { id: $("#ExtNo").val(), _f: _filter }, function (obj) {
            $("#TopSixConversationTime").html(obj);

            CompanyPersonFilterPost.push({ type: 3, time: _filter, data: obj });

            RemoveCardOverlay($("#TopSixConversationTime").closest(".card"));
        });
    } else {
        $("#TopSixConversationTime").html(_row.data);
    }
}

function GetTopSixAnsweredNumber() {
    var _filter = $(".DetailTimesFilter.active").attr("data-item");

    var _row = CompanyPersonFilterPost.find(x => x.type === 4 && x.time === _filter);

    if (_row == undefined) {
        SetCardOverlay($("#TopSixAnsweredNumber").closest(".card"));

        const url = "/Panel/Company/GetUserDetailTopSixAnsweredCalls";

        $.get(url, { id: $("#ExtNo").val(), _f: _filter }, function (obj) {
            $("#TopSixAnsweredNumber").html(obj);

            CompanyPersonFilterPost.push({ type: 4, time: _filter, data: obj });

            RemoveCardOverlay($("#TopSixAnsweredNumber").closest(".card"));
        });
    } else {
        $("#TopSixAnsweredNumber").html(_row.data);
    }
}

function GetTopSixMissedNumber() {
    var _filter = $(".DetailTimesFilter.active").attr("data-item");

    var _row = CompanyPersonFilterPost.find(x => x.type === 5 && x.time === _filter);

    if (_row == undefined) {
        SetCardOverlay($("#TopSixMissedNumber").closest(".card"));

        const url = "/Panel/Company/GetUserDetailTopMissedCalls";

        $.get(url, { id: $("#ExtNo").val(), _f: _filter }, function (obj) {
            $("#TopSixMissedNumber").html(obj);

            CompanyPersonFilterPost.push({ type: 5, time: _filter, data: obj });

            RemoveCardOverlay($("#TopSixMissedNumber").closest(".card"));
        });
    } else {
        $("#TopSixMissedNumber").html(_row.data);
    }
}

$(".call-info-filter a").click(function () {
    $(".call-info-filter a").addClass("disabled-button");

    setTimeout(function () { Dt.ajax.reload(); }, 300);
});