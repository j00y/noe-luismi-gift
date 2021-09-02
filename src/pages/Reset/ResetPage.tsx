import React from "react";
import { useEffect } from "react";
import { addHoursToDate, LIMIT_HOURS, setCookie } from "../../utils";
import { useHistory } from "react-router-dom";

export const ResetPage = () => {
  const history = useHistory();
  useEffect(() => {
    let limitTime = addHoursToDate(new Date(), LIMIT_HOURS)
    setCookie("limit", limitTime);
    setCookie("timer", new Date().getTime());
    history.push("/instructions");
  });
  return <div />;
};
