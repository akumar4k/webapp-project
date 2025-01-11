import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../data/linev2.json";

export default function App() {
  return (
    <div className="nivo-special line">
      <p className="text">C02 Efficiency</p>
      <ResponsiveContainer>
        <AreaChart
          data={data.data}
          
        >
          <defs>
            <linearGradient id="colorICE" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9458E5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9458E5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBEV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#26BCA3" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#26BCA3" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip
            formatter={(value) => {
              return `${value} %`;
            }}
          />
          <Area
            dataKey="ICE"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorICE)"
          />
          <Area
            dataKey="BEV"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorBEV)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
