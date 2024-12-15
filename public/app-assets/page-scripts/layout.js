var BaseLayoutUrl = "https://cdr-cloud.onrender.com" + "/api/support/";
var BaseLayouttoken = sessionStorage.getItem("accessToken");
setTimeout(function () {
  $(".page-loader-wrapper").fadeOut();
}, 50);

$("body").click(function (e) {
  var target = $(e.target);

  if ($("body").hasClass("menu-open")) {
    if (
      !target.is(".main-menu-content") &&
      !target.is("#ClosenavButton") &&
      !target.closest(".main-menu-content").length &&
      !target.closest("#ClosenavButton").length &&
      !target.closest("#AgentBusyButton").length
    ) {
      $(".site-menu").trigger("click");
    }
  }
});

// $(document).ready(function () {
//   $(".dropdown-language .dropdown-menu a").click(function () {
//     var _this = $(this).attr("data-item");

//     $.post("/Panel/Page/ChangeLanguage", { C: _this }, function (obj) {
//       var url =
//         window.location.origin + window.location.pathname + "?culture=" + obj;
//       window.location.href = url;
//     });
//   });
// });

$("#cb1").on("click", function () {
  $("#color-theme-card").toggleClass("day-background");
  $.post(
    "/Panel/Page/ChangeTheme",
    { t: $("#cb1").prop("checked") },
    function (obj) {
      if (obj) {
        window.location.reload();
      }
    }
  );
});

// $(function () {
//   const url = "/Panel/Help/GetPageHelps";

//   $.get(url, { Page: "" }, function (data) {
//     $("#HelpList").html(data);
//   });
// });

$(function () {
  GetSupportBadge();
  setInterval(GetSupportBadge, 5 * 60 * 1000);
});

function GetSupportBadge() {
  const url = BaseLayoutUrl + "GetSupportBagde";
  console.log("Support Badge");
  $.ajax({
    url: url,
    method: "GET",
    headers: {
      Authorization: `Bearer ${BaseLayouttoken}`,
    },
    success: function (obj) {
      obj = jQuery.parseJSON(obj);

      if (obj.ResultStatus == 0) {
        $(".tool-badge").show();
      } else {
        $(".tool-badge").hide();
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
      $(".tool-badge").hide();
    },
  });
}
