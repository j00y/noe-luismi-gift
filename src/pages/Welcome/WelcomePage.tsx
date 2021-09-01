import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import logo from "../../logo_boda.png";
import './styles.css';

export const WelcomePage = () => {
  const history = useHistory();

  return (
    <>
    <Box display='flex' justifyContent='center' width='100%'>
      <Box
        height="80vh"
        width="100%"
        display="flex"
        flexDirection="column"
        padding="20px"
        boxSizing="border-box"
        justifyContent="center"
        maxWidth='500px'
      >
        <Box marginBottom="20px">
          <img src={logo} className='logo'/>
        </Box>
        <Box fontSize='20px' fontWeight={600} lineHeight={1}> 
          Queremos que juguéis con nostros un poco.
        </Box>
        <Box marginBottom="20px" width="100%">
          <Typography variant="subtitle1">Os atreveis?</Typography>
        </Box>

        <Button variant="contained" color="primary" onClick={()=>{history.push('/instructions')}}>
          Vamos allá!
        </Button>
      </Box>
      </Box>
    </>
  );
};
