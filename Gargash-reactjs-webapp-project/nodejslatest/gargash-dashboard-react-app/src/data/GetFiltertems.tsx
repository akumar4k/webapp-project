import { BusinessLines } from '../models/BusinessLines';
import { CarBrands } from '../models/CarBrands';
import { CarFuelType } from '../models/CarFuelType';
import { CarStatus } from '../models/CarStatus';
import { FilterBarMenuItem } from '../models/FilterBarMenuItem';

export const getFilterItems = (): FilterBarMenuItem[] => [
  {
    title: 'Car Manufacturers',
    isExpanded: true,
    items: getAllCarBrands()
  },
  {
    title: 'Car Status',
    isExpanded: true,
    items: getAllCarStatusTypes()
  },
  {
    title: 'Car Type',
    isExpanded: true,
    items: getAllCarFuelTypes()
  },
  {
    title: 'Business Lines',
    isExpanded: true,
    items: getAllBusinessLines()
  }
];

const getAllCarBrands = (): CarBrands[] => [
  {
    name: 'GAC',
    image: '',
    isActive: true
  },
  {
    name: 'Alfa Romeo',
    image: '',
    isActive: true
  },
  {
    name: 'Mercedes Benz',
    image: '',
    isActive: true
  },
  {
    name: 'Other brands',
    image: '',
    isActive: true
  }
];

const getAllCarStatusTypes = (): CarStatus[] => [
  {
    name: 'Moving',
    image: '',
    isActive: true
  },
  {
    name: 'Stopped',
    image: '',
    isActive: true
  },
  {
    name: 'Idle',
    image: '',
    isActive: true
  },
  {
    name: 'Invalid GPS',
    image: '',
    isActive: true
  },
  {
    name: 'Near termination date',
    image: '',
    isActive: true
  },
  {
    name: 'Outstanding fines',
    image: '',
    isActive: true
  }
];

const getAllCarFuelTypes = (): CarFuelType[] => [
  {
    name: 'Electric',
    image: '',
    isActive: true
  },
  {
    name: 'Petrol',
    image: '',
    isActive: true
  },
  {
    name: 'Diesel',
    image: '',
    isActive: true
  }
];

const getAllBusinessLines = (): BusinessLines[] => [
  {
    name: 'Gargash Leasing',
    image: '',
    isActive: true
  },
  {
    name: 'Sixt',
    image: '',
    isActive: true
  },
  {
    name: 'Other lines',
    image: '',
    isActive: true
  }
];
