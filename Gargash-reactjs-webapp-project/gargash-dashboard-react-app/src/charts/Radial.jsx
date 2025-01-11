import { ResponsiveRadialBar } from "@nivo/radial-bar";
import data from "../data/radial.json";
import { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Radial = () => {
  const numberOfVehicles = data.data.reduce((acc, item) => {
    return acc + item.data[0].y;
  }, 0);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let animation = setTimeout(() => setChartData(data.data), 1);

    return () => {
      clearTimeout(animation);
    };
  });

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

  // function _onSelect(option) {
  //   const modifiedData = this.setState({ selected: option });
  // }

  return (
    <div className="nivo-special">
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

      <ResponsiveRadialBar
        data={chartData}
        valueFormat=">-.2f"
        padding={0.05}
        innerRadius={0.55}
        cornerRadius={45}
        isInteractive={false}
        startAngle={360}
        endAngle={0}
        colors={["#0D57CC", "#C98CF4", "#63428E", "#A735DA", "#23C2ED"]}
        enableCircularGrid={false}
        enableRadialGrid={false}
        radialAxisStart={null}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      />
      <div className="vehicle-counter">
        <span className="label">Total no. of vehicles</span>
        <div className="number">{numberOfVehicles}</div>
      </div>
      <div className="legend">
        {chartData.map((series, key) => {
          return (
            <div key={key}>
              <ResponsiveContainer
                className="legend-item"
                width={60}
                height={60}
              >
                <PieChart>
                  <Pie
                    data={series.legend}
                    cx={20}
                    cy={20}
                    innerRadius="80%"
                    outerRadius="100%"
                    fill={series.color}
                    stroke="none"
                    dataKey="value"
                    paddingAngle={0}
                  >
                    <Label
                      value={series.data[0].y}
                      position="center"
                      className="label-top"
                      fontSize="18px"
                    />
                    {series.legend.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index == 0 ? series.color : "#2C3551"}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p>{series.legend[0].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radial;
