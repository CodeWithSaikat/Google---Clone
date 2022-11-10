import react, { useEffect, useState } from "react";
import API_KEY from "./keys.js";
const CONTEXT_KEY = "671c3760c0842e073";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const featchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    featchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
