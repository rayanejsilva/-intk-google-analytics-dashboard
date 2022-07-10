import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QueryReport from "../components/QueryReport";
import Chart from "../components/Chart";
import clock from "../assets/clock.svg";

const request1 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"ActiveUsers"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';
const request2 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"ActiveUsers"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';

const request3 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"Sessions"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';
const request4 =
   '{"dimensions":[{"name":"date"}],"metrics":[{"name":"Sessions"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}],"keepEmptyRows":true}';

const Dashboard = () => {
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
            const queryReport = new QueryReport(
               location.state.accessToken,
               request1,
               request2
            );
            queryReport.getReformattedData().then((result) => setData(result));
            const queryReport2 = new QueryReport(
               location.state.accessToken,
               request3,
               request4
            );
            queryReport2
               .getReformattedData()
               .then((result) => setDataActiveUsers(result));
         }
      } else {
         navigate("/", { state: { accessToken: null } });
      }
   }, []);

   function returnChart() {
      return (
         <div>
            {/*<section className="dashboard__section"> //Renders them side by side*/}
            {data.dataset !== undefined && (
               <Chart
                  dataset={data.dataset}
                  title="Users by Session"
                  metricType="Active Users"
               />
            )}
            {dataActiveUsers.dataset !== undefined && (
               <Chart
                  dataset={dataActiveUsers.dataset}
                  title="Daily Sessions"
                  metricType="Session"
               />
            )}
            {/*</section>*/}
         </div>
      );
   }

   function returnNoData(code) {
      if (code !== undefined) {
         console.log("Code Received: ", code);
         if (code === 409) {
            return (
               <p>
                  Whoopsie we executed too many requests, lets go for a
                  coffee...
               </p>
            );
         } else if (code === 401) {
            navigate("/", { state: { accessToken: null } });
            return <p>We don't have permissions, no access code?</p>;
         }
      }
      return (
         <section className="dashboard__section">
            <div className="dashboard__section--img">
               <img
                  src={clock}
                  className="dashboard__img--svg"
                  alt="dashboard"
               ></img>
            </div>
            <div className="dashboard__text--header">
               <div className="underline"></div>
               <h1>Loading data...</h1>
               <p>We are processing the data, please hold on!.</p>
            </div>
         </section>
      );
   }

   return (
      <div className="dashboard__page">
         <div className="dashboard__wrapper">
            {
               data.status === 200
                  ? returnChart() //We can return the chart component
                  : returnNoData(data.status) //In case we didn't receive data, return an error or a loader
            }
         </div>
      </div>
   );
};

export default Dashboard;
