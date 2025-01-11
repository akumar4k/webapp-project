import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileNavBar } from '../components/MobileNavBar';
import { SideBar } from '../components/SideBar';
import { FilterBar } from '../components/FilterBar';
import ToolTip from '../components/ToolTip';
import { FloatingFilterButton } from '../components/FloatingFilterButton';

const Dashboard = () => {
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

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
          <SideBar mobileMenuVisible={mobileMenuVisible} filterVisible={filterVisible} />
          <FilterBar mobileFilterVisible={mobileFilterVisible} filterVisible={filterVisible} />
          <FloatingFilterButton filterVisible={filterVisible} setFilterVisible={setFilterVisible} />
          <Outlet context={{ filterVisible }} />
        </div>
        <ToolTip />
      </div>
    </>
  );
};

export default Dashboard;
