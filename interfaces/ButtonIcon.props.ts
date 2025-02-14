import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from "@/components/ButtonIcon/icons/up.svg";
import menu from "@/components/ButtonIcon/icons/menu.svg";
import close from "@/components/ButtonIcon/icons/close.svg";

export const icons = {
  up, menu, close
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends 
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'ref'> {
  icon: IconName;
  appearance: 'primary' | 'white';
}