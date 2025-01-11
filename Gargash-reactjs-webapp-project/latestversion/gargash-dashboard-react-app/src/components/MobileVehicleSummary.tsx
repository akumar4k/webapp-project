import { useEffect, useState } from 'react';
import { VehicleSummaryType } from '../models/VehicleSummaryType';

export const MobileVehicleSummary = ({ isVisible, setIsVisible }) => {
  const [vehicleSummary, setVehicleSummary] = useState<VehicleSummaryType | undefined>(undefined);

  useEffect(() => {
    getVehicleSummaryData();
  }, []);

  const getVehicleSummaryData = async () => {
    setVehicleSummary(new VehicleSummaryType());
  };

  return (
    <div
      className={`h-[22rem] w-full bg-sidebar-bg rounded-tl-3xl rounded-tr-3xl sm:hidden z-5 ${
        isVisible ? 'absolute bottom-0 left-0 right-0 z-5' : 'hidden'
      }`}>
      <div className="flex-row flex justify-end">
        <button
          onClick={() => {
            setIsVisible(false);
          }}
          className="w-[3rem] h-[3rem] mx-4 mt-2">
          <img src="/icon_close.svg" />
        </button>
      </div>
      {vehicleSummary != undefined && (
        <div className="flex flex-col justify-center content-center mx-20">
          <span className="text-white text-[1rem] font-semibold text-left">
            Total number of vehicles:
          </span>
          <span className="text-white text-[2.5rem] text-left font-semibold ">
            {vehicleSummary.totalNumberOfVehicles}
          </span>
          <ul className="w-full overflow-y-scroll space-y-1">
            {vehicleSummary.brands.map((item, index) => (
              <li key={index}>
                <div className="content-center text-left text-white flex flex-row items-center justify-start font-semibold text-[1rem]">
                  <div
                    className={`border-[0.1em] border-white w-[1rem] h-[1rem] rounded-full mr-2 ${index == 0 ? 'bg-brand-gac' : index == 1 ? 'bg-brand-alfa-romeo' : index == 2 ? 'bg-brand-benz' : 'bg-brand-others'}`}
                  />
                  {item.name}: {item.vehicleCount}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
