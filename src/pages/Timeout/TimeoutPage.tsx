import { Box, Button } from "@material-ui/core";
import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

export const TimeoutPage = () => {
  return (
    <>
      <Box
        height="calc(100vh - 58px);"
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
            color='primary'
            onClick={() => {
              window.open("https://wa.me/34669510810");
            }}
          >
            Clica para suplicar más tiempo
          </Button>
        </Box>
      </Box>
      <div className="footer">Made with ♥ by your friends</div>
    </>
  );
};
