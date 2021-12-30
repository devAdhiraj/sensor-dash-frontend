import React from "react"; 
import classes from "./Temp.module.css";
const Temp = ({ temp }) => {
  return (
    <div className={classes.tempContainer}>
      <figure className={classes.iconWrapper}>
        <img
          className={classes.tempIcon}
          src={temp > 15 ? "hot-icon.svg" : "cold-icon.svg"}
          alt="temp icon"
        />
      </figure>
      <div className={classes.textWrapper}>
        <span className={classes.label}>Temperature:</span>
        <span className={classes.data}>
          {temp ? Number(temp).toFixed(1) : "--"}°C
        </span>
      </div>
    </div>
  );
};

export default Temp;
