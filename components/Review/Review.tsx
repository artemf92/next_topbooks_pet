import { ReviewProps } from "@/interfaces/Review.props";
import styles from "./Review.module.css";
import UserIcon from "./user.svg";
import { Rating } from "../Rating/Rating";
import { format} from "date-fns";
import { ru } from '../../node_modules/date-fns/locale/ru';
import { typograf } from "@/helpers/helpers";
import { ForwardedRef, forwardRef } from "react";
import { motion } from 'motion/react';

const ReviewComponent = forwardRef(({review}: ReviewProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const { name, title, createdAt, rating, description} = review;
  const placeholder = typograf('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam a corporis facilis tempora quis quo ullam est asperiores architecto iste!');

  return (
    <div className={styles.review} ref={ref}>
      <UserIcon className={styles.icon} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        {title}
      </div>
      <div className={styles.created}>{format(createdAt, 'dd MMMM yyyy', {locale: ru})} г.</div>
      <Rating tabIndex={-1} rating={rating} className={styles.rating} />
      <div className={styles.description}>{description.length <= 3 ? placeholder : typograf(description) }</div>
    </div>
  );
});

ReviewComponent.displayName = "ReviewComponent";

const Review = motion(ReviewComponent);
Review.displayName = 'Review';

export default Review;