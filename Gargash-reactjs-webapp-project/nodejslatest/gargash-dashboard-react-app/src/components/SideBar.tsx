import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getSideBarMenuItems } from '../data/GetSideBarItems';

export const SideBar = ({ mobileMenuVisible, filterVisible }) => {
  const { logout } = useAuth0();

  const menuItems = getSideBarMenuItems();

  const RenderMenuItem = ({ title, image, navRoute }) => {
    return (
      <NavLink
        to={navRoute}
        className=" text-white [&.active]:bg-filter-bg [&.active]:rounded-l-[1rem] [&.active]:lg:rounded-l-[4rem] flex flex-row items-center text-left text-[1em] justify-center h-14">
        <img className="w-12 h-12" src={image} />
        {title}
      </NavLink>
    );
  };

  return (
    <div
      className={`${
        mobileMenuVisible ? 'flex top-[4rem] z-10 h-[calc(100vh-4rem)]' : 'hidden'
      } absolute w-[60%] flex-col md:sticky md:flex md:w-[15%] md:h-screen bg-sidebar-bg ${
        filterVisible
          ? 'md:drop-shadow-2xl md:border-r-[0rem]'
          : 'md:border-r-[0.5rem] md:border-filter-bg'
      } justify-start items-start overflow-y-scroll`}>
      <img className="hidden md:block md:p-[10%]" src="/logo.svg" />
      <ul className="w-full overflow-y-scroll space-y-1 ml-1">
        {menuItems.map((item) => (
          <li>
            <RenderMenuItem title={item.title} image={item.image} navRoute={item.navRoute} />
          </li>
        ))}
      </ul>
      <div className="status-indicator">
        <div className="status-circle"></div>
        <div className="status-text">
          <p>Online</p>
          <p>Last refresh 1 mins ago</p>
          <button
            className="logout"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
