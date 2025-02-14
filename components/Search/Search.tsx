'use client';

import { SearchProps } from "@/interfaces/Search.props";
import styles from "./Search.module.css";
import classNames from "classnames";
import Input from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIcon from "./search.svg";
import { KeyboardEvent, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ className, ...props }: SearchProps): JSX.Element {
  const [search, setSearch] = useState<string | null>('');
  const query = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchHandler = ():void => {
    router.push(`/search?q=` + search);
  };

  const handleKeyDownSearch = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      router.push(`/search?q=` + search);
    }
  };

  useEffect(():void => {
    if (query.get('q') && pathname == '/search')
      setSearch(query.get('q'));
  }, []);

  return (
    <div className={classNames(className, styles.search )} {...props} role="search">
      <Input 
        className={styles.input} 
        placeholder="Поиск..."
        value={search ?? ''}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyDownSearch(e)}
      />
      <Button
        appearance={'primary'}
        className={styles.button}
        onClick={searchHandler}
        aria-label="Искать на сайте"
      >
        <SearchIcon />
      </Button>
    </div>
  );
};