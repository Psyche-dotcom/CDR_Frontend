var Localization = {
  VeritabaniBaglantiBasarili: "Database connection is successful",
  Success: "Success",
  VeritabaniBaglantiBasarisiz: "Database connection failed",
  Error: "Error",
  NotConnected: "Not Connected",
  Connected: "Connected",
  TotalExt2Ext: "Total Internal",
  TotalAbandoned: "Total Abandoned",
  TotalMissed: "Total Missed",
};

$(document).ready(function () {
  Connect();
  DbConnectionControl(false);
});

$(".cb-value").click(function () {
  var mainParent = $(this).parent(".toggle-btn");
  if ($(mainParent).find("input.cb-value").is(":checked")) {
    $(mainParent).addClass("active");
  } else {
    $(mainParent).removeClass("active");
  }
});

$("#ConnectControl").on("click", function () {
  DbConnectionControl(true);
});
const BaseUrl = "https://cdr-cloud.onrender.com" + "/api/";
const token = sessionStorage.getItem("accessToken");

function DbConnectionControl(show) {
  var url = BaseUrl + "system/GetDbControl";

  $.ajax({
    url: url,
    type: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      if (obj) {
        if (show)
          toastr.success(
            Localization.VeritabaniBaglantiBasarili,
            Localization.Success
          );
      } else {
        if (show)
          toastr.error(
            Localization.VeritabaniBaglantiBasarisiz,
            Localization.Error
          );
      }

      $("#ConnectContext").html(
        '<h3 class="profile-connect-text ' +
          (!obj ? " text-bold-600" : "") +
          '" > ' +
          Localization.NotConnected +
          "</h3 >" +
          '<div class="toggle-btn ' +
          (obj ? " active" : "") +
          ' float-left" >' +
          '<input type="checkbox"' +
          (obj ? "checked" : "") +
          ' class="cb-value" disabled />' +
          '<span class="round-btn"></span>' +
          "</div>" +
          '<h3 class="profile-connect-text' +
          (obj ? " text-bold-600" : "") +
          '" > ' +
          Localization.Connected +
          "</h3>"
      );
    },
    error: function (xhr) {
      toastr.error(
        Localization.VeritabaniBaglantiBasarisiz,
        Localization.Error
      );
    },
  });
}

var connection;

function Connect() {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://" + $("#SocketIpAddress").val() + ":8899/myMessageHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  async function start() {
    try {
      await connection.start();
      SocketConnectInfo(true);
    } catch (err) {
      console.log(err);
      SocketConnectInfo(false);
    }
  }

  connection.onclose(async () => {
    await start();
  });

  start();
}

function SocketConnectInfo(_b) {
  $("#SocketConnectContext").html(
    '<h3 class="profile-connect-text ' +
      (!_b ? " text-bold-600" : "") +
      '" > ' +
      Localization.NotConnected +
      "</h3 >" +
      '<div class="toggle-btn ' +
      (_b ? " active" : "") +
      ' float-left" >' +
      '<input type="checkbox"' +
      (_b ? "checked" : "") +
      ' class="cb-value" disabled />' +
      '<span class="round-btn"></span>' +
      "</div>" +
      '<h3 class="profile-connect-text' +
      (_b ? " text-bold-600" : "") +
      '" > ' +
      Localization.Connected +
      "</h3>"
  );
}

$("#SocketConnectControl").on("click", function () {
  Connect();
});

$("#cb1").on("click", function () {
  $("#color-theme-card").toggleClass("day-background");
  $.post("/ajax/edit-theme", { t: $("#cb1").prop("checked") }, function (obj) {
    if (obj.success) {
      window.location.reload();
    }
  });
});

$(function () {
  const url = BaseUrl + "user/PasswordChange";
  const placeHolderDiv = $("#PasswordChangeContentDiv");

  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      placeHolderDiv.html(data);
    },
    error: function (xhr) {
      console.error("Error fetching data:", xhr);
    },
  });

  placeHolderDiv.on("click", "#SavePassword", function (event) {
    event.preventDefault();
    const oldpass = $("#CurPassword").val();
    const newpass = $("#NPassword").val();
    const repass = $("#RePassword").val();
    const actionUrl = BaseUrl + "user/PasswordChange";
    const dataToSend = {
      currentPassword: oldpass,
      newPassword: newpass,
      repeatPassword: repass,
    };
    console.log("password", dataToSend);
    $(".page-loader-wrapper").show();
    $.ajax({
      url: actionUrl,
      type: "POST",
      data: JSON.stringify(dataToSend),
      contentType: "application/json",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (data) {
        const userPasswordChangeAjaxModel = jQuery.parseJSON(data);
        placeHolderDiv.html(
          userPasswordChangeAjaxModel.UserPasswordChangePartial
        );
        let isNotValidText = $("#validation-summary").text();
        let isNotValid = isNotValidText && isNotValidText.trim().length > 0;

        if (!isNotValid) {
          toastr.success(
            `${userPasswordChangeAjaxModel.Message}`,
            Localization.Success
          );
        } else {
          toastr.error(isNotValidText);
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
});

$(function () {
  const url = BaseUrl + "user/Timezone";
  const placeHolderDiv = $("#TimezoneContent");

  $.get(url).done(function (data) {
    placeHolderDiv.html(data);

    document.querySelector(".js-Selector").innerHTML = selectorOptions;

    $(".js-Selector").select2({
      dropdownAutoWidth: true,
      width: 446,
    });

    if ($("#TimezoneText").val().length > 0) {
      $(".js-Selector").val($("#TimezoneText").val()).trigger("change");
    }
  });

  placeHolderDiv.on("click", "#SaveTimezone", function (event) {
    event.preventDefault();
    const form = $("#form-user-timezone");
    const actionUrl = BaseUrl + "user/Timezone";
    console.log("url", actionUrl);
    var dataToSend = {
      gmt: $(".js-Selector").select2().find(":selected").data("timezone"),
      timezone: $(".js-Selector").val(),
    };
    console.log("data to send", dataToSend);

    $.ajax({
      url: actionUrl,
      type: "POST",
      data: JSON.stringify(dataToSend),
      contentType: "application/json",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      success: function (data) {
        console.log("Success here", data);
        const userPasswordChangeAjaxModel = jQuery.parseJSON(data);

        placeHolderDiv.html(
          userPasswordChangeAjaxModel.UserPasswordChangePartial
        );

        let isNotValidText = $("#validation-summary").text();

        let isNotValid = isNotValidText && isNotValidText.trim().length > 0;

        document.querySelector(".js-Selector").innerHTML = selectorOptions;

        $(".js-Selector").select2({
          dropdownAutoWidth: true,
          width: 446,
        });

        if ($("#TimezoneText").val().length > 0) {
          $(".js-Selector").val($("#TimezoneText").val()).trigger("change");
        }

        if (!isNotValid) {
          toastr.success(
            `${userPasswordChangeAjaxModel.Message}`,
            Localization.Success
          );
        } else {
          toastr["error"](isNotValidText);
        }
        $(".page-loader-wrapper").hide();
      },
      error: function (err) {
        toastr["error"](`${err.responseText}`, Localization.Error);
        $(".page-loader-wrapper").hide();
      },
    });
  });
});

$(function () {
  const url = BaseUrl + "user/ConnectionDetail";
  const placeHolderDiv = $("#UserConnectionDetailContent");

  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (data) {
      placeHolderDiv.html(data);

      var _port = $("#TempPort").val();

      $("#Port").val(_port).change();

      $(".bselect:not(.Setted)").each(function () {
        var selectonclose = typeof $(this).attr("multiple") == "undefined";
        $(this).css("width", "100%");

        $(this).select2({
          width: "100%",
          closeOnSelect: selectonclose,
          language: "tr",
        });

        $(this).addClass("Setted");
      });
    },
    error: function (err) {
      console.error(err);
      toastr.error("Failed to fetch data", "Error");
    },
  });

  placeHolderDiv.on("click", "#Save", function (event) {
    event.preventDefault();
    const form = $("#form-user-connection-detail");
    const actionUrl = BaseUrl + "user/ConnectionDetail";

    var ip = $("#IpAddressCon").val();
    var port = $("#PortCon").val();
    var dbname = $("#DbNameCon").val();
    var dbusername = $("#ConDbUsername").val();
    var dbpassword = $("#ConDbPassword").val();
    var version = $('input[name="Version"]:checked').val();
    var dataToSend = {
      ipAddress: ip,
      port: port,
      dbName: dbname,
      dbUsername: dbusername,
      dbPassword: dbpassword,
      modelError: "",
      version: version,
    };
    $(".page-loader-wrapper").show();
    $.ajax({
      url: actionUrl,
      type: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(dataToSend),
      contentType: "application/json",
      success: function (data) {
        const userConnectionDetailAjaxModel = jQuery.parseJSON(data);
        placeHolderDiv.html(
          userConnectionDetailAjaxModel.UserConnectionDetailPartial
        );
        let isNotValidText = $("#validation-summary").text();
        let isNotValid = isNotValidText && isNotValidText.trim().length > 0;
        if (!isNotValid) {
          toastr.success(
            `${userConnectionDetailAjaxModel.Message}`,
            Localization.Success
          );
          setTimeout(function () {
            window.location.reload();
          }, 500);
        } else {
          toastr.error(isNotValidText);
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
});

$(function () {
  const url = BaseUrl + "user/ProfileInformation";
  const placeHolderDiv = $("#UserProfileInformationContent");

  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .done(function (data) {
      placeHolderDiv.html(data);

      $(".bselect:not(.Setted)").each(function () {
        var selectonclose = typeof $(this).attr("multiple") == "undefined";
        $(this).css("width", "100%");

        $(this).select2({
          width: "100%",
          closeOnSelect: selectonclose,
          language: "tr",
        });

        $(this).addClass("Setted");
      });

      var element = document.getElementById("PhoneNumber");
      var maskOptions = {
        mask: "+000000000000000",
      };
      var mask = IMask(element, maskOptions);

      $("#ZipCode").bind("keyup paste", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });

      if (Country > 0) {
        $("#CountryId").val(Country).trigger("change");
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Request failed:", textStatus, errorThrown);
    });

  placeHolderDiv.on("click", "#SaveUserInformation", function (event) {
    event.preventDefault();

    var fname = $("#FirstName").val();

    var lname = $("#LastName").val();
    var email = $("#Email").val();

    var phone = $("#PhoneNumber").val();
    var company = $("#CompanyName").val();
    var country = $("#CountryId").val();
    var cityid = $("#CityId").val();
    var addres = $("#Address").val();
    console.log("address", addres);
    var zip = $("#ZipCode").val();
    const actionUrl = BaseUrl + "user/ProfileInformation";
    var dataToSend = {
      firstName: fname,
      lastName: lname,
      email: email,
      phoneNumber: phone,
      companyName: company,
      countryId: country,
      cityId: cityid,
      address: addres,
      zipCode: zip,
      modelError: "",
    };

    $(".page-loader-wrapper").show();
    $.ajax({
      url: actionUrl,
      type: "POST",
      data: JSON.stringify(dataToSend),
      processData: false,
      contentType: "application/json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: function (data) {
        const userProfileInformationAjaxModel = jQuery.parseJSON(data);
        placeHolderDiv.html(
          userProfileInformationAjaxModel.UserProfileInformationPartial
        );
        let isNotValidText = $("#validation-summary").text();
        let isNotValid = isNotValidText && isNotValidText.trim().length > 0;

        $(".bselect:not(.Setted)").each(function () {
          var selectonclose = typeof $(this).attr("multiple") == "undefined";
          $(this).css("width", "100%");

          $(this).select2({
            width: "100%",
            closeOnSelect: selectonclose,
            language: "tr",
          });

          $(this).addClass("Setted");
        });

        var element = document.getElementById("PhoneNumber");
        var maskOptions = {
          mask: "+000000000000000",
        };
        var mask = IMask(element, maskOptions);

        $("#ZipCode").bind("keyup paste", function () {
          this.value = this.value.replace(/[^0-9]/g, "");
        });

        if (Country > 0) {
          $("#CountryId").val(Country).trigger("change");
        }

        if (!isNotValid) {
          toastr.success(
            `${userProfileInformationAjaxModel.Message}`,
            Localization.Success
          );
          setTimeout(function () {
            window.location.reload();
          }, 500);
        } else {
          toastr.error(isNotValidText);
        }
        // $(".page-loader-wrapper").hide();
      },
      error: function (err) {
        console.log(err);
        toastr.error(`${err.responseText}`, Localization.Error);
        $(".page-loader-wrapper").hide();
      },
    });
  });
});

$(document).on("change", "#CountryId", function () {
  const url =
    BaseUrl + "user/GetCityListByCountryId" + `?CountryId=${this.value}`;

  $.ajax({
    url: url,
    type: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    contentType: "application/json",
    success: function (data) {
      $("#CityId").html("");

      for (var i = 0; i < data.$values.length; i++) {
        $("#CityId").append(
          '<option value="' +
            data.$values[i].id +
            '" ' +
            (data.$values[i].id == City ? "selected" : "") +
            ">" +
            data.$values[i].name +
            "</option>"
        );
      }

      $("#CityId").trigger("change");
    },
    error: function (err) {
      console.error(err);
      toastr.error("Failed to load cities", "Error");
    },
  });
});
