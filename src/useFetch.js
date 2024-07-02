import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //Will run every time there is a re-render
  useEffect(() => {
    setTimeout(() => {
      //Then - fires a function once we have the data back
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 750);
  }, [url]);

  /*
  Return some values - here, an object with three values AKA properties in it
  This allows us to get these properties from the hook in future from elsewhere.
  */
  return { data, isPending, error };
};

//Means we can use this in other files and components.
export default useFetch;
