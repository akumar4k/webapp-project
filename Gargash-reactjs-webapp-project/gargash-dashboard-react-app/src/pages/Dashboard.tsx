import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MobileNavBar } from "../components/MobileNavBar";
import { SideBar } from "../components/SideBar";
import { FilterBar } from "../components/FilterBar";
import ToolTip from "../components/ToolTip";

const Dashboard = () => {
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  const FilterIcon = () => {
    return (
      <button
        onClick={() => {
          setFilterVisible(!filterVisible);
        }}
        className={`hidden ${
          filterVisible ? "md:left-[25%]" : "md:left-[10%]"
        } md:z-10 md:ease-linear md:block md:absolute w-[2rem] h-[4rem] top-[5%] bg-filter-bg p-1 rounded-tr-[0.5rem] rounded-br-[0.5rem]`}
      >
        <img src="/icon_filter.svg" />
      </button>
    );
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex md:flex-row">
          <MobileNavBar
            mobileMenuVisible={mobileMenuVisible}
            mobileFilterVisible={mobileFilterVisible}
            setMobileFilterVisible={setMobileFilterVisible}
            setMobileMenuVisible={setMobileMenuVisible}
          />
          <SideBar mobileMenuVisible={mobileMenuVisible} />
          <FilterBar
            mobileFilterVisible={mobileFilterVisible}
            filterVisible={filterVisible}
          />
          <FilterIcon />
          <Outlet />
        </div>
        <ToolTip />
      </div>
    </>
  );
};

export default Dashboard;
