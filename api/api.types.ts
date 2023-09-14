export interface CarResponse {
  _id: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: Transmission;
  year: number;
}

export interface Car {
  id: string;
  cityMpg: number;
  carClass: string;
  combinationMpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuelType: string;
  highwayMpg: number;
  make: string;
  model: string;
  transmission: Transmission;
  year: number;
}

type Transmission = 'a' | 'm'