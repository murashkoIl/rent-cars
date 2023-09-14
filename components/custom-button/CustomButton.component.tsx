import { memo } from 'react';
import { CustomButtonProps } from './custom-button.types';
import Image from 'next/image';

const CustomButtonComponent = ({
  disabled = false,
  type = 'button',
  onClick,
  containerStyles,
  textStyles,
  title,
  icon,
  iconRotate,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && (
        <div className={`relative w-5 h-5 ${iconRotate && 'rotate-180'}`}>
          <Image
            src={icon}
            alt="Show details icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default memo(CustomButtonComponent);
