import React from "react"; 
import classes from "./Light.module.css";
import {
  MdBrightnessHigh,
  MdBrightnessLow,
  MdBrightnessMedium,
} from "react-icons/md";

const Light = ({ light }) => {
  const _renderIcon = () => {
    if (light < 100) {
      return <MdBrightnessLow className={classes.lightIcon} />;
    } else if (light < 230) {
      return <MdBrightnessMedium className={classes.lightIcon} />;
    } else {
      return <MdBrightnessHigh className={classes.lightIcon} />;
    }
  };

  return (
    <div className={classes.lightContainer}>
      <figure className={classes.lightIcon}>{_renderIcon()}</figure>
      <div className={classes.textWrapper}>
        <span className={classes.label}>Light:</span>
        <span className={classes.data}>
          {light ? ("0000" + Number(light).toFixed(0)).slice(-3) : "--"}
        </span>
      </div>
    </div>
  );
};

export default Light;
