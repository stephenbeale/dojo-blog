import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

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
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 750);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {/* Blogs and works through conditional templating - 'logical and' from JS evaluates left side first, but if null, then evaluates right */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
