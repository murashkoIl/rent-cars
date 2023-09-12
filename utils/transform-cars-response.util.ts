import { v4 as uuidv4 } from 'uuid';
import { CarResponse, Car } from '@/api/api.types';

export const transformCars = (cars: CarResponse[]): Car[] =>
  cars.map((car) => ({
    id: uuidv4(),
    cityMpg: car.city_mpg,
    carClass: car.class,
    combinationMpg: car.combination_mpg,
    cylinders: car.cylinders,
    displacement: car.displacement,
    drive: car.drive,
    fuelType: car.fuel_type,
    highwayMpg: car.highway_mpg,
    make: car.make,
    model: car.model,
    transmission: car.transmission,
    year: car.year,
  }));
