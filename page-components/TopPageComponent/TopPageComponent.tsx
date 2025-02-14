'use client';

import { TopPageComponentProps } from "../../interfaces/PageComponents.props";
import styles from "./TopPageComponent.module.css";
import { Htag } from '../../components/Htag/Htag';
import { Tag } from '../../components/Tag/Tag';
import HhBlock from "../../components/HhBlock/HhBlock";
import Advantages from "../../components/Advantages/Advantages";
import TagsBlock from "../../components/TagsBlock/TagsBlock";
import { Product } from '@/interfaces/Product.props';
import Sort from "@/components/Sort/Sort";
import { SortEnum } from "@/interfaces/Sort.props";
import { KeyboardEvent, useEffect, useReducer, useRef, useState } from "react";
import { sortReducer } from "@/components/Sort/sort.reducer";
import ProductCard from "@/components/ProductCard/ProductCard";
import classNames from "classnames";
import { useReducedMotion } from "motion/react";

export default function TopPageComponent({ firstCategory, page, products}: TopPageComponentProps): JSX.Element {
  const [{sort, products: sortedProducts}, dispatchSort] = useReducer(sortReducer, { sort: SortEnum.Rating, products });
  const [showedSkipLink, setShowedSkipLink] = useState<boolean>(false);
  const [productsLoaded, setProductsLoaded] = useState<boolean>(false);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    dispatchSort({type: SortEnum.Rating});
    setProductsLoaded(true);
  }, [])

  const setSort = (sort: SortEnum.Rating | SortEnum.Price): void => {
    dispatchSort({ type: sort });
  };

  const onSkipLinkKey = (key: KeyboardEvent): void => {
    if (key.code == 'Space' || key.code == 'Enter') {
      bodyRef.current?.focus();
    }
    
    setShowedSkipLink(false);
  }

  return (
    <div tabIndex={0} className={styles.wrapper} ref={bodyRef}>
      <a
        tabIndex={1}
        className={classNames(styles.skipLink, {
          [styles.skipLinkActive]: showedSkipLink
        })}
        ref={skipLinkRef}
        onKeyDown={onSkipLinkKey}
        onFocus={() => setShowedSkipLink(true)}
      >Перейти к содержимому</a>
      <div className={styles.header}>
        <Htag tag={'h1'}>{page && page.title}</Htag>
        <Tag
          className={styles.tagCount}
          size={'m'}
          color={'gray'}
          aria-label={products?.length + ' элементов'}
        >{products && products.length}</Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div role="list">
        { 
          productsLoaded && (
            sortedProducts && sortedProducts.length > 0 && sortedProducts.map((p: Product) => <ProductCard role="listitem" key={p._id} product={p} layout={!shouldReduceMotion}/>)
          )
        }
      </div>

      { firstCategory == 0 && page && page?.hh && <HhBlock title={page.category} {...page.hh}/>}

      {page?.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} seoText={page.seoText}/>}
      {page?.tags && page.tags.length && <TagsBlock title={page?.tagsTitle} tags={page?.tags}/>}
    </div>
  );
}