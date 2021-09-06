import classes from "./CustomTooltip.module.css";
const CustomTooltip = ({ label, active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={classes.tooltipContainer}>
        <span className={classes.temp}>
          {Number(payload[0].value).toFixed(1)}°C
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
