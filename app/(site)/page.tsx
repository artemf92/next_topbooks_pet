import styles from "./globals.module.css";
import type { Metadata } from 'next';
// import { getMenu } from "@/api/menu";

export const metadata: Metadata = {
  title: 'Home Page | Artem Frolov',
  description: 'Home page of Artem Frolov',
};

export default function Home(): JSX.Element {
  
  return (
    <div className={styles.page}>
      Главная страница
    </div>
  );
}
