import React from "react"; 
import {useState, useEffect} from "react"; 
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
// import YLabel from "./YLabel";
const TemplateGraph = ({ data, graphkey, color, label }) => {
  const [width, setWidth] = useState(window.outerWidth - 10 < 700 ? window.outerWidth - 10 : 700);
    
    useEffect(() => {
      function handleResize() {
        setWidth(window.outerWidth - 10 < 700 ? window.outerWidth - 10 : 700);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });

  return (
    <ResponsiveContainer width={width} height="50%">
      <LineChart
        data={data}
        syncId="mygraphs"
      >
        <Line type="monotone" strokeWidth={2} dataKey={graphkey} stroke={color} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="createdAt" tick={false} />
        <YAxis
          label={{
            value: label,
            angle: -90,
            position: "insideLeft",
            offset: 5
          }}
        />
        <Tooltip content={<CustomTooltip dataLabel={graphkey} />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default TemplateGraph;
