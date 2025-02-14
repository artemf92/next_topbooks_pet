import classNames from "classnames";
import styles from "./Footer.module.css";
import { IFooterProps } from "../../interfaces/Footer.props";

const year = new Date().getFullYear();

export const Footer = ({className, ...props}:IFooterProps): JSX.Element => {
  const footerClasses = classNames(styles.footer, className);
  return (
    <footer className={footerClasses} {...props}>
      <div className={styles.copyright}>
        OwlTop © 2020 - {year} Все права защищены
      </div>
      <ul className={styles.links}>
        <li><a href="#">Пользовательское соглашение</a></li>
        <li><a href="#">Политика конфиденциальности</a></li>
      </ul>
    </footer>
  );
};