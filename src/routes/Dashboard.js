import React from 'react';
import ReactEcharts from "echarts-for-react";
import {useLocation} from 'react-router-dom';


//Chart style
const style = {
    height: "90vh",
    width: "95%",
    paddingTop: '10px',
    margin: 'auto',
};

//Chart options
let option = {
    title: {
        text: 'Stacked Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['2021', '2022']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['01-Jan', '02-Jan', '03-Jan', '04-Jan', '05-Jan', '06-Jan', '07-Jan', '08-Jan']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '2021',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320, 1, 2, 3, 4]
        },
        {
            name: '2022',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901,]
        }
    ]
};



const Dashboard = () => {
    const location = useLocation();
   
    return (
        <div>
            {location.state.accessToken}
            <ReactEcharts option={option} style={style} className="pie-chart" />
        </div>
    )

}

export default Dashboard;