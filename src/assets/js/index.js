import Ui from "./ui";
import Store from "./store";
import Weather from "./weather";

const store = new Store();
const city = store.getLocation();
const weather = new Weather(city);
const ui = new Ui();

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

fetchWeather();
