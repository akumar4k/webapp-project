import { ResponsiveRadar } from "@nivo/radar";
import data from "../data/radar.json";
import { useEffect, useState } from "react";

export default function Radar() {
  const [chartData, setChartData] = useState([
    {
      type: "Tailpipe emissions",
      BVE: 0,
      ICE: 0,
      HEV: 0,
      PHEV: 0,
      REx: 0,
    },
    {
      type: "Vehicle Manufacturing",
      BVE: 0,
      ICE: 0,
      HEV: 0,
      PHEV: 0,
      REx: 0,
    },
    {
      type: "End of Life Emissions",
      BVE: 0,
      ICE: 0,
      HEV: 0,
      PHEV: 0,
      REx: 0,
    },
    {
      type: "Battery Production",
      BVE: 0,
      ICE: 0,
      HEV: 0,
      PHEV: 0,
      REx: 0,
    },
    {
      type: "Fuel/electricity Production",
      BVE: 0,
      ICE: 0,
      HEV: 0,
      PHEV: 0,
      REx: 0,
    },
  ]);

  useEffect(() => {
    let animation = setTimeout(() => setChartData(data.data), 1);

    return () => {
      clearTimeout(animation);
    };
  });

  return (
    <div className="nivo-special radar">
      <ResponsiveRadar
        data={chartData}
        keys={["BVE", "ICE", "HEV", "PHEV", "REx"]}
        indexBy="type"
        valueFormat=">-.2f"
        margin={{ top: 0, right: 140, bottom: 0, left: 140 }}
        borderColor={{ from: "color" }}
        fillOpacity={0}
        dotSize={10}
        dotColor={"white"}
        dotBorderWidth={2}
        colors={["#A735DA", "#C98CF4", "#0D57CC", "#63428E", "#23C2ED"]}
        motionConfig="wobbly"
        legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              translateX: -120,
              translateY: -0,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999',
              symbolSize: 12,
              symbolShape: 'square',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
      />
    </div>
  );
}
