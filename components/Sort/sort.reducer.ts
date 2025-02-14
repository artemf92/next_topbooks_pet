import { Product } from "@/interfaces/Product.props";
import { SortEnum } from "@/interfaces/Sort.props";

export type SortActions = { type: SortEnum.Rating } | { type: SortEnum.Price };

export interface SortStateReducer {
  sort: SortEnum;
  products: Product[] | [];
}

export const sortReducer = (state: SortStateReducer, action: SortActions): SortStateReducer => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a,b) => a.initialRating > b.initialRating ? -1 : 1)
      };

    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a,b) => a.price < b.price ? -1 : 1)
      };
  
    default:
      throw new Error("Неправильное значение сортировки.");
  }
};