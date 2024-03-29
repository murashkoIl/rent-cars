import { memo } from 'react';

import { CarCard } from '../car-card';
import { SearchBar } from '../search-bar';
import { CustomFilter } from '../custom-filter';
import { transformCars } from '@/utils/transform-cars-response.util';
import { Car } from '@/api/api.types';

const getCars = async (): Promise<Car[] | undefined> => {
  try {
    const res = await fetch('http://localhost:3000/api/cars', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error("Failed to fetch cars");
    }

    const { cars } = await res.json();
    
    return transformCars(cars);
  } catch (error) {
    console.log("Error loading cars:", error);
  }
};

const CarsCatalogueComponent = async () => {
  const cars = await getCars();

  if (!Array.isArray(cars) || cars.length < 1 || !cars) {
    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">No results</h2>
      </div>
    );
  }

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      <section>
        <div className="home__cars-wrapper">
          {cars?.map((car, idx) => (
            <CarCard key={idx} {...car} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(CarsCatalogueComponent);
