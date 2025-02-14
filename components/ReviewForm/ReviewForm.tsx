import { ReviewFormProps, ReviewsFormData } from "@/interfaces/ReviewForm.props";
import styles from "./ReviewForm.module.css";
import Input from "../Input/Input";
import { Rating } from '@/components/Rating/Rating';
import Textarea from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { typograf } from "@/helpers/helpers";
import { Controller, useForm } from "react-hook-form";
import { API } from "@/app/(site)/api";
import { useState } from "react";
import classNames from "classnames";
import { Htag } from '@/components/Htag/Htag';
import CloseIcon from "./close.svg";

export default function ReviewForm({pruductId, isShow}: ReviewFormProps): JSX.Element {
  const {register, control, formState: {errors}, handleSubmit, reset} = useForm<ReviewsFormData>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const text = typograf("* Перед публикацией отзыв пройдет предварительную модерацию и проверку");

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch(API.review.createDemo, {
        method: 'POST',
        body: JSON.stringify({...data, pruductId}),
      });

      if (!res.ok) {
        setError('Что-то пошло не так');
        return;
      }

      setIsSuccess(true);

      reset();
    } catch (err: ErrorEvent | any) {
      setError(err.message);
    }
  });

  return (
    <form
      className={styles.reviewForm}
      onSubmit={onSubmit}
    >
      <Input
        tabIndex={isShow ? 0 : -1}
        placeholder={'Имя'}
        className={styles.input}
        {...register('name', { 
          required: {value: true, message: 'Имя обязательно'},
          minLength: {value: 2, message: 'Имя должно быть длиннее'}
        })}
        error={errors.name}
        aria-invalid={!!errors.name}
      />
      <Input
        tabIndex={isShow ? 0 : -1}
        placeholder={'Заголовок отзыва'}
        className={styles.input}
        {...register('title', { 
          required: {value: true, message: 'Заголовок обязательен'},
          minLength: {value: 3, message: 'Заголовок должен быть длиннее'}
        })}
        error={errors.title}
        aria-invalid={!!errors.title}
      />
      <span className={styles.ratingTitle}>Оценка:</span>
      <Controller
        name={'rating'}
        control={control}
        rules={{
          required: {value: true, message: 'Оценка обязательна'},
          min: {value: 1, message: 'Не меньше еденицы'},
          max: {value: 5, message: 'Не больше 5'},
        }}
        render={({field}) => 
          <Rating 
            // tabIndex={isShow ? 0 : -1}
            rating={field.value}
            isEditable={true}
            className={styles.rating}
            setRating={field.onChange}
            error={errors.rating}
            aria-invalid={!!errors.rating}
            {...field} 
          />}
      />
      <Textarea
        tabIndex={isShow ? 0 : -1}
        placeholder={'Текст отзыва'}
        className={styles.textarea}
        {...register('description', { 
          required: { value: true, message: 'Текст отзыва обязателен'},
          minLength: { value: 20, message: 'Текст слишком короткий'}
        })}
        error={errors.description}
        aria-label="Текст отзыва"
        aria-invalid={!!errors.description}
      />
      <div className={styles.submit}>
        <Button type={'submit'} appearance={'primary'}>Отправить</Button>
        <span className={styles.text}>{text}</span>
      </div>
      {
        isSuccess && (
          <div role="alert" className={classNames(styles.result, {
            [styles.success]: isSuccess
          })}>
            <Htag tag={'h4'}>Ваш отзыв отправлен</Htag>
            <p>Спасибо, Ваш отзыв будет опубликован после проверки.</p>
            <button aria-label="Закрыть уведомление" className={styles.close} onClick={() => setIsSuccess(false)} >
              <CloseIcon />
            </button>
          </div>
        )
      }
      {
        error && (
          <div role="alert" className={classNames(styles.result, {
            [styles.error]: error
          })}>
            { error }
            <button aria-label="Закрыть уведомление" className={styles.close} onClick={() => setError(undefined)}>
              <CloseIcon />
            </button>
          </div>
        )
      }
      
    </form>
  );
};