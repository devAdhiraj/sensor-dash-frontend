import classes from "./LiveFeed.module.css";
import LiveData from "../components/live-sensor-data/LiveData";
import AllData from "../components/all-sensor-data/AllData";

const LiveFeed = () => {
  return (
    <article className={classes.main}>
      <LiveData />
      <AllData />
    </article>
  );
};
export default LiveFeed;
