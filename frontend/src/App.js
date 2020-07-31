import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "modules/nav";
import Home from "routes/home";
import Crud from "routes/crud";
import Layout from "routes/layout";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/crud">
          <Crud />
        </Route>
        <Route path="/layout">
          <Layout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
