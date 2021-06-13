import React from "react";
import "./App.css";
import Map from "./components/Map"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import Ending from "./components/Ending"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/welcome">
            <Welcome />
            </Route>
            <Route path="/ending">
            <Ending/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;