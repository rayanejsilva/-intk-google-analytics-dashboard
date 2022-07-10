import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QueryReport from "./QueryReport";
import Chart from "./Chart";

const requestUsers2021 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"ActiveUsers"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';
const requestUsers2022 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"ActiveUsers"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';

const requestSessions2021 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"Sessions"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';
const requestSessions2022 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"Sessions"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';

const SessionChart = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [data, setData] = useState("");
   const [dataActiveUsers, setDataActiveUsers] = useState("");
   const [reportRequested, setReport] = useState(false);

   useEffect(() => {
      //Check if we have an access token, otherwise return to home page (prevent 401 errors)
      if (location.state !== null && location.state.accessToken !== null) {
         //Prevents the request from triggered multiple times
         if (!reportRequested) {
            setReport(true);
            const queryReportUsers = new QueryReport(
               location.state.accessToken,
               requestUsers2021,
               requestUsers2022
            );
            queryReportUsers
               .getReformattedData()
               .then((result) => setData(result));
            const queryReportSessions = new QueryReport(
               location.state.accessToken,
               requestSessions2021,
               requestSessions2022
            );
            queryReportSessions
               .getReformattedData()
               .then((result) => setDataActiveUsers(result));
         }
      } else {
         navigate("/", { state: { accessToken: null } });
      }
   }, [location.state, reportRequested, navigate]);

   return (
      <div className="chart__section">
         <div className="chart__item">
            <Chart
               dataset={data.dataset}
               title="Users by Session"
               metricType="Active Users"
               code={data.status}
            />
         </div>
         <div className="chart__item">
            <Chart
               dataset={dataActiveUsers.dataset}
               title="Daily Sessions"
               metricType="Session"
               code={data.status}
            />
         </div>
      </div>
   );
};

export default SessionChart;
