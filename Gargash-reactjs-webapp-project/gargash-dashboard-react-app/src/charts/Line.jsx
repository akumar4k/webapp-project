import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../data/line.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function ChartLine() {
  const options = [
    { value: "one", label: "All business lines" },
    { value: "two", label: "SIXT" },
    { value: "three", label: "Hertz" },
  ];

  const timeOptions = [
    { value: "one", label: "All year" },
    { value: "two", label: "Jan-July 2024" },
    { value: "three", label: "July-Dec 2024" },
  ];

  const defaultOption = "one";
  return (
    <div className="nivo-special ">
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <label>Time period:</label>
          <Dropdown
            options={timeOptions}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="dropdown">
          <label>Business line:</label>
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>

      <ResponsiveContainer>
        <LineChart
          data={data.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <Tooltip />
          <Line
            type="monotone"
            dot={false}
            dataKey="ICE"
            strokeWidth={10}
            stroke="#0B9BFE"
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="BVE"
            strokeWidth={10}
            stroke="#DC2CE8"
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
