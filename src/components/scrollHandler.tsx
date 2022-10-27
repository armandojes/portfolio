import { debounce } from 'debounce';
import { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// set scroll restoration manual only once
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export interface Store {
  [key:string]: number
}

const ScrollHandler: FC = () => {
  const store = useRef<Store>({});
  const { pathname } = useLocation();

  const handleScroll = debounce(() => {
    store.current[pathname] = window.pageYOffset;
  }, 100);

  // restore scroll
  useEffect(() => {
    const prevScrolled = store.current[pathname] || 0;
    window.scrollTo(0, prevScrolled);
  }, [pathname]);

  // add event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
};

export default ScrollHandler;
