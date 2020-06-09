import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/index";
// import logo from "./logo.svg";
import "./App.css";

import LandingPage from "./components/landing page/LandingPage.jsx";
import Playboard from "./components/playboard/Playboard.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          </header>
          <main className="main">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/playboard">
                <Playboard />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
