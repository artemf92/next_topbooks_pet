'use client';

import styles from "../globals.module.css";
import { Htag } from '@/components/Htag/Htag';
import { Button } from "@/components/Button/Button";
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Rating } from "@/components/Rating/Rating";
import { Tag } from '@/components/Tag/Tag';
import { useState } from "react";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";

// export const metadata: Metadata = {
//   title: 'Компоненты | Artem Frolov',
//   description: 'Компоненты для сайта Artem Frolov',
// }

export default function Components():JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Htag tag="h1" classes={'page-title'}>Hello world</Htag>
        <Button appearance={'primary'}>Кнопка</Button>
        <Button appearance={'outline'} arrow={'right'}>Кнопка</Button>
        <Button appearance={''} arrow="down">Кнопка</Button>
        <Paragraph size={'s'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quos, amet nesciunt libero nihil commodi accusantium maxime ratione vel necessitatibus!</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quos, amet nesciunt libero nihil commodi accusantium maxime ratione vel necessitatibus!</Paragraph>
        <Paragraph size={'l'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quos, amet nesciunt libero nihil commodi accusantium maxime ratione vel necessitatibus!</Paragraph>
        <Tag>Default</Tag>
        <Tag size={'m'} color={'gray'}>Gray</Tag>
        <Tag color={'red'}>Red</Tag>
        <Tag color={'primary'}>Primary</Tag>
        <Tag color={'green'}>Green</Tag>
        <Rating rating={rating} isEditable setRating={setRating}/>
        <Input placeholder="test" />
        <Textarea placeholder="asdasd asdasd2 asdas" />
      </main>
    </div>
  );
}
