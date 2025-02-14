import styles from "./HhBlock.module.css";
import { Htag } from '../../components/Htag/Htag';
import HhBlockProps from "../../interfaces/HhBlock.props";
import { Tag } from "@/components/Tag/Tag";
import Card from "@/components/Card/Card";
import Star from "./star.svg";
import { formattedPrice } from "@/helpers/helpers";

export default function HhBlock({title, count, juniorSalary, middleSalary, seniorSalary}: HhBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Htag tag={'h2'}>Вакансии - {title}</Htag>
        <Tag className={styles.tag} size={'m'} color={'red'}>hh.ru</Tag>
      </div>
      <div className={styles.cards}>

        <Card className={styles.mainCard} type={'white'}>
          <Htag tag={'h3'}>Всего вакансий</Htag>
          <p className={styles.count}>{count && count}</p>
        </Card>
        <Card className={styles.secondaryCard} type={'white'}>
          <div>
            <Htag tag={'h3'}>Начальный</Htag>
            <p className={styles.price}>{formattedPrice(juniorSalary)}</p>
            <div className={styles.rate}>
              <Star className={styles.filled}/>
              <Star/>
              <Star/>
            </div>
          </div>
          <div>
            <Htag tag={'h3'}>Средний</Htag>
            <p className={styles.price}>{formattedPrice(middleSalary)}</p>
            <div className={styles.rate}>
              <Star className={styles.filled}/>
              <Star className={styles.filled}/>
              <Star/>
            </div>
          </div>
          <div>
            <Htag tag={'h3'}>Профессионал</Htag>
            <p className={styles.price}>{formattedPrice(seniorSalary)}</p>
            <div className={styles.rate}>
              <Star className={styles.filled}/>
              <Star className={styles.filled}/>
              <Star className={styles.filled}/>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}