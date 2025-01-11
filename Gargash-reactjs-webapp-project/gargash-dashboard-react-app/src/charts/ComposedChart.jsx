import {
  ComposedChart,
  ReferenceLine,
  YAxis,
  XAxis,
  Area,
  Bar,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../data/composedChart.json";

export default function CChart() {
  return (
    <ResponsiveContainer>
      <ComposedChart data={data.data}  margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
        <XAxis dataKey="name" />
        <YAxis />
        <Area type="monotone" dataKey="base" stroke="" fill="rgba(112, 165, 69, 0.25)" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />

        <Bar dataKey="onefive" fill="#70A545" stackId="stack" />
        <ReferenceLine y={4} stroke="green" strokeDasharray="3 3" />
        <ReferenceLine y={6} stroke="orange" strokeDasharray="3 3" />
        <ReferenceLine y={7} stroke="red" strokeDasharray="3 3" />
        <Bar dataKey="fivesix" fill="#F78D33" stackId="stack" />
        <Bar
          dataKey="sixseven"
          fill="#D43D2A"
          radius={[20, 20, 0, 0]}
          stackId="stack"
        />
        {/* <Bar dataKey="sale">
            {teams.map((entry, index) => (
                <Cell {...entry.cellProps} />
            )}
        </Bar> */}
         {/* cellProps: { fill: "#FF8888" }, */}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
