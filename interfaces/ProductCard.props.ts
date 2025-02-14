import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Product } from "./Product.props";

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Product;
}