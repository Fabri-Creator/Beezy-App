import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={`/detail/id:${"id"}`}>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
