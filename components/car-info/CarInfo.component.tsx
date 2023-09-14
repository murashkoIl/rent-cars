'use client';

import React, { memo, useCallback } from 'react';
import Image from 'next/image';
import { CarInfoProps } from './car-info.types';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/constants';
import { CustomButton } from '../custom-button';

const CarInfoComponent = (car: CarInfoProps) => {
  const router = useRouter();

  const onGoBackClick = useCallback(() => {
    router.push(AppRoutes.CarsCatalogue);
  }, []);

  return (
    <div className="mt-12 padding-x padding-y max-width">
      <CustomButton
        title="Go Back"
        containerStyles="py-[16px] rounded-full bg-primary-blue gap-4"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        onClick={onGoBackClick}
        icon="/right-arrow.svg"
        iconRotate
      />
      <div className="relative w-full h-48 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <h2 className="text-xl font-bold flex justify-center">
        {car.make} {car.model}
      </h2>
      <div className="flex flex-col gap-2 pt-4">
        <div className="flex justify-between items-center">
          <span>City Mpg</span>
          <span>{car.cityMpg}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Class</span>
          <span>{car.carClass}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Cylinders</span>
          <span>{car.cylinders}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Drive</span>
          <span>{car.drive}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Fuel Type</span>
          <span>{car.fuelType}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Displacement</span>
          <span>{car.displacement}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Highway Mpg</span>
          <span>{car.highwayMpg}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Make</span>
          <span>{car.make}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Model</span>
          <span>{car.model}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Transmission</span>
          <span>{car.transmission}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Year</span>
          <span>{car.year}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(CarInfoComponent);
