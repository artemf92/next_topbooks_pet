import { IParagraphProps } from "../../interfaces/Paragraph.props";
import styles from './Paragraph.module.css';
import classNames from "classnames";

export const Paragraph = ({ size = 'm', children, className, ...props }:IParagraphProps ):JSX.Element => {
  const pClass = classNames(styles.p, className, {
    [styles.small]: size == 's',
    [styles.medium]: size == 'm',
    [styles.large]: size == 'l',
  });
  return (
      <p className={pClass} {...props}>{ children }</p>
  );
};