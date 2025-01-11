export const MobileVehicleSummaryOverlay = ({ setIsVisible }) => {
  return (
    <div>
      <div className="block absolute z-5 sm:hidden top-[1rem] left-0 right-0">
        <span className="text-white font-bold text-[1.5rem] text-center bg-vehicle-summary-bg-mobile/90 p-3 rounded-md">
          Vehicle locations
        </span>
      </div>
      <button
        onClick={() => {
          setIsVisible(true);
        }}>
        <div className="block absolute z-5 sm:hidden bottom-[6rem] right-[1rem] bg-sidebar-bg w-[3rem] h-[3rem] rounded-full border-[0.1em] border-white content-center justify-center">
          <span className="text-white font-bold text-[1.5rem] text-cente p-3">i</span>
        </div>
      </button>
    </div>
  );
};
