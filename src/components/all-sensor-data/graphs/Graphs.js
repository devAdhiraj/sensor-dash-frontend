import TemplateGraph from "./TemplateGraph";
import classes from "./Graphs.module.css";
const Graphs = ({ data }) => {
  return (
    <div className={classes.graphsContainer}>
      <TemplateGraph data={data} />
      <br />
      <TemplateGraph data={data} />
    </div>
  );
};
export default Graphs;
