import HeatBar from '../charts/HeatBar';
import ComposedChart from '../charts/ComposedChart';
import Line from '../charts/Line';
import LineV2 from '../charts/LineV2';

export const FlexCharts = () => {
  return (
    <div className="md:flex-1 h-[calc(100vh-4rem)] md:h-screen p-4 grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] overflow-y-scroll w-full bg-chart-bg">
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <HeatBar />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <ComposedChart />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <Line />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <LineV2 />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <HeatBar />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <ComposedChart />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <Line />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <LineV2 />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <HeatBar />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <ComposedChart />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <Line />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <LineV2 />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <HeatBar />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <ComposedChart />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <Line />
      </div>
      <div className="content-center h-[30rem] border-[0.1em] rounded-[0.5rem] border-white">
        <LineV2 />
      </div>
    </div>
  );
};

export default FlexCharts;
