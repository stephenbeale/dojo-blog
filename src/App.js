import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch component makes sure that only one route shows at any one time
        All routes go inside this component */}
          <Switch>
            {/* Determines path for home page of site 
          Nest home component inside so this shows when home route is requested*/}
            <Route path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// Video: https://www.youtube.com/watch?v=qtheqr0jgIQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=18
