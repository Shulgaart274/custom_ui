import React from "react";
import Content from "./components/content/content";
import { Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <Switch>
      <div className="App">
        <Content />
      </div>
    </Switch>
  );
}

export default withRouter(App);
