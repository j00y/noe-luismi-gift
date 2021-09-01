import React from "react";
import { useEffect } from "react";
import { setCookie } from "../../utils";
import { useHistory } from "react-router-dom";

export const ResetPage = () => {
  const history = useHistory();
  useEffect(() => {
    setCookie("timer", 4800);
    history.push("/instructions");
  });
  return <div />;
};
