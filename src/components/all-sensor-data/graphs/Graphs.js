import React from "react"; 
import TemplateGraph from "./TemplateGraph";
import classes from "./Graphs.module.css";
const Graphs = ({ data }) => {
  if(data.length === undefined || data.length === 0){
    return <div>No Data</div>
  }
  else{
    const graph_data = [...data].sort((a, b) => (a.updatedAt > b.updatedAt) ? 1 : -1);
    return (
      <div className={classes.graphsContainer}>
      <TemplateGraph data={graph_data} graphkey="temp" color="#12b05c" label="Temperature (°C)"/>
      <TemplateGraph data ={graph_data} graphkey="humid" color="#4287f5" label="Humidity (%)" />
      <TemplateGraph data = {graph_data} graphkey="light" color="#000" label="Light" />
    </div>
  );
}
};
export default Graphs;
