import FetchData from './components/FetchData';
import { useState } from "react";

const QueryReport = () => {
const requestBody1 = '{"dimensions":[{"name":"date"}],"metrics":[{"name":"activeUsers"}],"dateRanges":[{"startDate":"2021-01-01","endDate":"2021-12-31"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}]}';
const requestBody2= '{"dimensions":[{"name":"date"}],"metrics":[{"name":"activeUsers"}],"dateRanges":[{"startDate":"2022-01-01","endDate":"yesterday"}],"orderBys":[{"dimension":{"orderType":"ALPHANUMERIC","dimensionName":"date"}}]}'
const [accessToken, setAccessToken] = useState('');
const [data, setData] = useState('');
const [data2, setData2] = useState('');
const returnAPIData = (values) => {
    setData(values);
    console.log(values);
  }

const returnAPIData2 = (values) => {
    setData2(values);
    console.log(values);
}
return (
  <div>
  {accessToken &&
        <div>
          <FetchData childToParent={returnAPIData} accessToken={accessToken} requestBody={requestBody1} />
          <FetchData childToParent={returnAPIData2} accessToken={accessToken} requestBody={requestBody2} />
        </div>
      }
            </div>)

}

export default QueryReport;