import { Car, CarResponse } from '@/api/api.types';
import { transformCars } from './transform-cars-response.util';

const API_URL = process.env.API_URL || '';

export const fetchCars = async (): Promise<Car[]> => {
  const headers = {
    'X-RapidAPI-Key': '69739bc528msh9b339f705fc29d8p1252f7jsnf53fac4c1d27',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(`${API_URL}/cars?model=corolla`, {
    headers,
  });

  const data: CarResponse[] = await response.json();
  return transformCars(data);
};

export const generateCarImageUrl = (car: Car, angle?: string) => {
  
} 