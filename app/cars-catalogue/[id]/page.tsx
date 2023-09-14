import { Car } from '@/api/api.types';
import { CarInfo } from '@/components';
import { transformCars } from '@/utils/transform-cars-response.util';

const getCar = async (id: string): Promise<Car | undefined> => {
  try {
    const res = await fetch(`http://localhost:3000/api/cars?${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch car');
    }

    const { cars } = await res.json();

    return transformCars(cars).at(0);
  } catch (error) {
    console.log('Error loading car:', error);
  }
};

const Home = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const car = await getCar(id);

  return <>{car && <CarInfo {...car} />}</>;
};

export default Home;
