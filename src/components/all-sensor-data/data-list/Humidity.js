import React from "react"; 
import classes from "./Humidity.module.css";
const Humidity = ({ humidity }) => {
  return (
    <div className={classes.humidityContainer}>
      <figure className={classes.iconWrapper}>
        <img
          className={classes.humidityIcon}
          src="humidity-icon.png"
          alt="humidity icon"
        />
      </figure>
      <div className={classes.textWrapper}>
        <span className={classes.label}>Humidity:</span>
        <span className={classes.data}>
          {humidity ? Number(humidity).toFixed(1) : "--"}%
        </span>
      </div>
    </div>
  );
};

export default Humidity;
