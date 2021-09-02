import React, { useEffect, useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import { StepContent as StepContentInfo } from "../../components/StepContent/StepContent";
import { Box, TextField, Typography, useTheme } from "@material-ui/core";
import "./styles.css";
import {
  addHoursToDate,
  CORRECT_COMBINATION,
  getCookie,
  LIMIT_HOURS,
  LIMIT_MILISECONDS,
  setCookie,
} from "../../utils";
import { useHistory } from "react-router-dom";

const getStep = () => {
  return [
    "Empezamos",
    "Timing",
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

  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState({ valid: false, message: "" });

  const theme = useTheme();
  useEffect(() => {
    const timer = getCookie("timer");

    if (!!timer) {
      const diffTime = new Date().getTime() - parseInt(timer);
      if (diffTime >= LIMIT_MILISECONDS) {
        history.push("/timeout");
      }
    }
  }, []);

  const onTextfieldChange = (event: any) => {
    setValue(event.target.value);
  };

  const checkAnswer = () => {
    const timer = getCookie("timer");

    if (!!timer) {
      const diffTime = new Date().getTime() - parseInt(timer);
      if (diffTime >= LIMIT_MILISECONDS) {
        history.push("/timeout");
      }
    }
    setAnswer(
      value === CORRECT_COMBINATION
        ? { valid: true, message: "Correcto!" }
        : { valid: false, message: "Incorrecto. Prueba otra vez" }
    );
  };

  const handleNext = () => {
    const timer = getCookie("timer");

    if (!!timer) {
      const diffTime = new Date().getTime() - parseInt(timer);
      if (diffTime >= LIMIT_MILISECONDS) {
        history.push("/timeout");
      }
    }
    if (activeStep === 5 && !timer) {
      let limitTime = addHoursToDate(new Date(), LIMIT_HOURS);
      setCookie("limit", limitTime);
      setCookie("timer", new Date().getTime());
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="header">
        <Box display="flex" justifyContent="center" width="100%">
          <Box
            maxWidth="700px"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <div>Instrucciones</div>
            <Box color="black" fontSize="12px">
              <Box fontWeight="300">
                {!!getCookie("limit") && "Limit time:"}
              </Box>
              {getCookie("limit")?.split("GMT")[0]}
            </Box>
          </Box>
        </Box>
      </div>
      <Box display="flex" justifyContent="center" width="100%">
        <Box maxWidth="700px" width="100%">
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
          <Box padding="20px">
            <Typography>Has conseguido la combinación?</Typography>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <TextField
                  label="Respuesta"
                  onChange={(event) => onTextfieldChange(event)}
                />
                <Button onClick={() => checkAnswer()}>Check!</Button>
              </Box>
              <Box
                color={
                  answer.valid
                    ? theme.palette.primary.main
                    : theme.palette.error.main
                }
                padding="10px 0"
              >
                {answer.message}
              </Box>
              {answer.valid && (
                <Button
                  onClick={() => {
                    window.open(
                      "https://chat.whatsapp.com/FuCNho6C8V7KEeHvOLTvHq"
                    );
                  }}
                  color="primary"
                >
                  Cuéntanoslo
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <div className="footer">Made with ♥ by your friends</div>
    </>
  );
};
