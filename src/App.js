import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";

import Home from "./Pages/Home";
import Details from "./Pages/Details";
import firebaseConfig from "./Configuration/Config";

import "./App.scss";

firebase.initializeApp(firebaseConfig);

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
