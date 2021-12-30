import React from "react"; 
import classes from "./LiveHumidity.module.css";

const LiveHumidity = ({ humidity }) => {
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
        <span className={classes.data}>{humidity ? humidity : "--"}%</span>
      </div>
    </div>
  );
};

export default LiveHumidity;
