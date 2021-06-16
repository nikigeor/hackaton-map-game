import React from "react";
import "./App.css";
import Map from "./components/Map"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import Ending from "./components/Ending"
import GameOne from './components/Game1/Game1'
import GameTwo from './components/Game2'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/map0">
            <Map  coordinates= {[51.044270, -114.062019]} index= {0}/>
          </Route>
          <Route path="/map1">
            <Map  coordinates= {[53.522778, -113.623055]} index= {1}/>
          </Route>
          <Route path="/game1">
            <GameOne />
          </Route>
          <Route path="/game2">
            <GameTwo />
          </Route>
          {/* <Route path="/welcome">
            <Welcome />
          </Route> */}
          <Route path="/ending">
            <Ending/>
          </Route>
          <Route path="/">
            <Welcome/>
        
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;