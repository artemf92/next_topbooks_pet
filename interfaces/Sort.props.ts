export interface SortProps {
  sort: SortEnum;
  setSort: (sort: SortEnum.Rating | SortEnum.Price) => void;
}

export enum SortEnum {
  Rating, Price, Default
}