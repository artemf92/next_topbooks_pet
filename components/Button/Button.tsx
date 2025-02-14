import { ButtonProps } from "../../interfaces/Button.props";
import styles from './Button.module.css';
import classNames from "classnames";
import ArrowIcon from './icons/arrow.svg'; 

export const Button = ({ appearance, children, className, arrow, disabled, ...props }: ButtonProps): JSX.Element => {
  const buttonClass = classNames(
    styles.button,
    className,
    {
      [styles.primary]: appearance === 'primary',
      [styles.outline]: appearance === 'outline',
      [styles.default]: appearance === '',
      [styles.disabled]: disabled
    }
  );

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowIcon className={styles.icon} />
      )}
    </button>
  );
};