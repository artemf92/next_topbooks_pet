import { TextareaProps } from "@/interfaces/Textarea.props";
import styles from "./Textarea.module.css";
import classNames from "classnames";

export default function Textarea({ className, rows = 3, error, ...props }:TextareaProps): JSX.Element {
  return (
    <div className={classNames(className, styles.fieldTextarea)}>
      <textarea className={classNames(styles.textarea, {
        [styles.error]: error
      })} rows={rows} {...props}/>
      { error && <span className={styles.errorText}>{error.message}</span>}
    </div>
  );
}