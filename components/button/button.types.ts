import { MouseEventHandler } from 'react';

export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  title: string;
  disabled?: boolean;
  type?: ButtonType;
  styles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
