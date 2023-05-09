fetch("from/menu.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#menu").innerHTML += html;
  });
