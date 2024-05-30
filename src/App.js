import "./App.css";

function App() {
  const title = "Welcome to the new blog!";
  const likes = 50;
  const person = { name: "yoshi", age: 30 };
  const link = "https://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <p>Liked {likes} times</p>

        {/* <p>{person}</p> */}
        <p>{" hello ninjas "}</p>
        <p>"Array: {[1, 2, 3, 4, 5]}"</p>
        <p>"Random number: {Math.random() * 10}"</p>

        <p>
          Dynamic values link:
          <a href="link">Google</a>
        </p>
      </div>
    </div>
  );
}

export default App;
