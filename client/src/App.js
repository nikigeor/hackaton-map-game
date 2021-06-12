import React from "react";
import "./App.css";
import Map from "./components/Map"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;