import React from "react";
import "./App.css";
import Map from "./components/Map"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import GameOne from './components/Game1'
import GameTwo from './components/Game2'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/game1">
            <GameOne />
          </Route>
          <Route path="/game2">
            <GameTwo />
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