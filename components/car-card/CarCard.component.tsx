"use client"

import { memo, useCallback, useMemo } from 'react';
import { CarCardProps } from './car-card.types';
import Image from 'next/image';
import { CustomButton } from '../custom-button';
import { AppRoutes, Transmissions } from '@/constants';
import { calculateCarRent } from '@/utils/calculate-car-rent.util';

import styles from './car-card.module.css';
import { useRouter } from 'next/navigation';

const CarCardComponent = (props: CarCardProps) => {
  const { cityMpg, drive, make, model, highwayMpg, transmission, year, id } = props;
  const router = useRouter();
  const carRent = useMemo(
    () => calculateCarRent(cityMpg, year),
    [cityMpg, year]
  );

  const onViewMore = useCallback(() => {
    router.push(`${AppRoutes.Car}?id=${id}`);
  }, [id, router]);

  return (
    <div
      className={`flex flex-col p-4 bg-blue-100 rounded-lg gap-6 duration-500 flex-[1_1_25%]
      overflow-hidden ${styles.expandCard}`}
    >
      <div className="flex gap-2 font-medium text-xl">
        <span className="first-letter:uppercase">{make}</span>
        <span className="first-letter:uppercase">{model}</span>
        <span className="first-letter:uppercase">{drive}</span>
      </div>
      <div className="flex gap-6">
        <div className="flex h-fit">
          <span>$</span>
          <span className="font-semibold text-3xl">{carRent}</span>
          <span className="self-end">/day</span>
        </div>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/steering-wheel.svg"
            alt="Steering wheel"
            width={24}
            height={24}
          />
          <span className="text-gray-500 text-sm">
            {Transmissions[transmission]}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/tire.svg" alt="Tire" width={24} height={24} />
          <span className="text-gray-500 uppercase text-sm">{drive}</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/gas.svg" alt="Gas" width={24} height={24} />
          <span className="text-gray-500 text-sm">
            {(cityMpg + highwayMpg) / 2}MPG
          </span>
        </div>
      </div>
      <div className={styles.slideButton}>
        <CustomButton
          title="View More"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          icon="/right-arrow.svg"
          onClick={onViewMore}
        />
      </div>
    </div>
  );
};

export default memo(CarCardComponent);
