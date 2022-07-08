import { useEffect } from "react";

const FetchData = (childToParent, accessToken, requestBody) => {
  useEffect(() => {
    const propertyId = process.env.REACT_APP_PROPERTY_ID;

    const bodyData = requestBody;
    const url = `https://content-analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport?alt=json`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + accessToken },
        body: bodyData
    };

    fetch(url, requestOptions).then(response => response.text())
        .then(data => childToParent(data));
}, []);}

export default FetchData;