'use client';

import { IGlobalMenu, MenuItem } from "@/interfaces/menu.props";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";
import { PageModel } from "@/interfaces/page.props";
import { motion, useReducedMotion } from "motion/react";

export default function MenuClient({menu}: {menu: IGlobalMenu[]}): JSX.Element {
  const [mainCategory, setMainCategory] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [announce, setAnnounce] = useState<'opened' | 'closed' | undefined>();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      transition: shouldReduceMotion ? {} : {
        when: "beforeChildren",
        staggerChildren: 0.5,
      }
    },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion ? {} : {
        when: "afterChildren",
      }
    },
  };

  const variantsChildren = shouldReduceMotion 
    ? {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    } 
    : {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 24
    }
  };

  const openSecondMenu = (name: string): void => {
    setCurrentCategory(name);
    setAnnounce('opened');
  };

  const openSecondMenuKey = (key: KeyboardEvent, name: string): void => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      setAnnounce('opened');
      setCurrentCategory(name);
    }
  };

  const openFirstLevel = (num:number): void => {
    setAnnounce('opened');
    setMainCategory(num);
  };

  useEffect(() => {
    setMainCategory(menu.findIndex(m => m.route.substring(1) === pathname.split('/')[1]));

    menu.forEach(s => {
      const category: MenuItem | undefined = s.items?.find(c => c.pages.find(p => p.alias == pathname.split('/')[2] ));

      if (category && category._id.secondCategory)
        setCurrentCategory(category._id.secondCategory);
      });

  }, []);

  const firstLevelMenu = () => {
    return (
      <ul className={styles.firstLevelMenu}>
        {
          menu?.map((m, i:number) => (
            <li 
              className={cn(styles.firstLevelMenuItem, {
                [styles.firstLevelMenuItemActive]: mainCategory == i
              })} 
              key={m.id}
              onClick={() => openFirstLevel(i)}
            >
              {announce && <span role="log" className="visuallyHidden">{announce == 'opened' ? 'Развернуто' : 'Свернуто'}</span>}
              <div className={styles.firstLevelMenuItemLink}>
                {m.icon}
                <span>{m.name}</span>
              </div>

              { m.items && m.items?.length > 0 && secondLevelMenu(m.items, m.route, mainCategory == i)}
            </li>
          ))
        }
      </ul>
    );
  };
  
  const secondLevelMenu = (items: MenuItem[], route: string, active: boolean) => {
    return (
      <ul 
        className={cn(styles.secondLevelMenu, {
          [styles.secondLevelMenuActive]: active
        })}
        aria-expanded={active}
      >
        {announce && <span role="log" className="visuallyHidden">{announce == 'opened' ? 'Развернуто' : 'Свернуто'}</span>}
         { items.map((m: MenuItem, idx:number ) => (
           <li className={styles.secondLevelMenuItem} key={idx}>
             <button 
              className={styles.secondLevelMenuName}
              tabIndex={0} 
              onClick={() => openSecondMenu(m._id.secondCategory)}
              onKeyDown={(key: KeyboardEvent) => openSecondMenuKey(key, m._id.secondCategory)}
            >{m._id.secondCategory}</button>

             { thirdLevelMenu(m.pages, route, m._id.secondCategory === currentCategory) }
           </li>
         ))}
      </ul>
    );
  };
  
  const thirdLevelMenu = (menu: PageModel[], route: string, isOpened: boolean) => {
    return (
      <motion.ul 
        className={cn(styles.thirdLevelMenu, {
          [styles.thirdLevelMenuOpened]: isOpened
        })}
        layout
        variants={variants}
        initial={isOpened ? 'visible' : 'hidden'}
        animate={isOpened ? 'visible' : 'hidden'}
        aria-expanded={isOpened}
      >
        {
          menu?.map((m) => (
            <motion.li 
              className={cn(styles.thirdLevelMenuItem, {
                [styles.thirdLevelMenuItemCurrent]: `${route}/${m.alias}` == pathname
              })}
              key={m._id}
              variants={variantsChildren}
              initial={isOpened ? 'visible' : 'hidden'}
              animate={isOpened ? 'visible' : 'hidden'}
            >
              <Link href={`${route}/${m.alias}`}>{m.category.length > 21 ? m.category.substring(0, 21) + '..':m.category }</Link>
            </motion.li>
          ))
        }
      </motion.ul>
    );
  };

  return (
    <nav className={styles.menu} role="navigation">
      { firstLevelMenu() }
    </nav>
  );
};