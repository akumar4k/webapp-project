import React, { useState } from 'react';

export const MobileNavBar = ({
  mobileMenuVisible,
  mobileFilterVisible,
  setMobileFilterVisible,
  setMobileMenuVisible
}) => {
  return (
    <div className="bg-mobile-nav-bg h-[4rem] w-full content-center md:hidden justify-center items-center">
      <div className="flex flex-row justify-between items-center w-full content-center">
        <button
          onClick={() => {
            setMobileMenuVisible(!mobileMenuVisible);
            setMobileFilterVisible(false);
          }}
          className="w-[2rem] h-[2rem] m-4">
          <img src="/icon_menu.svg" />
        </button>
        <div className="text-white text-[2rem]">Gargash</div>
        <button
          onClick={() => {
            setMobileMenuVisible(false);
            setMobileFilterVisible(!mobileFilterVisible);
          }}
          className="w-[2rem] h-[2rem] text-white m-4">
          <img src="/icon_filter.svg" />
        </button>
      </div>
    </div>
  );
};
