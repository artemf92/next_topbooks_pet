'use client';

import { formattedPrice, plural, typograf } from "@/helpers/helpers";
import Card from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "@/interfaces/ProductCard.props";
import { Button } from "../Button/Button";
import classNames from "classnames";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const ProductCardComponent = forwardRef(({product}: ProductCardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setReviewOpened] = useState<boolean>(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity:  shouldReduceMotion ? 'initial' : 0,
      maxHeight:  0,
      transition: shouldReduceMotion ? {} : {
        when: 'afterChildren',
        staggerChildren: 0.5,
      }
    },
    visible: {
      opacity: 1,
      maxHeight: shouldReduceMotion ? 'initial' : 1000,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1 
      }
    }
  };

  const variantsChildren = {
    hidden: {
      opacity:  shouldReduceMotion ? 'initial' : 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      delay: custom * 0.2,
      duration: 0.3,
    })
  };

  const scrollToReviews = () => {
    setReviewOpened(true);

    reviewsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={styles.productCard} ref={ref} tabIndex={0}>
      <Card className={styles.product}>
        <div className={styles.logo}><Image src={product.image} alt={product.title} /></div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.tags}>{product.categories && product.categories.map((cat) => <Tag size={'s'} color={'default'} key={cat}>{cat}</Tag>)}</div>
        <div className={styles.gap}></div>
        <div className={styles.price}>
          <span className="visuallyHidden">Цена </span><span>{formattedPrice(product.price)}</span>
          {product.oldPrice && <span className={styles.oldPrice}><span className="visuallyHidden">скидка </span><Tag color={'green'} size={'s'} className={styles.oldPrice}>-{formattedPrice(product.oldPrice - product.price)}</Tag></span>}
        </div>
        <div className={styles.priceTitle} aria-hidden={true}>цена</div>
        <div className={styles.credit}><span className="visuallyHidden">В кредит </span>{formattedPrice(product.credit)}/<span className={styles.creditPeriod}>мес</span></div>
        <div className={styles.creditTitle} aria-hidden={true}>в кредит</div>
        <div className={styles.rating}><Rating rating={product.reviewAvg} /></div>
        <div className={styles.ratingTitle}>
          <a 
            href="#ref"
            onClick={scrollToReviews}
          >{product.reviewCount + plural(product.reviewCount, ' отзыв', ' отзыва', ' отзывов')}</a>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.description}>{product.description && typograf(product.description)}</div>
        <div className={styles.chars}>{product.characteristics.length > 0 && product.characteristics.map(c => 
          (
            <div className={styles.charsItem} key={c.name}>
              <div className={styles.charsTitle}>{c.name}</div>
              <div className={styles.dash}></div>
              <div className={styles.charsValue}>{c.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.features}>{product.tags.length > 0 && product.tags.map(t => <Tag key={t} color={'default'} size={'s'}>{t}</Tag>)}</div>
        <div className={styles.advantages}>
          {
            product?.advantages && (
              <div className={styles.advantagesItem}>
                <div className={styles.advantagesTitle}>Преимущества</div>
                <div className={styles.advantagesText}>{product.advantages && typograf(product.advantages)}</div>
              </div>
            )
          }
          {
            product?.disadvantages && (
              <div className={styles.disadvantagesItem}>
                <div className={styles.disadvantagesTitle}>Недостатки</div>
                <div className={styles.disadvantagesText}>{product.disadvantages && typograf(product.disadvantages)}</div>
              </div>
            )
          }
        </div>
        <div className={styles.hr2}></div>
        <div className={styles.actions}>
          <Button appearance={'primary'}>Узнать подробнее</Button>
          <Button
            appearance={'outline'}
            arrow={'right'}
            onClick={() => setReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >Читать отзывы</Button>
        </div>
      </Card>
      <motion.div tabIndex={isReviewOpened ? 0 : -1} variants={variants} initial={'hidden'} animate={isReviewOpened ? 'visible' : 'hidden'}>
        <Card 
          type={'blue'} 
          className={classNames(styles.reviews, {
            // [styles.opened]: isReviewOpened,
            // [styles.closed]: !isReviewOpened,
          })} 
          ref={reviewsRef}
        >
          {product.reviews && product.reviews.length > 0 
            ? product.reviews.map((r, i) => 
              <motion.div
                key={r._id}
                variants={variantsChildren}
                initial="hidden" // Начальное состояние
                animate={isReviewOpened ? "visible" : "hidden"} // Управление анимацией
                custom={i}
              >
                <Review review={r} />
              </motion.div>
            ) 
            : <div className={styles.emptyReviews}>Оставьте отзыв первым!</div>}
          <ReviewForm pruductId={product._id} isShow={isReviewOpened} />
        </Card>
      </motion.div>
    </div>
  );
});

ProductCardComponent.displayName = 'ProductCardComponent';

const ProductCard = motion(ProductCardComponent);
ProductCard.displayName = 'ProductCard';

export default ProductCard;