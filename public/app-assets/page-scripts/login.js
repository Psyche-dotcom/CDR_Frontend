$(".email-activation-button").click(function () {
    swal({
        title: Localization.EmailActivation,
        text: Localization.ReactivationMessage,
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        inputPlaceholder: Localization.EmailAddress,
        showLoaderOnConfirm : true
    },
        function (inputValue) {
            if (inputValue === false) return false;

            if (inputValue === "") {
                swal.showInputError(Localization.EnterMailAddress);
                return false
            }

            $.post("/Panel/User/ReConfirmEmail", { Email: inputValue }, function (obj) {
                if (obj.data.result) {
                    swal({
                        title: Localization.Success,
                        text: obj.data.message,
                        type: "success"
                    }, function () {
                    });

                } else {
                    swal({
                        title: Localization.Error,
                        text: obj.data.message,
                        type: "error"
                    }, function () {
                    });
                }
            });
        });
});