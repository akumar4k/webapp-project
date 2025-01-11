import { useTheme } from '@nivo/core';
import { useEffect, useState } from 'react';
import { VehicleSummaryType } from '../models/VehicleSummaryType';

export const VehicleSummaryOverlay = ({ filterVisible }) => {
  const [vehicleSummary, setVehicleSummary] = useState<VehicleSummaryType | undefined>(undefined);

  useEffect(() => {
    getVehicleSummaryData();
  }, []);

  const getVehicleSummaryData = async () => {
    setVehicleSummary(new VehicleSummaryType());
  };

  return (
    <div
      className={`hidden sm:block sm:absolute sm:z-5 ${
        filterVisible ? 'sm:left-[30%]' : 'sm:left-[5%]'
      } sm:top-[5%]`}>
      <span className="text-white font-bold text-[1.5rem]">Vehicle locations</span>
      <div className=" bg-vehicle-summary-bg/95 mt-6 rounded-md py-2">
        {vehicleSummary != undefined && (
          <div className="flex flex-col">
            <span className="text-white text-[1rem] mx-3 font-semibold">
              Total number of vehicles:
            </span>
            <span className="text-white text-[2.5rem] text-left mx-3 font-semibold">
              {vehicleSummary.totalNumberOfVehicles}
            </span>
            <ul className="w-full overflow-y-scroll space-y-1 mx-3">
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
    </div>
  );
};
