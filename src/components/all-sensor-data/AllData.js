import { useState, useEffect } from "react";
import DataList from "./data-list/DataList";
import Graphs from "./graphs/Graphs";
const AllData = () => {
  const [dataList, setDataList] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(
      "https://ad-sensor-dash.herokuapp.com/api/sensors"
    );
    const data = await resp.json();
    await setDataList(data);
  };

  return (
    <section>
      <Graphs data={dataList} />
      <DataList data={dataList} />
    </section>
  );
};
export default AllData;
