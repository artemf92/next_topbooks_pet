import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError, UseControllerProps } from 'react-hook-form';

export interface IRatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating?: number;
  isEditable?: boolean;
  setRating?: ( rating:number ) => void;
  error?: FieldError;
}