import React from "react";
import { useEffect } from "react";
import { addMinutesToDate, LIMIT_MINUTES, setCookie } from "../../utils";
import { useHistory } from "react-router-dom";

export const ResetPage = () => {
  const history = useHistory();
  useEffect(() => {
    let limitTime = addMinutesToDate(new Date(), LIMIT_MINUTES)
    setCookie("limit", limitTime);
    setCookie("timer", new Date().getTime());
    history.push("/instructions");
  });
  return <div />;
};
