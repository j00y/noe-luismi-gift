import React, { useEffect } from "react";
import "./App.css";
import { StepperPage } from "./pages/Stepper/StepperPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WelcomePage } from "./pages/Welcome/WelcomePage";
import { getCookie, setCookie } from "./utils";
import { TimeoutPage } from "./pages/Timeout/TimeoutPage";
import { ResetPage } from "./pages/Reset/ResetPage";

function App() {
  useEffect(() => {
    let timer = getCookie("timer");

    if (!!timer) {
      setInterval(() => {
        timer = getCookie("timer");
        if (timer !== "0") {
          setCookie("timer", JSON.stringify(parseInt(timer || "0") - 1));
        }
      }, 1000);
    }
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/instructions" component={StepperPage} />
        <Route path="/timeout"component={TimeoutPage} />
        <Route path="/reset"component={ResetPage} />
        <Route component={WelcomePage} />
      </Switch>
    </Router>
  );
}

export default App;
