import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useState } from "react";
import { StepContentProps } from "./StepContentProps";
import { getCorrectAnswer } from "../../utils";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LockIcon from "@material-ui/icons/Lock";
import DescriptionIcon from "@material-ui/icons/Description";

export const StepContent = (props: StepContentProps) => {
  const typographycInfo = (data: string) => <Typography>{data}</Typography>;
  const [answer, setAnswer] = useState<any>({ valid: false, response: "" });
  const [value, setValue] = useState("");
  const theme = useTheme();
  const onTextfieldChange = (event: any) => {
    setValue(event.target.value);
  };

  const checkAnswer = (step: number) => {
    setAnswer(getCorrectAnswer(step, value.toLowerCase()));
  };

  const getQuestion = (question: string) => {
    return (
      <Box display="flex" flexDirection="column" alignItems="start">
        {typographycInfo(question)}
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
          <Button onClick={() => checkAnswer(props.step)}>Check!</Button>
        </Box>
        <Box
          color={
            answer.valid ? theme.palette.primary.main : theme.palette.error.main
          }
          padding="10px 0"
          fontWeight={answer.valid ? 600 : 400}
        >
          {answer.response}
        </Box>
      </Box>
    );
  };
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return typographycInfo(
          `A continuación podréis encontrar las reglas del juego`
        );
      case 1:
        return (
          <>
            {typographycInfo(
              `Tendréis 2 horas para completar el desafío y así obtener vuestro premio.`
            )}
            {typographycInfo(
              `Si os excedéis del tiempo deberéis suplicar una prórroga.`
            )}
            {typographycInfo(
              `Nosotros creemos que sois capaces, esperemos que no os retratéis.`
            )}
          </>
        );
      case 2:
        return (
          <>
            {typographycInfo(`Como podéis ver, tenéis:`)}
            <Box display="flex" alignItems="center">
              <CreditCardIcon fontSize="small" />
              <div className="item">{typographycInfo(`x 10`)}</div>
            </Box>
            <Box display="flex" alignItems="center">
              <LockIcon fontSize="small" />
              <div className="item">{typographycInfo(` x 1`)}</div>
            </Box>
            <Box display="flex" alignItems="center">
              <DescriptionIcon fontSize="small" />
              <div className="item">{typographycInfo(` x 1`)}</div>
              <a href="google.com" className="spec-link">
                Download specification
              </a>
            </Box>
          </>
        );

      case 3:
        return typographycInfo(
          `Utilizando dichos objetos, debéis ser capaces de encontrar las 8 cifras en su correcto orden para poder conseguir la recompensa`
        );
      case 4:
        return (
          <>
            {typographycInfo(`¿Habeis probado a leer alguna de las tarjetas?`)}
            {typographycInfo(`¿Cuanta basura no?`)}
            {typographycInfo(
              `A continuación tendréis unas preguntas. Si respondéis correctamente os diremos en que posición de memoria debéis apuntar`
            )}
          </>
        );

      case 5:
        return typographycInfo(
          `A partir de este punto se activará el temporizador`
        );
      case 6:
        return getQuestion("¿En qué año se fundó G+D?");
      case 7:
        return getQuestion("¿Cuantas plazas tiene el coche que quiere Luismi?");
      case 8:
        return getQuestion(
          "¿Quien fué el portero obsesionado con el Quidditch de Gryffindor entre el 1987 y 1994?"
        );
      case 9:
        return getQuestion("¿Quien ha diseñado esta web?");
      case 10:
        return getQuestion(
          "¿Cuál es el video de youtube más visto en el año de vuestra pedida?"
        );
      case 11:
        return getQuestion(
          "Jugador profesional que se dedica a trolear a empleados de G+D"
        );
      case 12:
        return getQuestion(
          "¿A qué animales grabaron para simular el rugido de los raptores en Jurassic Park?"
        );
      case 13:
        return getQuestion(
          "¿Cuál es la película que estábais viendo cuando os disteis el primer beso?"
        );
      case 14:
        return getQuestion("¿Con qué 4 carácteres diríais que todo va bien?");
      default:
        return typographycInfo("Unknown step");
    }
  };

  return getStepContent(props.step);
};
