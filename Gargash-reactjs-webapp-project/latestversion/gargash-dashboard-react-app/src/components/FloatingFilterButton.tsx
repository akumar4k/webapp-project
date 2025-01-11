export const FloatingFilterButton = ({ filterVisible, setFilterVisible }) => {
  return (
    <button
      onClick={() => {
        setFilterVisible(!filterVisible);
      }}
      className={`hidden ${
        filterVisible ? 'md:left-[34.44%]' : 'md:left-[15%]'
      } md:z-10 md:ease-linear md:block md:absolute w-[2rem] h-[4rem] top-[10%] bg-filter-bg p-1 rounded-tr-[0.5rem] rounded-br-[0.5rem] border-t-[0.1em] border-b-[0.1em] border-r-[0.1em] border-filter-border-bg`}>
      <img src="/icon_filter.svg" />
    </button>
  );
};
