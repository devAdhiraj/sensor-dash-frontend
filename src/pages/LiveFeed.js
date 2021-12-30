import React from "react"; 
import classes from "./LiveFeed.module.css";
import LiveData from "../components/live-sensor-data/LiveData";
import AllData from "../components/all-sensor-data/AllData";
import Query from "../components/query-form/Query";

const LiveFeed = () => {
  return (
    <article className={classes.main}>
          <LiveData />
          <Query />
          <AllData />
    </article>
  );
};
export default LiveFeed;
