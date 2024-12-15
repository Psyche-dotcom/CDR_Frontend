$('#PermissionTable').DataTable({
    "processing": true,
    "pageLength": 10,
    "ajax": {
        "url": "/data/get-group-users",
        "type": "POST",
        "datatype": "json",
        "dataSrc": function (json) {
            var result = []

            for (var i = 0; i < json.length; i++) {
                var newobj = {
                    NameSurname: json[i].nameSurname,
                    EmailAddress: json[i].emailAddress,
                    PackageStatus: json[i].finishDateString,
                    Buttons: json[i].buttons,
                }
                result.push(newobj)
            }
            return result;
        }
    },
    "columns": [
        { "data": "NameSurname" },
        { "data": "EmailAddress" },
        { "data": "PackageStatus" },
        { "data": "Buttons" }
    ],
    "fnDrawCallback": function (oSettings) {
    },
    resposive: true,
    autoWidth: false,
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
    oLanguage: { sProcessing: '<span class="load load-button"></span>' }
});

$("#Save").click(function () {
    $(".PostLoader").show();

    var _checked = [];

    $("input:checkbox[name=permission-check]:checked").each(function () {
        _checked.push($(this).val());
    });

    $.post("/ajax/edit-permission", { Perm: _checked }, function (obj) {
        if (obj.success) {
            toastr.success(obj.message, Localization.Success);
        } else {
            toastr.error(obj.message, Localization.Error);
        }

        $(".PostLoader").hide();
    });

});

$(document).on("click", ".edit-permission-button", function () {
    var _id = $(this).attr("data-item");
    $(".PostLoader").show();
    $("#EditPermissionContent").html('<img src="/app-assets/images/loading.gif" style="display:block;margin:0 auto;width:64px;height:64px" />');
    $.post("/data/get-user-permission", { Id: _id }, function (obj) {
        $("#EditPermissionContent").html(obj);
        $("#edit-permission-modal").modal("show");
        $(".PostLoader").hide();
    });
});

$("#SaveOtherPermission").click(function () {
    $("#edit-permission-modal").modal("hide");

    var _id = $("#PermissionUserId").val();
    var _checked = [];

    $("input:checkbox[name=other-permission-check]:checked").each(function () {
        _checked.push($(this).val());
    });

    $.post("/ajax/edit-permission-other-user", { Perm: _checked, Id: _id }, function (obj) {
        if (obj.success) {
            toastr.success(obj.message, Localization.Success);
        } else {
            toastr.error(obj.message, Localization.Error);
            $("#edit-permission-modal").modal("show");
        }

    });

});