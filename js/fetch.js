$(document).ready(function () {
  $.ajax({
    url: "from/menu.html",
    success: function (response) {
      $("#menu").html(response);
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "from/story.html",
    success: function (response) {
      $("#story").html(response);
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "from/maincontent.html",
    success: function (response) {
      $("#maincontent").html(response);
    },
  });
});
