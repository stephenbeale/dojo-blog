import BlogList from "./bloglist";
import useFetch from "./useFetch";
//Branch forgotten for video 24!

const Home = () => {
  //Introduce custom hook, pass in the endpoint. Handles errors if there are any, too.
  const {
    //Custom renaming of data property
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {/* Blogs && works through conditional templating - 'logical and' from JS evaluates left side first, but if null, then evaluates right */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

//Continue here: https://youtu.be/aZGzwEjZrXc?si=b6ZzazGMLzLObq2x&t=97
