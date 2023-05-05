document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("check");
  var image = document.getElementById("img-menu");

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      image.src = "/img/cross.svg"; // Replace with the checked image source
    } else {
      image.src = "/img/menu.svg"; // Replace with the unchecked image source
    }
  });
});
