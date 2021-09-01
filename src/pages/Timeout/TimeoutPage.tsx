import { Box, Button } from "@material-ui/core";
import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

export const TimeoutPage = () => {
  return (
    <>
      <Box
        height="80vh"
        width="100%"
        display="flex"
        flexDirection="column"
        padding="20px"
        boxSizing="border-box"
        justifyContent="center"
      >
        <Box marginLeft="8px" marginBottom="6px">
          <ErrorIcon fontSize="large" />
        </Box>
        <Box fontSize="20px" fontWeight={600} lineHeight={1} marginLeft="8px">
          Tiempo excedido.
        </Box>
        <Box marginBottom="20px" width="100%">
          <Button
            variant="text"
            onClick={() => {
              window.open("mailto:test@example.com");
            }}
          >
            Contacta para suplicar más tiempo
          </Button>
        </Box>
      </Box>
    </>
  );
};
