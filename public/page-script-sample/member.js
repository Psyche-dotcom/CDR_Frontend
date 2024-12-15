let userinfo = localStorage.getItem("UserData");
var _full = 365;
var _now = localStorage.getItem("_minus");
console.log("now", _now);
var Country = 0;
var City = 0;
var SelectDeposite;
Country = userinfo.countryId ?? 0;
City = userinfo.cityId ?? 0;

$("#DistanceSalesAggrementModal .modal-body").on("scroll", function () {
  if (
    Math.round($(this).scrollTop() + $(this).innerHeight()) >=
    $(this)[0].scrollHeight - 80
  ) {
    $("#AggrementApproveButton").show();
  }
});

$("#PrivacyAgreementModal .modal-body").on("scroll", function () {
  if (
    Math.round($(this).scrollTop() + $(this).innerHeight()) >=
    $(this)[0].scrollHeight - 80
  ) {
    $("#PrivacyApproveButton").show();
  }
});

$("#AggrementApproveButton").click(function () {
  $(this).addClass("active-click");
  $("#DistanceSellingContractCheck").removeClass("not-click");
  $("#DistanceSellingContractCheck").prop("checked", true);
  $('input[name="contract-check"]').trigger("change");
  $("#DistanceSalesAggrementModal").modal("hide");
});

$("#PrivacyApproveButton").click(function () {
  $(this).addClass("active-click");
  $("#PrivacyAgreementCheck").removeClass("not-click");
  $("#PrivacyAgreementCheck").prop("checked", true);
  $('input[name="contract-check"]').trigger("change");
  $("#PrivacyAgreementModal").modal("hide");
});

$(document).on("change", 'input[name="contract-check"]', function () {
  if (
    $('input[name="contract-check"]:checked').length == 2 &&
    $("#AggrementApproveButton").hasClass("active-click") &&
    $("#PrivacyApproveButton").hasClass("active-click")
  )
    $(".checkout-form-overlay").fadeOut();
});

$(document).on("click", ".checkout-form-content fieldset", function () {
  var id = $(this).find("input").attr("id");

  if (id == "DistanceSellingContractCheck") {
    if ($(this).find("input").hasClass("not-click")) {
      $("#DistanceSalesAggrementModal").modal("show");
    }
  } else if (id == "PrivacyAgreementCheck") {
    if ($(this).find("input").hasClass("not-click")) {
      $("#KvkkModal").modal("show");
    }
  }
});

$(document).on("click", "#DistanceSellingContractCheck", function (e) {
  e.preventDefault();
});

$(document).on("click", "#PrivacyAgreementCheck", function (e) {
  e.preventDefault();
});
