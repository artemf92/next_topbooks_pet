import { PageModel } from "./page.props";

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export interface MenuItem {
  _id: Id;
  pages: PageModel[];
}

export interface Id {
  secondCategory: string;
}

export interface IGlobalMenu {
  route: string;
  name: string;
  id: TopLevelCategory;
  items?: MenuItem[];
  icon: JSX.Element;
}