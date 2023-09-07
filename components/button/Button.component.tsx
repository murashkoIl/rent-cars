'use client';

import Image from 'next/image';
import { ButtonProps } from './button.types';
import { memo } from 'react';

const ButtonComponent = ({
  disabled = false,
  type = 'button',
  title,
  styles,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`custom-btn ${styles}`}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default memo(ButtonComponent);
