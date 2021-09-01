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
          `A continuación podreis encontrar las reglas del juego`
        );
      case 1:
        return typographycInfo(
          `Tendreis 2 horas para completar el desafio y así obtener vuestro premio. Si os excedeis del tiempo debereis suplicar una prorroga. Nosotros creemos que sois capaces, esperemos que no os retrateis.`
        );
      case 2:
        return typographycInfo(
          "Como podeis ver, teneis diez tarjetas, una <>spec<> y una caja fuerte."
        );
      case 3:
        return typographycInfo(
          `Utilizando dichos objetos, debeis ser capaces de encontrar las 8 cifras en su correcto orden para poder conseguir la recompensa`
        );
      case 4:
        return typographycInfo(
          `Habeis probado a leer alguna de las tarjetas? Cuanta basura no? A continuación tendreis unas preguntas. Si respondeis correctamente os diremos en que posición de memoria debeis apuntar`
        );
      case 5:
        return typographycInfo(
          `A partir de este punto se activará el temporizador`
        );
      case 6:
        return getQuestion("En qué año se fundó G+D?");
      case 7:
        return getQuestion("Cuantas plazas tiene el coche que quiere Luismi?");
      case 8:
        return getQuestion("Quien fué el portero obsesionado con el Quidditch de Gryffindor entre el 1987 y 1994?");
      case 9:
        return getQuestion("Quien ha diseñado esta web?");
      case 10:
        return getQuestion("Cuál es el video de youtube más visto en el año de vuestra pedida?");
      case 11:
        return getQuestion("Delantero indispensable para luchar un campeonato de Comunio");
      case 12:
        return getQuestion("A qué animales grabaron para simular el rugido de los raptores en Jurassic Park?");
      case 13:
        return getQuestion("Cuál es la película que estábais viendo cuando os disteis el primer beso?");
      case 14:
        return getQuestion("Con qué 4 carácteres diríais que todo va bien?");
      default:
        return typographycInfo("Unknown step");
    }
  };

  return getStepContent(props.step);
};
