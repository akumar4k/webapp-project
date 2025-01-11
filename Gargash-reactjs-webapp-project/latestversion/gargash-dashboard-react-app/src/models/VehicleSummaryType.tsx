import { CarBrands } from './CarBrands';

interface IVehicleSummaryType {
  totalNumberOfVehicles: number;
  brands: Array<CarBrands>;
}

export class VehicleSummaryType implements IVehicleSummaryType {
  totalNumberOfVehicles: number = 331;
  brands: CarBrands[] = [
    {
      name: 'GAC',
      image: '',
      isActive: true,
      vehicleCount: 174
    },
    {
      name: 'Alfa Romeo',
      image: '',
      isActive: true,
      vehicleCount: 40
    },
    {
      name: 'Mercedes Benz',
      image: '',
      isActive: true,
      vehicleCount: 20
    },
    {
      name: 'Other brands',
      image: '',
      isActive: true,
      vehicleCount: 97
    }
  ];
}
