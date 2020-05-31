class Store {
  constructor() {
    this.city, (this.defaultCity = "Merida");
  }

  getLocation() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    return {
      city: this.city,
    };
  }

  setLocation(city) {
    localStorage("city", city);
  }
}

export default Store;
