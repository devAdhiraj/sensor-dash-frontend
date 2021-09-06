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
  console.log(graphkey)
  return (
    <ResponsiveContainer width={800} height="80%">
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
            offset: 7
          }}
        />
        <Tooltip content={<CustomTooltip dataLabel={graphkey} />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default TemplateGraph;
