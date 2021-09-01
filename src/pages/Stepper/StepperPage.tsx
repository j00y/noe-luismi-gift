import React, { useEffect, useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import { StepContent as StepContentInfo } from "../../components/StepContent/StepContent";
import { Box } from "@material-ui/core";
import "./styles.css";
import { getCookie, setCookie } from "../../utils";
import { setInterval } from "timers";
import { useHistory } from "react-router-dom";

const getStep = () => {
  return [
    "Empezamos",
    "Timming",
    "Material",
    "Objetivo",
    "Información",
    "Preparados?",
    "Tarjeta 1",
    "Tarjeta 2",
    "Tarjeta 3",
    "Tarjeta 4",
    "Tarjeta 5",
    "Tarjeta 6",
    "Tarjeta 7",
    "Tarjeta 8",
    "Para acabar ...",
  ];
};

export const StepperPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getStep();
  const history = useHistory();
  useEffect(() => {
    if (getCookie("timer") === "0") {
      history.push("/timeout");
    }
  }, []);
  const handleNext = () => {
    
    let timer = getCookie("timer");
    if(timer === '0'){
      history.push('/timeout')
    }
    if (activeStep === 5 && !timer) {
      setCookie("timer", "4800");
      setInterval(() => {
        timer = getCookie("timer");
        if (timer || timer === "0") {
          setCookie("timer", parseInt(timer) - 1);
        }
      }, 1000);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="header">Instrucciones</div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <StepContentInfo step={activeStep} />
              <div>
                <Box display="flex" justifyContent="flex-end">
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    disabled={activeStep === steps.length - 1}
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === 5 ? "Empezar" : "Next"}
                  </Button>
                </Box>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <div className="footer">Made with ♥ by your friends</div>
    </>
  );
};
