import React from "react"; 
import { useState, useEffect, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import classes from "./LiveData.module.css";
import {MdRefresh} from "react-icons/md";
import Card from "../UI/Card";
import LiveTemp from "./LiveTemp";
import LiveHumidity from "./LiveHumidity";
import LiveLight from "./LiveLight";
import DataContext from "../store/DataContext";

const LiveData = () => {
  const context = useContext(DataContext);
  const [loading, setLoading] = useState(context.live_data === null ? true : false);
  
  useEffect(() => {
    if(!context.live_data){ 
      return fetchData()
    }
    return;
  }, []);

  const fetchData = async () => {
    try {
        await context.update_live_data()
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
        <LiveTemp temp={context.live_data.temp} />
        <LiveHumidity humidity={context.live_data.humidity} />
        <LiveLight light={context.live_data.light} />
        <span className={classes.break}></span>
        <div className={classes.time}>
          <span>
            Last Updated:{" "}
            {new Date(context.live_data.time).toLocaleDateString("en-US", {
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
