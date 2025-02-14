import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode
  appearance: 'primary' | 'outline' | ''
  className?: string
  arrow?: 'right' | 'down'
}