import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {


    return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {/* Blogs and works through conditional templating - 'logical and' from JS evaluates left side first, but if null, then evaluates right */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
