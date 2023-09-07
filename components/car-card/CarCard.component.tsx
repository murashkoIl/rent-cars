import { memo } from 'react';
import { CarCardProps } from './car-card.types';
import { CustomButton } from '../custom-button';

const CarCardComponent = ({
  cityMpg,
  combinationMpg,
  cylinders,
  displacement,
  drive,
  carClass,
  fuelType,
  highwayMpg,
  make,
  model,
  transmission,
  year,
}: CarCardProps) => {
  return <div>123</div>;
};

export default memo(CarCardComponent);
