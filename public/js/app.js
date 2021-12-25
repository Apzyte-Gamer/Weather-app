const weatherForm = document.querySelector("form");
const description = document.querySelector("#description");
const locationInput = document.querySelector("#location");
const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feelsLike");
const precip = document.querySelector("#precip");
const wind = document.querySelector("#wind");
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};

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

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = locationInput.value;
  description.textContent = "Loading...";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        description.textContent = data.error;
      } else {
        locationInput.value = data.location;
        description.textContent = data.forecast.description;
        temperature.textContent = `${data.forecast.temperature} °C`;
        feelsLike.textContent = `Feels Like: ${data.forecast.feelsLike} °C`;
        precip.textContent = `Precip: ${data.forecast.precip}%`;
        wind.textContent = `Wind Speed(${data.forecast.windDir}): ${data.forecast.wind}`;
      }
    });
  });
});
