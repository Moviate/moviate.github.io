$(document).ready(function () {
	$.ajax({
		url: "from/menu.html",
		success: function (response) {
			$("#menu").html(response);
		}
	});
  });
  