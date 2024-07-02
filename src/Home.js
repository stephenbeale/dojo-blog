import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  //Will run every time there is a re-render
  useEffect(() => {
    //Then - fires a function once we have the data back
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {/* Blogs and works through conditional templating - 'logical and' from JS evaluates left side first, but if null, then evaluates right */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
