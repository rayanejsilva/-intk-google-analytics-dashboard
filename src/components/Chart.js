import ReactEcharts from "echarts-for-react";
import NoData from "./NoData";
//Chart style
const style = {
   height: "50vh",
   width: "95%",
   paddingTop: "20px",
   margin: "auto",
};

const Chart = (props) => {
   console.log("hello Chart");
   const option = {
      dataset: [
         {
            id: "raw_dataset",
            source: props.dataset,
         },
         {
            id: "dataset_2021",
            fromDatasetId: "raw_dataset",
            transform: {
               type: "filter",
               config: {
                  dimension: "Year",
                  "=": 2021,
               },
            },
         },
         {
            id: "dataset_2022",
            fromDatasetId: "raw_dataset",
            transform: {
               type: "filter",
               config: {
                  dimension: "Year",
                  "=": 2022,
               },
            },
         },
      ],
      title: {
         text: props.title,
         left: "center",
      },
      tooltip: {
         trigger: "axis",
      },
      legend: {
         // Try 'horizontal'
         orient: "vertical",
         right: 10,
         top: "center",
      },
      xAxis: {
         type: "category",
         nameLocation: "middle",
      },
      yAxis: {
         type: "value",
         name: props.metricType,
      },
      series: [
         {
            type: "line",
            datasetId: "dataset_2021",
            name: "Year 2021",
            encode: {
               x: "Date",
               y: "Value",
            },
            color: "#8AB3f4",
         },
         {
            type: "line",
            datasetId: "dataset_2022",
            name: "Year 2022",
            encode: {
               x: "Date",
               y: "Value",
            },
            color: "#ED7878",
         },
      ],
   };

   return (
      <div>
         {props.code === 200 && props.dataset !== undefined ? (
            <ReactEcharts option={option} style={style} />
         ) : (
            <NoData code={props.code} /> //In case we didn't receive data, return an error or a loader
         )}
      </div>
   );
};

export default Chart;
