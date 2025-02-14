import classNames from "classnames";
import { ISidebarProps } from "../../interfaces/Sidebar.props";
import styles from './Sidebar.module.css';
import Menu from "../Menu/Menu";
import Logo from "@/app/logo.svg";
import Link from "next/link";
import Search from "../Search/Search";
import { Suspense } from "react";

export const Sidebar = ({className, children, ...props}:ISidebarProps): JSX.Element => {
  const sidebarClasses = classNames(styles.sidebar, className);

  return (
    <div className={sidebarClasses} {...props}>
      <Link 
        href={'/'} 
        className={styles.logo}
        aria-label="Перейти на главную страницу"
      ><Logo/></Link>
      <Suspense fallback="Загрузка поиска">
        <Search />
      </Suspense>
      <Menu />
      { children }
    </div>
  );
};