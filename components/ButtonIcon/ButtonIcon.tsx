import classNames from "classnames";
import { ButtonIconProps, icons } from "../../interfaces/ButtonIcon.props";
import styles from './ButtonIcon.module.css';
import { motion } from 'motion/react';

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];

  return (
    <motion.button
      whileHover={{scale: 1.10}}
      whileTap={{ scale: 0.9 }}
      className={classNames(className, styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
      })} 
      {...props}
    >
      <IconComponent />
    </motion.button>
  );
};