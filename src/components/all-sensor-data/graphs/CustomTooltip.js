import React from "react"; 
import classes from "./CustomTooltip.module.css";
const CustomTooltip = ({ label, active, payload, dataLabel }) => {
  const dynamicUnit = (dataLabel) => {
    if(dataLabel === "temp"){
      return "°C"
    }
    else if(dataLabel === "humid"){
      return "%"
    }
    else{
      return null
    }
  }
  if (active && payload && payload.length) {

    return (
      <div className={`${classes.tooltipContainer} ${classes[dataLabel]}`}>
        <span className={classes.text}>
          {Number(payload[0].value).toFixed(1)}{dynamicUnit(dataLabel)}
        </span>
        <span>
          {new Date(label).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>
          {new Date(label).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
