import ReactEcharts from "echarts-for-react";
//Chart style
const style = {
   height: "50vh",
   width: "95%",
   paddingTop: "10px",
   margin: "auto",
};

const Chart = (props) => {
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
         },
         {
            type: "line",
            datasetId: "dataset_2022",
            name: "Year 2022",
            encode: {
               x: "Date",
               y: "Value",
            },
         },
      ],
   };

   return (
      <div>
         <ReactEcharts option={option} style={style} />
      </div>
   );
};

export default Chart;
