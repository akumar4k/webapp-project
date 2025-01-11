import Gauge from './Gauge';

const ToolTip = () => {
  return (
    <div id="tooltip">
      <div className="column car-info">
        <div>
          <img className="car-model" src="/car-closed.svg" alt="Car Image" />
          <div className="status"></div>
          <img className="plate" src="/mockPlate.png" alt="Car Image" />
        </div>

        <div className="gauge-container">
          <Gauge />
          <img className="icon" src="/icon-fuel.svg" />
        </div>
      </div>

      <div className="column map-container">
        <div className="address"></div>
        <div className="mock-image">
          {' '}
          <img src="/mockMap.png" />
        </div>
      </div>

      <div className="column driver-info">
        <div className="">
          {' '}
          {/* <p className="driver"></p> */}
          <img src="/driverMock.png" />
        </div>
        <div className="speedometer">42 km/h</div>
        <div className="">
          {' '}
          <img src="/carSpeedMock.png" />
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
