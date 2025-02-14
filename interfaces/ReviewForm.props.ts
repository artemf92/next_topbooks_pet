import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pruductId?: string;
  isShow: boolean;
}

export type ReviewsFormData = {
  name: string;
  title: string;
  description: string;
  rating: number;
}