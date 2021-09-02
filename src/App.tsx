import React, { useEffect } from "react";
import "./App.css";
import { StepperPage } from "./pages/Stepper/StepperPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WelcomePage } from "./pages/Welcome/WelcomePage";
import { TimeoutPage } from "./pages/Timeout/TimeoutPage";
import { ResetPage } from "./pages/Reset/ResetPage";

function App() {
  useEffect(() => {
    console.log('%c No seais cabrones ', ' color: red; font-size:20px;');
    console.log('%c Aqui no hay nada que ver ', ' color: red; font-size:16px;');
  }, [])

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
