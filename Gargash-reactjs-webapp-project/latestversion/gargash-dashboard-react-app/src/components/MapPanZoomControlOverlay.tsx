import { useEffect, useState } from 'react';

export const MapPanZoomControlOverlay = ({
  zoomValue,
  setZoomValue,
  panX,
  panY,
  setPanX,
  setPanY,
  setCenterValue
}) => {
  return (
    <div className="hidden md:flex md:absolute md:z-5 md:right-[2%] md:top-[15%] md:flex-row md:space-x-1 items-center">
      <ZoomOptions setZoomValue={setZoomValue} setCenterValue={setCenterValue} />
      <div className={`flex-col items-center space-y-4`}>
        {/* <LayoutControl /> */}
        <PanControl panX={panX} panY={panY} setPanX={setPanX} setPanY={setPanY} />
        <ZoomControl zoomValue={zoomValue} setZoomValue={setZoomValue} />
      </div>
    </div>
  );
};

const LayoutControl = () => {
  return <div className="bg-white/50 w-[7rem] h-[3rem]"></div>;
};

const PanControl = ({ panX, panY, setPanX, setPanY }) => {
  const panPixelValue = 10;

  const handlePan = (axis, direction) => {
    if (axis === 'x') {
      const newPanX =
        direction === 'left'
          ? panX < 0
            ? panX - panPixelValue
            : -panPixelValue
          : panX > 0
            ? panX + panPixelValue
            : panPixelValue;
      setPanX(newPanX);
    } else if (axis === 'y') {
      const newPanY =
        direction === 'up'
          ? panY < 0
            ? panY - panPixelValue
            : -panPixelValue
          : panY > 0
            ? panY + panPixelValue
            : panPixelValue;
      setPanY(newPanY);
    }
  };

  return (
    <div className="w-[7rem] h-[7rem] bg-zoom-control-bg border-[0.1em] border-zoom-control-border-bg mt-6 rounded-full content-center">
      <div className="flex flex-col rounded-full items-center space-y-3">
        <button onClick={() => handlePan('y', 'up')} className="w-5 h-5">
          <img src="/icon_up_arrow.svg" />
        </button>
        <div className="flex flex-row justify-between space-x-4 items-center">
          <button onClick={() => handlePan('x', 'left')} className="w-3 h-3 mb-2">
            <img src="/icon_left_arrow.svg" />
          </button>
          <div className="w-9 h-9 rounded-full bg-filter-title-bg" />
          <button onClick={() => handlePan('x', 'right')} className="w-3 h-3 mb-2">
            <img src="/icon_right_arrow.svg" />
          </button>
        </div>
        <button onClick={() => handlePan('y', 'down')} className="w-5 h-5">
          <img src="/icon_bottom_arrow.svg" />
        </button>
      </div>
    </div>
  );
};

const ZoomOptions = ({ setZoomValue, setCenterValue }) => {
  const [zoomOptions, setZoomOptions] = useState([
    {
      name: 'City (10 miles)',
      isActive: true,
      zoomValue: 10.5,
      centerValue: { lat: 25.15, lng: 55.35 }
    },
    {
      name: 'Region (150 miles)',
      isActive: false,
      zoomValue: 9.3,
      centerValue: { lat: 24.6, lng: 55.05}
    },
    {
      name: 'Country (500 miles)',
      isActive: false,
      zoomValue: 8,
      centerValue: { lat: 24.45, lng: 54.35 }
    }
  ]);

  const updateActive = (index) => {
    setZoomOptions((prevItems) => {
      return prevItems.map((item, itemIndex) => {
        if (itemIndex == index) {
          setZoomValue(item.zoomValue);
          setCenterValue(item.centerValue);
          return { ...item, isActive: true };
        } else {
          return { ...item, isActive: false };
        }
      });
    });
  };

  return (
    <div className="flex flex-col space-y-2 mt-[4.5rem]">
      {zoomOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => updateActive(index)}
          className={`bg-zoom-control-bg/90 border-[0.1em] border-zoom-control-border-bg h-[2rem] w-[10.5rem] text-left pl-2 text-[1rem] ${item.isActive ? 'text-white font-bold' : 'text-zoom-control-border-bg font-semibold'}`}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

const ZoomControl = ({ zoomValue, setZoomValue }) => {
  const zoomUpperLimit = 20;
  const zoomLowerLimit = 3;
  const zoomToggleValue = 1;

  return (
    <div className="items-center flex flex-col">
      <button
        onClick={() => {
          if (zoomValue != zoomUpperLimit) {
            setZoomValue(zoomValue + zoomToggleValue);
          }
        }}
        className="w-[4rem] h-[4rem] bg-zoom-control-bg border-[0.1rem] border-zoom-control-border-bg text-white font-bold text-[2rem] pb-2">
        <span>+</span>
      </button>
      <div className="w-[0.6rem] h-[12rem] bg-zoom-control-bg border-x-[0.1rem] border-zoom-control-border-bg"></div>
      <button
        onClick={() => {
          if (zoomValue != zoomLowerLimit) {
            setZoomValue(zoomValue - zoomToggleValue);
          }
        }}
        className="w-[4rem] h-[4rem] bg-zoom-control-bg border-[0.1rem] border-zoom-control-border-bg text-white font-bold text-[2rem] pb-2">
        -
      </button>
    </div>
  );
};
