import { SideBarMenuItem } from '../models/SideBarMenuItem';

export const getSideBarMenuItems = (): SideBarMenuItem[] => [
  {
    title: 'Locations',
    image: '/icon-gps.svg',
    navRoute: '/'
  },
  {
    title: 'Overview',
    image: '/icon-car.svg',
    navRoute: '/overview'
  },
  {
    title: 'FlexCharts',
    image: '/icon-gps.svg',
    navRoute: '/flexcharts'
  }
];
