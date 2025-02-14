import styles from "./TagsBlock.module.css";
import { TagsBlockProps } from '../../interfaces/PageComponents.props';
import { Htag } from "@/components/Htag/Htag";
import { Tag } from "@/components/Tag/Tag";

export default function TagsPageComponent({title = 'Получаемые навыки', tags}:  TagsBlockProps ) {
  return (
    <section className={styles.wrap}>
      <Htag classes={styles.title} tag={'h2'}>{title}</Htag>
      <div className={styles.inner}>
        {
          tags?.map((t) => <a href="#" key={t}><Tag color={'primary'}>{t}</Tag></a>)
        }
      </div>
    </section>
  );
}