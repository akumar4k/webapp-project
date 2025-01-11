import Line from '../charts/Line';
import Radial from '../charts/Radial';
import HeatBar from '../charts/HeatBar';
import ComposedChart from '../charts/ComposedChart';
import Radar from '../charts/Radar';
import LineV2 from '../charts/LineV2';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Overview = () => (
  <div className="flex-1">
    <Tabs defaultFocus={true} className=" bg-chart-bg">
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Environmental Impact</Tab>
        <Tab>Breakdowns & Failures</Tab>
      </TabList>

      <TabPanel>
        <div className="reports grid grid-cols-1 md:grid-cols-2 gap-8 h-[100vh] overflow-y-scroll">
          <div className="reports-wrap row-span-2">
            <div className="title">Vehicles total</div>
            <Radial />
          </div>
          <div className="reports-wrap">
            <div className="title"> Vehicle usage</div>
            <HeatBar />
          </div>
          <div className="reports-wrap">
            <div className="title">CO2 performance compared</div>
            <Line />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="reports grid grid-cols-1 md:grid-cols-2 gap-8 h-[100vh] overflow-y-scroll">
          <div className="reports-wrap row-span-2">
            <div className="title">Vehicles impact compared</div>
            <Radar />
          </div>
          <div className="reports-wrap">
            <div className="title">Emissions</div>
            <ComposedChart />
          </div>
          <div className="reports-wrap">
            <div className="title">CO2 performance compared</div>
            <LineV2 />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div style={{ height: `100vh` }}>BREAKDOWN</div>
      </TabPanel>
    </Tabs>
  </div>
);

export default Overview;
