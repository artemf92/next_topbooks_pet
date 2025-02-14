import { useEffect, useState } from "react";

export default function useScrollY(): number {
  const [y, setY] = useState<number>(0);
  const isBrowser = typeof window != 'undefined';

  const handleScroll = (): void => {
    setY(isBrowser ? window.scrollY : 0);
  }
  
  useEffect(() => {
    console.log('test')
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  return y;
};