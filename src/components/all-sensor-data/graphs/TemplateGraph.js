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
const TemplateGraph = ({ data }) => {
  return (
    <ResponsiveContainer width={800} height="80%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        syncId="mygraphs"
      >
        <Line type="monotone" strokeWidth={2} dataKey="temp" stroke="#12b05c" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="createdAt" tick={false} />
        <YAxis
          label={{
            value: "Temperature (°C)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default TemplateGraph;
