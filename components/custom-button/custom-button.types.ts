import { ButtonProps } from '../button/button.types';

export interface CustomButtonProps extends ButtonProps {
  containerStyles?: string;
  textStyles?: string;
  icon?: string;
  iconRotate?: boolean;
}
