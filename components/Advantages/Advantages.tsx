import { Htag } from "@/components/Htag/Htag";
import styles from "./Advantages.module.css";
import Check from "./check.svg";
import { AdvantagesProps } from "@/interfaces/PageComponents.props";
import { typograf } from "@/helpers/helpers";

export default function Advantages({advantages, seoText}: AdvantagesProps) {
  return (
    <section className={styles.wrapper}>
      <Htag tag={'h2'} classes={styles.title}>Преимущества</Htag>
      <div className={styles.inner}>
        {
          advantages && advantages.length > 0 && advantages.map(({title, description, _id}) => (
            <div className={styles.item} key={_id}>
              <Check className={styles.icon}/>
              <Htag classes={styles.itemTitle} tag={'h3'}>{title}</Htag>
              <p className={styles.text}>{description}</p>
            </div>
          ))
        }
      </div>
      {
        seoText && <div dangerouslySetInnerHTML={{__html: typograf(seoText)}} className={styles.seoText} />
      }
    </section>
  );
}