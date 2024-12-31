var BaseUrl = "https://cdr-cloud.onrender.com" + "/api/page/";
var token = sessionStorage.getItem("accessToken");
$(".DownloadButton").click(function () {
  GetButtonDetail($(this));
});

$(".DocumentButton").click(function () {
  GetButtonDetail($(this));
});

function GetButtonDetail(button) {
  var link = button.attr("data-item");

  const url = BaseUrl + link;

  GetDownloadInfo(url);
}

function GetDownloadInfo(url) {
  $.ajax({
    url: url,
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function (obj) {
      $("#DownloadSliderContent").html(obj);

      $("#OwlDownload").owlCarousel({
        items: 1,
        rewind: true,
        dots: true,
        nav: true,
        lazyLoad: true,
      });

      $(".section-windows").show();

      $("html, body").animate(
        {
          scrollTop: $(".section-windows").offset().top,
        },
        1000
      );
    },
    error: function (xhr, status, error) {
      toastr.error("Error:", status, error);
    },
  });
}
