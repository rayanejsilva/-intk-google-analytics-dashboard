import DataFetcher from "../utils/DataFetcher";

//Definition of the 2 reports
class QueryReport {
   constructor(accessToken, request1, request2) {
      this.data1 = new DataFetcher(accessToken, request1).getData();
      this.data2 = new DataFetcher(accessToken, request2).getData();
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

   formatToEcharts(data, year) {
      return data.rows.map((day) => [
         this.convertToDayMonth(day.dimensionValues[0].value), //Convert to desired X-Axis format
         parseInt(day.metricValues[0].value),
         year,
      ]);
   }

   convertToDayMonth(yearmonthday) {
      let dayMonth = "";
      dayMonth = yearmonthday.substring(4); //Remove the year
      if (dayMonth.length < 4) {
         dayMonth = "0" + dayMonth;
      }

      dayMonth = dayMonth.substring(2, 4) + "/" + dayMonth.substring(0, 2);

      return dayMonth;
   }

   reformatData(data1, data2) {
      //Make sure nothing went wrong during the data fetching, otherwise return error
      if (data1.error !== undefined) {
         return { status: data1.error.code };
      } else if (data2.error !== undefined) {
         return { status: data2.error.code };
      }

      const firstRow = [["Date", "Value", "Year"]];
      //Reformatting the data into the echarts dataset format
      const reformatted1 = this.formatToEcharts(data1, 2021);
      const reformatted2 = this.formatToEcharts(data2, 2022);

      //merging all data together
      const dataset = [...firstRow, ...reformatted1, ...reformatted2];

      const output = {
         status: 200,
         dataset: dataset,
      };

      return output;
   }
}

export default QueryReport;
