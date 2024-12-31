function SetCardOverlay(_card) {
  $(_card).block({
    message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
    overlayCSS: {
      backgroundColor:
        //   IsDarkTheme ? "#40457b" : "#fff",
        false ? "#40457b" : "#fff",
      borderRadius: 30,
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });
}

function RemoveCardOverlay(_card) {
  $(_card).unblock();
}
