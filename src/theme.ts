import { createTheme } from '@material-ui/core/styles'


export const theme=() => createTheme({
  palette: {
    primary: {
      main: "#78c7a4",
    },
    secondary: {
      main: "#D4AF37",
    },
    error:{
      main: "#ff7d7d",
    },
    success: {
      main: "#50b64a"
    },
    warning:{
      main: "#F09623"
    },
  },
});
