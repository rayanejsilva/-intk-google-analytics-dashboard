import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import DataFetcher from "../components/DataFetcher";
import QueryReport from "../components/QueryReport";

const requestBody1 =
  '{"dimensions":[{"name":"date"}],"metrics":[{"name":"activeUsers"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}]}';
const requestBody2 =
  '{"dimensions":[{"name":"date"}],"metrics":[{"name":"activeUsers"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}]}';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const queryReport = new QueryReport(location.state.accessToken);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (data === "") {
      queryReport.getReformattedData().then((result) => setData(result));
    }
    /*if (data1 === "") {
      new DataFetcher(location.state.accessToken, requestBody1)
        .getData()
        .then((result) => setData1(result));
    }
    if (data2 === "") {
      new DataFetcher(location.state.accessToken, requestBody2)
        .getData()
        .then((result) => setData2(result));
    }*/
  });

  return (
    <div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      {/*{data1 !== "" && (
        <div>
          <div>
            <pre>{JSON.stringify(data1, null, 2)}</pre>
          </div>
          <div>
            <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>
        </div>
      )}*/}
    </div>
  );
};

export default Dashboard;
