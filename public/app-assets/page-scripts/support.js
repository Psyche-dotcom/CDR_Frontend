var Localization = {
  Error: "Error",
  Success: "Success",
  Cancelled: "Cancelled",
  NotSolved: "Not Solved",
  Solved: "Solved",
};

var BaseUrl = "https://cdr-cloud.onrender.com" + "/api/support/";
var token = sessionStorage.getItem("accessToken");
$("#create-support-button").click(function () {
  $("#SupportCategoryId").val(0).change();
  $("#SupportMessage").val("");

  $("#CreateSupportModal").modal("show");
});

$(function () {
  GetSupports();

  const url = BaseUrl + "AddSupport";
  const placeHolderDiv = $("#CreateSupportModal .modal-content");

  $.ajax({
    url: url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .done(function (data) {
      placeHolderDiv.html(data);

      $(".bselect:not(.Setted)").each(function () {
        var selectonclose = typeof $(this).attr("multiple") === "undefined";
        $(this).css("width", "100%");

        $(this).select2({
          width: "100%",
          closeOnSelect: selectonclose,
          language: "tr",
          dropdownParent: $("#CreateSupportModal"),
        });

        $(this).addClass("Setted");
      });
    })
    .fail(function (xhr, status, error) {
      console.error("Request failed:", error);
    });
  placeHolderDiv.on("click", "#AddSupport", function (event) {
    event.preventDefault();
    $(".page-loader-wrapper").show();

    const forms = document.querySelector("#form-add-support-information");

    var selectfield = forms.querySelector("select");
    var textfield = forms.querySelector("textarea");

    const actionUrl = url;
    var dataToSend = {
      supportCategoryId: selectfield.value,
      supportMessage: textfield.value,
      modelError: "",
    };

    $.ajax({
      url: actionUrl,
      type: "POST",
      processData: false,
      contentType: "application/json",
      datatype: "json",
      data: JSON.stringify(dataToSend),
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (data) {
        const addSupportAjaxModel = jQuery.parseJSON(data);
        placeHolderDiv.html(addSupportAjaxModel.SupportAddPartial);

        $(".bselect:not(.Setted)").each(function () {
          var selectonclose = typeof $(this).attr("multiple") == "undefined";
          $(this).css("width", "100%");

          $(this).select2({
            width: "100%",
            closeOnSelect: selectonclose,
            language: "tr",
            dropdownParent: $("#CreateSupportModal"),
          });

          $(this).addClass("Setted");
        });

        const isValid =
          placeHolderDiv.find('[name="IsValid"]').val() === "True";

        if (isValid) {
          //   toastr.success(
          //     `${addSupportAjaxModel.Message}`,
          //     Localization.Success
          //   );
          $("#CreateSupportModal").modal("hide");
          GetSupports();
        } else {
          let summaryText = "";
          $("#CreateSupportModal #validation-summary > ul > li").each(
            function () {
              let text = $(this).text();
              summaryText += `*${text}\n`;
            }
          );
          //   toastr.error(summaryText);
        }

        $(".page-loader-wrapper").hide();
      },
      error: function (err) {
        // toastr.error(`${err.responseText}`, Localization.Error);
        $(".page-loader-wrapper").hide();
      },
    });
  });
});

function GetSupports() {
  $("#support-list").html(
    '<img src="/app-assets/images/loading.gif" style="position: relative; left: 50%; transform: translateX(-50%);width:64px;height:64px;" />'
  );

  const url = BaseUrl + "GetSupports";

  $.ajax({
    url: url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      $("#support-list").html(obj);
    },
    error: function (xhr, status, error) {
      console.error("Request failed:", error);
    },
  });
}

$(document).on("click", ".support-list-item", function () {
  $(".support-list-item").removeClass("active");
  $(this).addClass("active");

  var _pi = $(this).attr("data-item");
  GetSupportDetail(_pi);
  GetSupportMessages(_pi);
});

function GetSupportDetail(Support) {
  $("#support-detail-information").html(
    '<img src="/app-assets/images/loading.gif" style="position: relative; left: 50%; transform: translateX(-50%);width:64px;height:64px;" />'
  );

  const url = BaseUrl + "GetSupportDetail" + `?PublicId=${Support}`;

  $.ajax({
    url: url,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // data: {
    //   PublicId: Support,
    // },
    success: function (data) {
      var obj = jQuery.parseJSON(data);
      if (obj.ResultStatus == 0) {
        var _statue = "";

        if (obj.Statue == 1) {
          _statue =
            '<div class="support-statue solved" style="margin-top: 5px;"><i class="ft-check"></i> ' +
            Localization.Solved +
            "</div>";
        } else if (obj.Statue == 2) {
          _statue =
            '<div class="support-statue not-solved" style="margin-top: 5px;"><i class="ft-x"></i> ' +
            Localization.NotSolved +
            "</div>";
        } else if (obj.Statue == 3) {
          _statue =
            '<div class="support-statue sp-cancelled" style="margin-top: 5px;"><i class="ft-trash-2"></i> ' +
            Localization.Cancelled +
            "</div>";
        }

        var _form = "";

        if (_statue == "") {
          _form =
            '<div class="support-text-input">' +
            '<textarea class="form-control" placeholder="' +
            Localization.Mesajiniz +
            '" id="support-message-textarea" maxlength="10000"></textarea>' +
            '<button class="btn btn-success support-send-message" data-item="' +
            obj.SupportPublicId +
            '"><i class="ft-arrow-right"></i> ' +
            Localization.Send +
            "</button>" +
            "</div>";
        }

        $("#support-detail-information").html(
          '<div class="title">' +
            '<div class="card">' +
            '<div class="card-header">' +
            '<h4 class="card-title">' +
            obj.CreatedDateString +
            " - " +
            obj.SupportCategories +
            "</h4>" +
            _statue +
            "</div>" +
            "</div>" +
            "</div>" +
            _form
        );
      } else {
        $("#support-detail-information").html("<p>" + obj.Message + "</p>");
      }
    },
    error: function (xhr, status, error) {
      console.error("Request failed:", error);
      $("#support-detail-information").html("<p>Error: " + error + "</p>");
    },
  });
}

$(document).on("click", ".support-message-item", function () {
  $(this).find(".support-message-item-body").slideToggle();
});

function GetSupportMessages(Support) {
  $("#support-message-container").html(
    '<img src="/app-assets/images/loading.gif" style="position: relative; left: 50%; transform: translateX(-50%);width:64px;height:64px;" />'
  );

  const url = BaseUrl + "GetSupportMessages";

  $.ajax({
    url: url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      PublicId: Support,
    },
    success: function (obj) {
      $("#support-message-container").html(obj);

      setTimeout(function () {
        $(".new-notification").hide(500);
      }, 3000);

      setTimeout(function () {
        $(".support-list-item.active .notification-support-list").remove();

        if ($(".support-list-item .notification-support-list").length == 0) {
          $(".msg-link .tool-badge").hide();
        }
      }, 100);
    },
    error: function (xhr, status, error) {
      console.error("Request failed:", error);
    },
  });
}

$(document).on("click", ".support-send-message", function () {
  $(".page-loader-wrapper").show();

  var _support = $(this).attr("data-item");

  var data = {
    PublicId: _support,
    Text: $("#support-message-textarea").val(),
  };
  const url =
    BaseUrl + `AddMessage?PublicId=${data.PublicId}&Text=${data.Text}`;

  $.ajax({
    url: url,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
    success: function (obj) {
      obj = jQuery.parseJSON(obj);

      if (obj.ResultStatus == 0) {
        // toastr.success(obj.Message, Localization.Success);
        $("#support-message-textarea").val("");
        GetSupportMessages(_support);
      } else {
        // toastr.error(obj.Message, Localization.Error);
      }

      $(".page-loader-wrapper").hide();
    },
    error: function (xhr, status, error) {
      console.error("Request failed:", error);
      //   toastr.error("An error occurred. Please try again.", Localization.Error);
      $(".page-loader-wrapper").hide();
    },
  });
});
