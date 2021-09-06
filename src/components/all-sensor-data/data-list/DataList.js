import classes from "./DataList.module.css";
import DataItem from "./DataItem";
const DataList = ({ data }) => {
  if (!data.length) {
    return <section>Loading...</section>;
  }
  return (
    <section className={classes.listContainer}>
      <h1>Past Data</h1>
      <ul className={classes.list}>
        {data.map(({ temp, humid, light, createdAt, _id }) => {
          return (
            <li className={classes.listItem} key={_id}>
              <DataItem
                temp={temp}
                humidity={humid}
                light={light}
                time={createdAt}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DataList;
