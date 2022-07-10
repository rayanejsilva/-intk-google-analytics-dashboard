const propertyId = process.env.REACT_APP_PROPERTY_ID;
const url = `https://content-analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport?alt=json`;

class DataFetcher {
  constructor(accessToken, request) {
    this.accessToken = accessToken;
    this.request = request;

    this.options = {
      method: "POST",
      headers: { Authorization: "Bearer " + accessToken },
      body: request,
    };
  }

  async getData() {
    try {
      const response = await fetch(url, this.options);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default DataFetcher;
