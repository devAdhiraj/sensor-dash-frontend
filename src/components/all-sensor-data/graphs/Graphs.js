import TemplateGraph from "./TemplateGraph";
import classes from "./Graphs.module.css";
const Graphs = ({ data }) => {
  if(data.length === 0){
    return <div>Loading...</div>
  }
  else{
    return (
      <div className={classes.graphsContainer}>
      <TemplateGraph data={data} graphkey="temp" color="#12b05c" label="Temperature (°C)"/>
      <TemplateGraph data={data} graphkey="humid" color="#4287f5" label="Humidity (%)" />
      <TemplateGraph data={data} graphkey="light" color="#000" label="Light" />
    </div>
  );
}
};
export default Graphs;
