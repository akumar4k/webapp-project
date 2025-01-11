import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const SideBar = ({ mobileMenuVisible }) => {
  const { logout } = useAuth0();

  return (
    <div
      className={`${
        mobileMenuVisible
          ? "flex top-[4rem] z-10 h-[calc(100vh-4rem)]"
          : "hidden"
      } absolute w-[60%] flex-col md:sticky md:flex md:w-[10%] md:h-screen bg-sidebar-bg border-r-[0.5rem] border-filter-bg justify-start items-start overflow-y-scroll`}
    >
      <img className="hidden md:block md:p-[10%]" src="/logo.svg" />
      <ul className="w-full overflow-y-scroll">
        <li className="flex flex-row md:flex-col lg:flex-row items-center text-left text-[1rem] justify-center">
          <img className="w-16 h-16 m-1 p-1" src="/icon-gps.svg" />
          <NavLink
            to="/"
            className=" text-white [&.active]:border-b-2 border-white"
          >
            Locations
          </NavLink>
        </li>
        <li className="flex flex-row md:flex-col lg:flex-row items-center text-left text-[1rem] justify-center">
          <img className="w-16 h-16 m-1 p-1" src="/icon-car.svg" />
          <NavLink
            to="/overview"
            className=" text-white [&.active]:border-b-2 border-white"
          >
            Overview
          </NavLink>
        </li>
        <li className="flex flex-row md:flex-col lg:flex-row items-center text-left text-[1rem] justify-center">
          <img className="w-16 h-16 m-1 p-1" src="/icon-gps.svg" />
          <NavLink
            to="/flexcharts"
            className=" text-white [&.active]:border-b-2 border-white"
          >
            FlexCharts
          </NavLink>
        </li>
      </ul>
      <div className="status-indicator">
        <div className="status-circle"></div>
        <div className="status-text">
          <p>Online</p>
          <p>Last refresh 1 mins ago</p>
          <button
            className="logout"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
