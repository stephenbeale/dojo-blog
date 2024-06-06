import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "luigi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 3,
    },
  ]);

  //Remove any blogs from the array that DO NOT match the given id, i.e. only leaving blogs with matching id in to be deleted.
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //Will run every time there is a re-render
  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
