'use client';

import { IRatingProps } from '../../interfaces/Rating.props';
import StarIcon from './star.svg';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styles from  './Rating.module.css';
import cn from 'classnames';

export const Rating = ( { className, rating = 0, isEditable = false, setRating, error, ...props}:IRatingProps ):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<HTMLSpanElement[] | null>([]);

  const constructRating = (currentRating: number): void => {
    const tmpRatingArray = ratingArray.map((r: JSX.Element, i: number): JSX.Element => (
        <>
          <StarIcon 
            className={cn(styles.starIcon, {
              [styles.filled]: i < currentRating,
              [styles.edit]: isEditable,
            })} 
            key={i}
          />
        </>
      ));

    setRatingArray(tmpRatingArray);
  };

  const changeDisplay = (value: number): void => {
    if (!isEditable) return;

    constructRating(value);
  };

  const handleKey = (e: KeyboardEvent): void => {
    if (!isEditable) {
      return;
    }
  
    if (e.code == 'ArrowUp' || e.code == 'ArrowRight') {
      e.preventDefault();
      
      if (setRating) {
        setRating(rating < 5 ? (rating + 1) : 5);
      }
      if (ratingArrayRef.current) {
        ratingArrayRef.current[rating]?.focus();
      }
    } else if (e.code == 'ArrowDown' || e.code == 'ArrowLeft') {
      e.preventDefault();
  
      if (setRating) {
        setRating(rating > 1 ? (rating - 1) : 1);
      }
      if (ratingArrayRef.current) {
        ratingArrayRef.current[rating-2]?.focus();
      }
    }
  };

  const computedTabIndex = ():number => {
    if (!isEditable) {
      return -1;
    }

    return 0;
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div 
      className={cn(className, styles.ratingWrapper, {
        [styles.error]: error
      })}
      {...props}
    >
      {
        ratingArray.map((r, i) => <span
          tabIndex={computedTabIndex()}
          className={styles.star}
          key={i}
          onKeyDown={handleKey}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => isEditable && setRating && setRating(i + 1)}
          ref={(el) => {
            if (el && ratingArrayRef.current) {
              ratingArrayRef.current.push(el);
            }
          }}
          role='slider'
          aria-label={isEditable ? 'Укажите рейтинг' : 'Рейтинг ' + rating}
          aria-invalid={!!error}
          // aria-valuemin={isEditable ? 1 : ''}
          // aria-valuemax={isEditable ? 5 : ''}
          // aria-valuenow={isEditable ? rating : ''}
        >{r}</span>)
      }
      { error && <span role='alert' className={styles.errorText}>{error.message}</span>}
    </div>
  );
};
