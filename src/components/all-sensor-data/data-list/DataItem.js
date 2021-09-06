import classes from "./DataItem.module.css";
import Card from "../../UI/Card";
import Temp from "./Temp";
import Humidity from "./Humidity";
import Light from "./Light";

const DataItem = ({ temp, humidity, light, time }) => {
  return (
    <section className={classes.container}>
      <Card className={classes.wrapper}>
        <Temp temp={temp} />
        <Humidity humidity={humidity} />
        <Light light={light} />
        <div className={classes.time}>
          <span>
            {new Date(time).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <br />
          <span>
            {new Date(time).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </Card>
    </section>
  );
};

export default DataItem;
