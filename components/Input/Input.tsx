import { InputProps } from "@/interfaces/Input.props";
import styles from "./Input.module.css";
import classNames from "classnames";

export default function Input({ className, error, ...props }:InputProps): JSX.Element {
  return (
    <div className={classNames(className, styles.fieldInput)}>
      <input className={classNames(styles.input, {
        [styles.error]: error
      })} {...props}/>
      { error && <span role="alert" className={styles.errorText}>{error.message}</span>}
    </div>
  );
}