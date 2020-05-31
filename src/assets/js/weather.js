class Weather {
  constructor(city) {
    this.city = city;
    this.countryCode = "MX";
    this.apiKey = "d24d014f7ad8373112e8cca15fef2894";
  }
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`
    );
    const data = await response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }
}

export default Weather;
