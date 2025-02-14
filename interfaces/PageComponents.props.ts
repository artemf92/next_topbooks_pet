import { PageModel } from "@/interfaces/page.props";
import { Product } from "@/interfaces/Product.props";
import { AdvantageItem } from "./page.props";

export interface TopPageComponentProps {
  firstCategory: number | undefined;
  page: PageModel | null;
  products: Product[] | [];
}

export interface AdvantagesProps {
  advantages?: AdvantageItem[];
  seoText?: string;
}

export interface TagsBlockProps {
  title?: string;
  tags?: string[];
}