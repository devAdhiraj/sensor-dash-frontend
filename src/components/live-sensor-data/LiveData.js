import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import classes from "./LiveData.module.css";
import {MdRefresh} from "react-icons/md";
import Card from "../UI/Card";
import LiveTemp from "./LiveTemp";
import LiveHumidity from "./LiveHumidity";
import LiveLight from "./LiveLight";

const LiveData = () => {
  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    return fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://ad-sensor-dash.herokuapp.com/api/sensors/last"
      );
      const { temp, humid, light, createdAt } = await resp.json();
      await setCurrentData({
        temp: temp,
        humidity: humid,
        light: light,
        time: createdAt,
      });
      await setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className={classes.loading}>
        <Spinner animation="grow" variant="primary" />
      </div>
    );
  }
  
  return (
    <section className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.heading}>Live Feed</h1>
        <button className={classes.refreshButton} onClick={() => {
          setLoading(true);
          setTimeout(()=> {
            setLoading(false)
          }, 200);

          return fetchData()
          
          }}>
        <MdRefresh className={classes.refresh}/>
        </button>
      </div>

      <Card className={classes.wrapper}>
        <LiveTemp temp={currentData.temp} />
        <LiveHumidity humidity={currentData.humidity} />
        <LiveLight light={currentData.light} />
        <span className={classes.break}></span>
        <div className={classes.time}>
          <span>
            Last Updated:{" "}
            {new Date(currentData.time).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </Card>
    </section>
  );
};

export default LiveData;
