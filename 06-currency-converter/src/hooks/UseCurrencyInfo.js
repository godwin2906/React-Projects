import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if(!currency){
        console.log("currency is required")
    }
    console.log(currency)
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
      .then((response) => {
        console.log(response); // Log the full response object
        console.log(response.data);
        let currencyVal = response.data;
        setData(currencyVal[currency]);
      })
      .catch((error) => {
        console.log(error, "unable to fetch the data");
      });
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
