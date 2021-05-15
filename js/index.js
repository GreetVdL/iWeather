import { Backend } from "./backend.js";

const API = new Backend();
API.setBaseUrl("http://api.weatherstack.com/");

const iconPlace = document.querySelector("#icon");
const descriptionPlace = document.querySelector("#description");
const degreesPlace = document.querySelector("#degrees");
const timePlace = document.querySelector("#time div");
const mapPlace = document.querySelector("#map img");

function getCurrentWeather() {
  API.get("current", "c8a206db47c092c065930d105c7de3ce", "Heist-op-den-Berg")
    .then((data) => {
      //   console.log(data);
      iconPlace.src = data.current.weather_icons[0];
      descriptionPlace.textContent = data.current.weather_descriptions[0];
      degreesPlace.textContent = `${data.current.temperature}°C`;
      timePlace.textContent = data.location.localtime;
    })
    .catch((err) => console.log(err));
}

function getMap() {
  mapPlace.src =
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/4.7283,51.0754,14.76,0/395x503?access_token=pk.eyJ1IjoiZ3JlZXR2ZGwiLCJhIjoiY2tsemx4bzZtMmw5djJxbXB2ZGJpdnZkNCJ9.S-laaAsfSwY9NbwEtcpGnA";
  //   fetch(
  //     "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/4.7283,51.0754,14.76,0/395x503?access_token=pk.eyJ1IjoiZ3JlZXR2ZGwiLCJhIjoiY2tsemx4bzZtMmw5djJxbXB2ZGJpdnZkNCJ9.S-laaAsfSwY9NbwEtcpGnA"
  //   )
  //     // .then((response) => {
  //     //   console.log(response);
  //     //   response.json();
  //     // })
  //     .then((data) => {
  //       console.log(data);
  //       mapPlace.src = data;
  //     })
  //     .catch((err) => console.log(err));
}

// function getForecastWeather() {
//   API.getForecast(
//     "forecast",
//     "c8a206db47c092c065930d105c7de3ce",
//     "Heist-op-den-Berg",
//     "5"
//   )
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// }

window.addEventListener("DOMContentLoaded", function () {
  getCurrentWeather();
  getMap();
});
