import { useRecoilState } from 'recoil';
import { FilterBarMenuItems } from '../data/GlobalStateVars';
import { useEffect, useState } from 'react';

export const FilterBar = ({ mobileFilterVisible, filterVisible }) => {
  const [filterItems, setFilterItems] = useRecoilState(FilterBarMenuItems);

  const RenderFilterItem = ({ section }) => {
    const [isExpanded, setIsExpanded] = useState(section.isExpanded);

    useEffect(() => {
      if (isExpanded !== section.isExpanded) {
        setFilterItems((prevFilterItems) => {
          return prevFilterItems.map((filterItem) => {
            if (filterItem.title === section.title) {
              return { ...filterItem, isExpanded: isExpanded };
            }
            return filterItem;
          });
        });
      }
    }, [isExpanded]);

    return (
      <>
        <div>
          <div className="border-b-[0.1em] border-filter-border-bg mx-1 md:m-0 h-[3rem] content-center text-left text-white font-semibold pl-6 pr-2 flex flex-row items-center justify-between">
            {section.title}
            <button
              className="bg-filter-title-bg w-8 h-8 items-center content-center justify-center text-center rounded-md border-filter-border-bg text-filter-border-bg text-[1rem] border-[0.1em] m-0 p-0"
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}>
              <span>{isExpanded ? '-' : '+'}</span>
            </button>
          </div>
          {isExpanded && section.items !== undefined && section.items.length > 0 && (
            <div className="border-b-[0.1em] border-filter-border-bg mx-2 md:m-0">
              <ul className="">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <RenderFilterSectionItem section={section} item={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  };

  const RenderFilterSectionItem = ({ section, item }) => {
    let itemData = { ...item };
    const [isVisible, setIsVisible] = useState(itemData.isActive);

    useEffect(() => {
      if (isVisible !== item.isActive) {
        setFilterItems((prevFilterItems) => {
          return prevFilterItems.map((sectionItem) => {
            if (sectionItem.title === section.title) {
              return {
                ...sectionItem,
                items: sectionItem.items.map((itemData) => {
                  if (itemData.name === item.name) {
                    return { ...itemData, isActive: isVisible };
                  }
                  return itemData;
                })
              };
            }
            return sectionItem;
          });
        });
      }
    }, [isVisible]);

    return (
      <>
        <div className="h-[3rem] content-center text-left text-white pl-12 pr-1 flex flex-row items-center justify-between">
          {item.name}
          <button
            className="w-8 h-8 items-center content-center justify-center m-0 p-0"
            onClick={() => {
              setIsVisible(!isVisible);
            }}>
            <img src={isVisible ? '/icon_eye_on.svg' : '/icon_eye_off.svg'} />
          </button>
        </div>
      </>
    );
  };

  return (
    <div
      className={`${
        mobileFilterVisible ? 'block absolute right-0 top-[4rem] w-[70%] z-10' : 'hidden'
      } ${
        filterVisible ? 'md:block md:absolute md:z-10 md:left-[14.5%]' : 'md:hidden'
      } md:w-[20%] bg-filter-bg h-screen justify-center md:border-t-[0.1em] md:border-b-[0.1em] md:border-r-[0.1em] md:border-filter-border-bg`}>
      <div className="text-white text-[1.2rem] h-[2rem] text-left pl-6 font-bold content-center items-center bg-filter-title-bg w-full md:border-b-[0.1em] md:border-filter-border-bg">
        Filters
      </div>
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-2rem)] overflow-y-scroll">
        <ul className="w-full overflow-y-scroll">
          {filterItems !== undefined &&
            filterItems.map((section, index) => (
              <li key={index}>
                <RenderFilterItem section={section} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
