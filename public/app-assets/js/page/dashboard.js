$(function () {
    GetTopValues();
    GetSocketValues();
    setInterval(function () { GetSocketValues() }, 10 * 1000);
});

function GetTopValues() {
    $.post("/data/get-top-values", function (obj) {
        $("#abandonedcalls").html(obj.abandonedcalls);
        $("#abandonedpercentage").html(obj.abandonedpercentage);
        $("#answeredcalls").html(obj.answeredcalls);
        $("#answeredpercentage").html(obj.answeredpercentage);
        $("#avaragewaittime").html(obj.avaragewaittime);
        $("#avghandlingtime").html(obj.avghandlingtime);
        $("#totalcalls").html(obj.totalcalls);
        $("#totaltalktime").html(obj.totaltalktime);
    });
}

var Dt = $('#QueueDetailsTable').DataTable({
    "serverSide": true,
    "orderMulti": false,
    "processing": true,
    "pageLength": 10,
    "ajax": {
        "url": "/data/data-queue-details",
        "type": "POST",
        "datatype": "json"
    },
    "columns": [
        { "data": "sno" },
        { "data": "queuename" },
        { "data": "queueno" },
        { "data": "answeredcalls" },
        { "data": "missedcalls" },
        { "data": "avgtalktime" }
    ],
    "fnDrawCallback": function (oSettings) {
    },
    resposive: true,
    autoWidth: false,
    "bLengthChange": false,
});

var Dt2 = $('#AgentDetailsTable').DataTable({
    "serverSide": true,
    "orderMulti": false,
    "processing": true,
    "pageLength": 10,
    "ajax": {
        "url": "/data/data-agent-details",
        "type": "POST",
        "datatype": "json"
    },
    "columns": [
        { "data": "sno" },
        { "data": "agent" },
        { "data": "stateString" },
        { "data": "answeredcalls" },
        { "data": "missedcalls" },
        { "data": "avgtalktime" }
    ],
    "fnDrawCallback": function (oSettings) {
    },
    resposive: true,
    autoWidth: false,
    "bLengthChange": false,
    "createdRow": function (row, data, index) {
        $('td', row).eq(0).css('border-left', '5px solid ' + data.stateColor);
    }
});

function GetSocketValues() {
    $.post("/data/data-socket-data", function (obj) {
        $("#callwaiting").html(obj.callWaiting);
        $("#agentbusy").html(obj.agentBusy);
    });
}