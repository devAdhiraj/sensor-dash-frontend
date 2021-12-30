import React from "react"; 
import { useContext, useEffect } from "react";
import DataList from "./data-list/DataList";
import Graphs from "./graphs/Graphs";
import DataContext from "../store/DataContext";
const AllData = () => {
  const context = useContext(DataContext);

  useEffect(() => {
    if((!context.data_list.length || context.data_list.length === 0) && context.no_data === false){
      return context.update_data();
    }
  }, [context]);

  return (
    <section>
      <Graphs data={context.graph_data} />
      <DataList data={context.data_list} />
    </section>
  );
};
export default AllData;
