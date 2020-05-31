async function fetchWeatherAPI(city, apiKey) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  console.log(data);
}

fetchWeatherAPI("Merida", "d24d014f7ad8373112e8cca15fef2894");
