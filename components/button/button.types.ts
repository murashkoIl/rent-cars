import { MouseEventHandler } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  title: string;
  disabled?: boolean;
  type?: ButtonType;
  styles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
