import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch component makes sure that only one route shows at any one time
        All routes go inside this component */}
          <Switch>
            jj
            {/* Determines path for home page of site 
          Nest home component inside so this shows when home route is requested*/}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            {/* Dynamic values just need a named parameter after colon to work */}
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// Video: https://www.youtube.com/watch?v=qtheqr0jgIQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=18
