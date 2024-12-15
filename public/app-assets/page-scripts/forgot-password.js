$("#ForgotPasswordButton").click(function (event) {
    event.preventDefault();
    $("#ForgotPasswordButton").addClass("load load-button");
    $("form").submit();
});