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

var BaseUrl = "https://cdr-cloud.onrender.com" + "/api/company/";
var token = sessionStorage.getItem("accessToken");
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var Dt = $("#DataList").DataTable({
  serverSide: true,
  processing: true,
  searching: false,
  orderMulti: false,
  pageLength: 20,
  ajax: {
    url: BaseUrl + "GetPhoneBookList",
    type: "POST",
    contentType: "application/json",
    datatype: "json",
    data: function (d) {
      return JSON.stringify({
        namesurname: $("#NameSurname").val(),
        email: $("#Email").val(),
        phone: $("#Phone").val(),
        draw: d.draw,
        start: d.start,
        length: d.length,
      });
    },
    dataSrc: function (json) {
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
    { data: "firstname" },
    { data: "lastname" },
    { data: "tableemail" },
    { data: "tablephone" },
    { data: "tablecompany" },
  ],
  fnDrawCallback: function (oSettings) {},
  createdRow: function (row, data, dataIndex) {
    $(row).addClass("phonebookrow-" + data.idphonebook);
  },
  bLengthChange: false,
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
  //responsive: true,
  autoWidth: false,
});

$(function () {
  const url = BaseUrl + `PhoneBookManagement`;
  const placeHolderDiv = $("#create-user-modal .modal-content");

  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      placeHolderDiv.html(data);
    },
    error: function (xhr, status, error) {
      console.error("Request failed:", error);
    },
  });
  console.log(placeHolderDiv);
  placeHolderDiv.on("click", "#CreateUserButton", function (event) {
    event.preventDefault();
    const form = $("#form-phonebook");

    const forms = document.querySelector("#form-phonebook");
    const actionUrl = BaseUrl + "PhoneBookManagement/action";

    const formData = {};
    forms.querySelectorAll("input").forEach((input) => {
      formData[input.name] = input.value;
    });
    formData["idphonebook"] = 0;
    const dataToSend = formData;

    $("#create-user-modal").modal("hide");
    $(".page-loader-wrapper").show();

    $.ajax({
      url: actionUrl,
      type: "POST",
      contentType: "application/json",
      datatype: "json",
      data: JSON.stringify(dataToSend),
      processData: false,
      headers: {
        Authorization: `Bearer ${token}`,
      },

      success: function (data) {
        const phonebookAjaxModel = jQuery.parseJSON(data);
        placeHolderDiv.html(
          phonebookAjaxModel.CompanyPhonebookManagementPartial
        );

        if (phonebookAjaxModel.ResultStatus == 0) {
          toastr.success(`${phonebookAjaxModel.Message}`, Localization.Success);
          Dt.ajax.reload();
          $(".page-loader-wrapper").hide();
        } else {
          let summaryText = "";
          $("#create-user-modal .validation-summary-errors > ul > li").each(
            function () {
              let text = $(this).text();
              summaryText += `*${text} <br>`;
            }
          );
          toastr.error(summaryText);
          setTimeout(function () {
            $("#create-user-modal").modal("show");
          }, 300);
        }

        $(".page-loader-wrapper").hide();
      },
      error: function (err) {
        console.log(err);
        toastr.error(`${err.responseText}`, Localization.Error);
        $(".page-loader-wrapper").hide();
      },
    });
  });

  $(".create-user-modal").click(function () {
    $("#create-user-id").val("");
    $("#FirstName").val("");
    $("#LastName").val("");
    $("#Email").val("");
    $("#MobileNumber").val("");
    $("#Company").val("");
    $("#create-user-modal").modal("show");
  });

  $(".update-user-modal").click(function () {
    var DtData = Dt.rows(".selected").data();

    if (DtData.length == 0) {
      return false;
    }

    if (DtData.length > 1) {
      toastr.error(Localization.Adet1KisiSec, Localization.Error);
      return false;
    }

    var _id = DtData[0].idphonebook;

    $.ajax({
      url: url,
      type: "GET",
      data: { userId: _id },
      headers: {
        Authorization: "Bearer " + token,
      },
      success: function (data) {
        placeHolderDiv.html(data);
        $("#create-user-modal").modal("show");
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  });

  $(".deleteRows").click(function () {
    var DtData = Dt.rows(".selected").data();

    if (DtData.length == 0) {
      return false;
    }

    var _text = Localization.VeriSilmeyeEminMisiniz.replace(
      "-_Replace_-",
      Dt.rows(".selected").data().length
    );

    swal(
      {
        title: Localization.AreYouSure,
        text: _text,
        type: "warning",
        showCancelButton: true,
        cancelButtonText: Localization.Cancel,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: Localization.Sil,
        closeOnConfirm: false,
      },
      function (e) {
        if (!e) {
          return false;
        }

        var _selected = [];

        for (var i = 0; i < DtData.length; i++) {
          _selected.push(DtData[i].idphonebook);
        }

        const url = BaseUrl + "DeletePhoneBook";

        $.ajax({
          url: url,
          type: "POST",
          contentType: "application/json",
          datatype: "json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: JSON.stringify(_selected),
          success: function (obj) {
            const phonebookAjaxModel = jQuery.parseJSON(obj);

            if (phonebookAjaxModel.ResultStatus === 0) {
              toastr.success(phonebookAjaxModel.Message, Localization.Success);
              Dt.ajax.reload();
            } else {
              toastr.error(phonebookAjaxModel.Message, Localization.Error);
            }
            swal.close();
          },
          error: function (xhr, status, error) {
            console.error("Request failed:", error);
          },
        });
      }
    );
  });
});

function checkfile(sender) {
  var validExts = new Array(".xlsx", ".xls");
  var fileExt = sender.value;
  fileExt = fileExt.substring(fileExt.lastIndexOf("."));
  if (validExts.indexOf(fileExt) < 0) {
    $("#file").val("");
    alert(Localization.ExcelFormatindaDosyaYukle);
    return false;
  } else return true;
}

$("#AddExcel").click(function () {
  $("#ExportModal").modal("hide");

  $(".PostLoader").show();

  var fileExtension = ["xls", "xlsx"];
  var filename = $("#file").val();
  if (filename.length == 0) {
    toastr.error(Localization.DosyaSeciniz, Localization.Error);
    $(".PostLoader").hide();
    return false;
  } else {
    var extension = filename.replace(/^.*\./, "");
    if ($.inArray(extension, fileExtension) == -1) {
      toastr.error(Localization.SadeceExcelDosyasiSec, Localization.Error);
      $(".PostLoader").hide();
      return false;
    }
  }
  var fdata = new FormData();
  var fileUpload = $("#file").get(0);
  var files = fileUpload.files;
  fdata.append(files[0].name, files[0]);
  $.ajax({
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          $(".progress").show();
          $(".progress").html(
            '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0">0%</div>'
          );
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            console.log(percentComplete);

            $(".progress-bar").css({
              width: percentComplete * 100 + "%",
            });
            $(".progress-bar").html(percentComplete * 100 + "%");
          }
        },
        false
      );
      return xhr;
    },
    type: "POST",
    url: BaseUrl + "ImportCompanyPhonebook",
    data: fdata,
    contentType: false,
    processData: false,
    headers: {
      Authorization: "Bearer " + token,
    },
    success: function (response) {
      var data = jQuery.parseJSON(response);
      if (data.ResultStatus == 0) {
        $(".PostLoader").hide();
        toastr.success(data.Message, Localization.Success);
        fdata = new FormData();
        Dt.ajax.reload();
        $("#file").val(null);
      } else {
        $(".PostLoader").hide();
        toastr.error(data.Message, Localization.Error);
        fdata = new FormData();
        $("#ExportModal").modal("show");
      }
    },
    error: function (e) {
      // Log the error details
      console.error("Error:", e);
      console.error("Status:", e.status);
      console.error("Status Text:", e.statusText);
      console.error("Response Text:", e.responseText);

      // Optionally display an error message
      toastr.error("An error occurred while processing the request.", "Error");
    },
  });
});

$("#Filter").click(function () {
  Dt.ajax.reload();
});

// $(".exportExcel").click(function () {
//   var _ns = $("#NameSurname").val();
//   var _e = $("#Email").val();
//   var _p = $("#Phone").val();

//   var sonuc = BaseUrl + "ExportCompanyPhonebook";
//   var control = true;

//   if (_ns != null && _ns.length > 0) {
//     sonuc += (control ? "?" : "&") + "NameSurname=" + _ns;
//     control = false;
//   }

//   if (_e != null && _e.length > 0) {
//     sonuc += (control ? "?" : "&") + "Email=" + _e;
//     control = false;
//   }

//   if (_p != null && _p.length > 0) {
//     sonuc += (control ? "?" : "&") + "Phone=" + _p;
//     control = false;
//   }

//   window.open(sonuc, "_blank");
// });

$(".exportExcel").click(function () {
  var _ns = $("#NameSurname").val();
  var _e = $("#Email").val();
  var _p = $("#Phone").val();

  var sonuc = BaseUrl + "ExportCompanyPhonebook";
  var params = [];

  if (_ns != null && _ns.length > 0) {
    params.push("NameSurname=" + encodeURIComponent(_ns));
  }

  if (_e != null && _e.length > 0) {
    params.push("Email=" + encodeURIComponent(_e));
  }

  if (_p != null && _p.length > 0) {
    params.push("Phone=" + encodeURIComponent(_p));
  }

  if (params.length > 0) {
    sonuc += "?" + params.join("&");
  }

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
        fileName = `phone-book-${day}${month}${year}-${uniqueKey}.xlsx`;
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
      toastr.error("Error exporting:", xhr.responseText);
    },
  });
});

$("#DataList tbody").on("click", "tr", function () {
  $(this).toggleClass("selected");
});

$(".import-excel").click(function () {
  $("#ExportModal").modal("show");
});
