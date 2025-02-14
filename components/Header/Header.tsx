'use client';

import { IHeaderProps } from "@/interfaces/Header.props";
import classNames from "classnames";
import styles from "./Header.module.css";
import Link from "next/link";
import Logo from '@/app/logo.svg';
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { motion } from 'motion/react';
import Search from "../Search/Search";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export const Header = ({className, children, ...props}:IHeaderProps): JSX.Element => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsShowMenu(false);
  }, [pathname]);

  const variants = {
    inactive: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    active: {
      opacity: 1,
      transform: 'translateX(0)',
    }
  };

  return (
    <header className={classNames(styles.header, className)} {...props}>
      <Link
        href={'/'}
        className={styles.logo}
        aria-label="Перейти на главную страницу"
      ><Logo/></Link>
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsShowMenu(true)}
      />
      <motion.div 
        className={styles.mobileMenu}
        variants={variants}
        initial={'inactive'}
        animate={isShowMenu ? 'active' : 'inactive'}
      >
        <Link href={'/'} className={styles.logo}><Logo/></Link>
        <Suspense fallback="Загрузка поиска">
          <Search />
        </Suspense>
        { children }
        <ButtonIcon className={styles.closeBtn} appearance="primary" icon="close" onClick={() => setIsShowMenu(false)} />
      </motion.div>
    </header>
  );
};