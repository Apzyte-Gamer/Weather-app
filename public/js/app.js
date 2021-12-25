const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});
