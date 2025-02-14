import { Htag } from "@/components/Htag/Htag";
import styles from "./layout.module.css";
import { Button } from "@/components/Button/Button";
import Link from "next/link";

export default function Error404(): JSX.Element {
  
  return (
    <div className={styles.errorWrapper}>
      <Htag tag="h1"> ОШИБКА 404</Htag>
      <p>Упс, что-то пошло не так. Страница не найдена. </p>
      <Link href={'/'}><Button appearance="primary">Перейти на главную</Button></Link>
    </div>
  );
}
