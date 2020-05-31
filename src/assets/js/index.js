import Ui from "./ui";
import Store from "./store";
import Weather from "./weather";

const store = new Store();
const city = store.getLocation();
const weather = new Weather(city);
const ui = new Ui();

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.querySelector("#city").value;
  weather.setLocation(city);
  store.setLocation(city);
  fetchWeather();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
