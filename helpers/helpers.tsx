import { IGlobalMenu, TopLevelCategory } from "@/interfaces/menu.props";
import CoursesIcon from "@/components/Menu/icons/courses.svg";
import BooksIcon from "@/components/Menu/icons/books.svg";
import ServicesIcon from "@/components/Menu/icons/services.svg";
import ProductsIcon from "@/components/Menu/icons/products.svg";
import Typograf from "typograf";

export const buildMenu: IGlobalMenu[] = [
  { route: '/courses', name: 'Курсы', id: TopLevelCategory.Courses, icon: <CoursesIcon/> },
  { route: '/services', name: 'Сервисы', id: TopLevelCategory.Services, icon: <BooksIcon/>},
  { route: '/books', name: 'Книги', id: TopLevelCategory.Books, icon: <ServicesIcon/>},
  { route: '/products', name: 'Товары', id: TopLevelCategory.Products, icon: <ProductsIcon/>},
];

export const formattedPrice = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const typograf = (text: string): string => new Typograf({locale: ['ru', 'en-US']}).execute(text);

export const plural = (n: number, text1: string, text2: string, text5: string) => n % 10 == 1 && n % 100 != 11 ? text1 : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? text2 : text5);