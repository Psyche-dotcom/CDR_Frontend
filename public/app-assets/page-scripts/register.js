var element = document.getElementById('PhoneNumber');
var maskOptions = {
    mask: '+000000000000000'
};
var mask = IMask(element, maskOptions);

$("#RegisterButton").click(function (event) {
    event.preventDefault();
    $("#RegisterButton").addClass("load load-button");
    $("form").submit();
});

