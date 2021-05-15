export class Backend {
  constructor() {
    this.baseUrl = "";
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  get(endpoint, key, query) {
    return fetch(
      this.baseUrl + endpoint + "?access_key=" + key + "&query=" + query
    ).then((response) => response.json());
  }

  //   getForecast(endpoint, key, query, days) {
  //     return fetch(
  //       this.baseUrl +
  //         endpoint +
  //         "?access_key=" +
  //         key +
  //         "&query=" +
  //         query +
  //         "&forecast_days=" +
  //         days
  //     ).then((response) => response.json());
  //   }

  post(endpoint, data = {}) {
    return fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }
}
