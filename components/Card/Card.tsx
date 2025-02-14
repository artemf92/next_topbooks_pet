import CardProps from "@/interfaces/Card.props";
import classNames from "classnames";
import styles from "./Card.module.css";
import { ForwardedRef, forwardRef } from "react";

const Card = forwardRef(({className, children, type = 'white', ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div 
      className={classNames(className, styles.card, {
        [styles.blue]: type == 'blue'
      })} 
      ref={ref}
      {...props}
    >
      { children }
    </div>
  );
});

Card.displayName = 'Card';
export default Card;