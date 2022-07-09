import DataFetcher from "./DataFetcher";

//Definition of the 2 reports
const request1 =
  '{"dimensions":[{"name":"date"}],"metrics":[{"name":"activeUsers"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}]}';
const request2 =
  '{"dimensions":[{"name":"date"}],"metrics":[{"name":"activeUsers"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}]}';

class QueryReport {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.data1 = new DataFetcher(this.accessToken, request1).getData();
    this.data2 = new DataFetcher(this.accessToken, request2).getData();
  }

  async getData() {
    try {
      return {
        data1: await this.data1,
        data2: await this.data2,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getReformattedData() {
    try {
      const data1 = await this.data1;
      const data2 = await this.data2;

      return this.reformatData(data1, data2);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  reformatData(rawData1, rawData2) {
    const output = {
      value1: rawData1.error.code,
      value2: rawData2.error.code,
    };

    return output;
  }
}

export default QueryReport;
