import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //Will run every time there is a re-render
  useEffect(() => {
    //Then - fires a function once we have the data back
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
    }, 750);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {/* Blogs && works through conditional templating - 'logical and' from JS
      evaluates left side first, but if null, then evaluates right */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
