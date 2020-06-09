import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/index";
import "./App.css";

import LandingPage from "./components/landing page/LandingPage.jsx";
import Playboard from "./components/playboard/Playboard.jsx";
import Success from "./components/result page/Success.jsx";
import Failed from "./components/result page/Failed.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <main className="main">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/playboard">
                <Playboard />
              </Route>
              <Route exact path="/failed">
                <Failed />
              </Route>
              <Route exact path="/success">
                <Success />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
