import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts';
import data from '../data/heatBar.json';

export default function App() {
  return (
    <div className="nivo-special heatbar">
      <p className="text">Idle v Drive time (last 2 weeks)</p>
      <ResponsiveContainer>
        <BarChart
          data={data.data}
          stackOffset="sign"
          barCategoryGap={10}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar
            dataKey="drive"
            fill="#869D58"
            background={{
              fill: '#090A19',
              radius: [20, 20, 20, 20],
              width: '35',
              transform: 'translate(-3.5,0)'
            }}
            radius={[20, 20, 0, 0]}
            stackId="stack"
            animationDuration={2000}
          />
          <Bar
            dataKey="idle"
            fill="#43A4BB"
            radius={[20, 20, 0, 0]}
            stackId="stack"
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
