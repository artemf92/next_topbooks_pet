'use client';

import styles from "./Up.module.css";
import { motion, useAnimate, useMotionValueEvent, useScroll } from "motion/react";
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon';

export default function Up(): JSX.Element {
  const [scope, animate] = useAnimate();
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    animate(scope.current, { opacity: latest / document.body.scrollHeight });
  });

  const scrollToTop = (): void => {
    document.querySelector('body')?.scrollIntoView({
      behavior: 'smooth',
      block: "start",
    });
  };

  return (
    <motion.div
      className={styles.up} 
      ref={scope}
      initial={{opacity: 0}}
    >
      <ButtonIcon appearance={'primary'} icon={'up'} onClick={() => scrollToTop()} aria-label="К началу страницы" />
    </motion.div>
  );
}