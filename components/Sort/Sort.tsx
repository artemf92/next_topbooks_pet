import classNames from "classnames";
import styles from "./Sort.module.css";
import SortIcon from "./sort.svg";
import { SortEnum, SortProps } from "@/interfaces/Sort.props";

export default function Sort({ sort, setSort }: SortProps): JSX.Element {
  // const setSortByKey = (key: KeyboardEvent, sort: SortEnum) => {
  //   if (key.code == 'Space' || key.code == 'Enter') {
  //     setSort(sort);
  //   }
  // }

  return (
    <div className={styles.sort}>
      <div className={'visuallyHidden'} id="sort">Сортировка</div>
      <button 
        tabIndex={0}
        className={classNames(styles.item, {
          [styles.active]: sort == SortEnum.Rating
        })}
        onClick={() => setSort(SortEnum.Rating)}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.icon} />
        <span id="rating">По рейтингу</span>
      </button>
      <button 
        tabIndex={0}
        className={classNames(styles.item, {
          [styles.active]: sort == SortEnum.Price
        })}
        onClick={() => setSort(SortEnum.Price)}
        aria-selected={sort == SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.icon} />
        <span id="price">По цене</span>
      </button>
    </div>
  );
}