import { useState, useEffect } from "react";

const useFetch = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //Will run every time there is a re-render
  useEffect(() => {
    setTimeout(() => {
      //Then - fires a function once we have the data back
      fetch("http://localhost:8000/blogss")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 750);
  }, []);
};
