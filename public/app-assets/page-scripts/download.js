$(".DownloadButton").click(function () {
    GetButtonDetail($(this));
});

$(".DocumentButton").click(function () {
    GetButtonDetail($(this));
});

function GetButtonDetail(button) {
    var link = button.attr("data-item");

    const url = "/Panel/Page/" + link;

    GetDownloadInfo(url);
}

function GetDownloadInfo(url) {
    $.get(url, function (obj) {
        $("#DownloadSliderContent").html(obj);

        $("#OwlDownload").owlCarousel({
            items: 1,
            rewind: true,
            dots: true,
            nav: true,
            lazyLoad: true
        });

        $(".section-windows").show();

        $('html, body').animate({
            scrollTop: $(".section-windows").offset().top
        }, 1000);
    });
}

