export const FilterBar = ({ mobileFilterVisible, filterVisible }) => {
  return (
    <div
      className={`${
        mobileFilterVisible
          ? "flex absolute right-0 top-[4rem] w-[70%] z-10"
          : "hidden"
      } ${
        filterVisible ? "md:block" : "md:hidden"
      } md:w-[15%] bg-filter-bg h-screen justify-center`}
    >
      <div className="text-white text-[2rem] text-center pt-3 items-center">
        Filters
      </div>
    </div>
  );
};
