import { memo } from 'react';

import { fetchCars } from '@/utils/api.util';
import { CarCard } from '../car-card';
import { SearchBar } from '../search-bar';
import { CustomFilter } from '../custom-filter';
import { log } from 'console';

const CarCatalogueComponent = async () => {
  const cars = await fetchCars();

  if (!Array.isArray(cars) || cars.length < 1 || !cars) {
    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">No results</h2>
      </div>
    );
  }

  return (
    <div className="mt-12 padding-x -adding-y max-width" id="discover">
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
          {cars?.map((car) => (
            <CarCard
              key={car.model + car.drive + car.carClass + car.cityMpg}
              {...car}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(CarCatalogueComponent);
