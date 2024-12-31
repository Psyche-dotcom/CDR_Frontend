// var BaseUrl = "https://localhost:7195" + "/api/company/";
// var token = sessionStorage.getItem("accessToken");

var audio;
var detailTempBase64;

function closeNav() {
  $("#callDetail").fadeOut();
  $("body").removeClass("appointment-before");

  if (audio != undefined) {
    audio.destroy();
    audio = undefined;
  }
}

$(document).on("click", ".CallDetailsButton", function () {
  $("#callDetail").fadeIn();
  $("body").addClass("appointment-before");
  $("#callDetail .sidebar-content").html(
    '<img src="/app-assets/images/loading.gif" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);width:64px;height:64px;" />'
  );
  var _callId = $(this).attr("data-type");

  const url =
    "https://cdr-cloud.onrender.com" +
    "/api/company/" +
    `GetCallDetail?Id=${_callId}`;

  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
    success: function (obj) {
      $("#callDetail .sidebar-content").html(obj);

      var _audioUrl = $("#audiourl").html();

      if (_audioUrl != undefined) {
        $.ajax({
          xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener(
              "progress",
              function (evt) {
                $("#xhrInfo").html((evt.loaded / 1000000).toFixed(1) + " Mb");
              },
              false
            );

            return xhr;
          },
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          type: "POST",
          url: "https://" + $("#IpAddress").val() + ":8899/api/Audio",
          data: JSON.stringify({ AudioPath: _audioUrl }),
          dataType: "json",
          contentType: "application/json",
          success: function (data) {
            DrawAudio(data);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $("#sound-recording").html(
              '<div class="detail-loading"> <div class="detail-loading-content"><p>' +
                Localization.RecordingNotFound +
                "</p></div></div>"
            );
          },
        });
      }
    },
    error: function (error) {
      console.error("Error in API request:", error);
    },
  });
});

$("body").click(function (e) {
  var target = $(e.target);
  if ($("body").hasClass("appointment-before")) {
    if (
      !target.is(".appointment-detail") &&
      !target.is(".close-appointment") &&
      !target.closest(".appointment-detail").length &&
      !target.closest(".close-appointment").length
    ) {
      closeNav();
    }
  }
});

function DrawAudio(msg) {
  try {
    var _obj = msg;

    if (_obj == null || _obj.audioBase64 == null || _obj.audioBase64 == "") {
      $("#sound-recording").html(
        '<div class="detail-loading"> <div class="detail-loading-content"><p>' +
          Localization.RecordingNotFound +
          "</p></div></div>"
      );
      return false;
    }

    if (_obj.audioPath == $("#audiourl").html()) {
      $("#plyr-audio-player").html(
        '<source src="data:audio/wav;base64,' + _obj.audioBase64 + '"/>'
      );

      audio = WaveSurfer.create({
        container: document.querySelector("#waveform"),
        waveColor: "#A3F4FF" /*taban kısmı*/,
        progressColor: "#00E0FF" /*üst kısım*/,
        skipLength: 15,
        plugins: [
          WaveSurfer.cursor.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
              "background-color": "#000",
              color: "#fff",
              padding: "2px",
              "font-size": "10px",
            },
          }),
        ],
        fillParent: false,
        scrollParent: true,
        scrollSpeed: 3,
      });

      audio.load("data:audio/wav;base64," + _obj.audioBase64);

      audio.on("audioprocess", function () {
        if (audio.isPlaying()) {
          var totalTime = audio.getDuration(),
            currentTime = audio.getCurrentTime();

          $("#TimeCurrent").html(
            new Date(parseInt(currentTime.toFixed(0) * 1000))
              .toISOString()
              .substr(11, 8)
          );
          $("#TimeTotal").html(
            new Date(parseInt(totalTime.toFixed(0) * 1000))
              .toISOString()
              .substr(11, 8)
          );
        }
      });

      audio.on("ready", function () {
        audio.drawBuffer();
        audio.setVolume(0.4);
        document.querySelector("#volume").value = audio.backend.getVolume();

        var volumeInput = document.querySelector("#volume");
        var onChangeVolume = function (e) {
          audio.setVolume(e.target.value);
        };
        volumeInput.addEventListener("input", onChangeVolume);
        volumeInput.addEventListener("change", onChangeVolume);

        $("#sound-recording").append(
          '<a class="btn btn-success recording-download-button" style="display: block; font-size: 15px; padding: 10px; color: #fff; width: 250px; margin: 35px auto 0 auto;"><i class="ft-download" style="vertical-align:top; margin-left:5px; margin-right:5px;"></i> ' +
            Localization.RecordingDownload +
            "</a>"
        );

        detailTempBase64 = _obj.audioBase64;
      });

      audio.on("finish", function () {
        $(".audio-stop-button").css("display", "none");
        $(".audio-play-button").css("display", "block");
        $(".playpausebutton").removeClass("starting");
      });

      audio.on("error", function () {
        $("#sound-recording").html(
          '<div class="alert alert-danger">' +
            Localization.AudioRecordingsVoiceRecord +
            "</div>" +
            '<a class="btn btn-success recording-download-button" style="display: inline-block; font-size: 15px; padding: 10px; color: #fff;"><i class="ft-download" style="vertical-align:top; margin-left:5px; margin-right:5px;"></i> ' +
            Localization.RecordingDownload +
            "</a>"
        );

        detailTempBase64 = _obj.audioBase64;
      });

      $(".detail-loading").remove();
    }
  } catch (err) {
    $("#sound-recording").html(
      '<div class="detail-loading"> <div class="detail-loading-content"><p>' +
        Localization.RecordingNotFound +
        "</p></div></div>"
    );
  }
}

$(document).on("click", ".playpausebutton", function () {
  if (!$(".playpausebutton").hasClass("starting")) {
    $(".playpausebutton").addClass("starting");
    $(".audio-stop-button").css("display", "block");
    $(".audio-play-button").css("display", "none");
  } else {
    $(".playpausebutton").removeClass("starting");
    $(".audio-stop-button").css("display", "none");
    $(".audio-play-button").css("display", "block");
  }
});

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || "";
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

$(document).on("click", ".recording-download-button", function () {
  var blobItem = b64toBlob(detailTempBase64, "audio/wav", 512);

  var a = document.createElement("a");
  if (window.URL && window.Blob && "download" in a && window.atob) {
    var blob = blobItem;
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = $("#RecordingFileName").val();
    a.click();
    window.URL.revokeObjectURL(url);
  }

  console.clear();
});
