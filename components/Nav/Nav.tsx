import { INav } from "../../interfaces/Nav.props";
import styles from "./Nav.module.css";

export const Nav = ({...props}: INav): JSX.Element => {
  return (
    <nav className={styles.nav} {...props}>
      <ul>
        <li>Главная</li>
        <li>Тест</li>
      </ul>
    </nav>
  );
};