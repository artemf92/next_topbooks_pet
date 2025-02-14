import { HtagProps } from "../../interfaces/Htag.props";
import styles from './Htag.module.css';

export const Htag = ({tag, classes, children}: HtagProps): JSX.Element => {
  switch(tag) {
    case 'h1':
      return (<h1 className={`${classes} ${styles.h1}`}>{children}</h1>);
    case 'h2':
      return (<h2 className={`${classes} ${styles.h2}`}>{children}</h2>);
    case 'h3':
      return (<h3 className={`${classes} ${styles.h3}`}>{children}</h3>);
    case 'h4':
      return (<h4 className={`${classes} ${styles.h4}`}>{children}</h4>);
    default: 
      return (<h2 className={`${classes} ${styles.h2}`}>{children}</h2>);
  }
};