import classes from "./LiveFeed.module.css";
import LiveData from "../components/live-sensor-data/LiveData";
import AllData from "../components/all-sensor-data/AllData";

const LiveFeed = () => {
  return (
    <artice className={classes.main}>
      <LiveData />
      <AllData />
    </artice>
  );
};
export default LiveFeed;
