import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import debounce from 'debounce';

export interface Store {
  [key:string]: number
}

const createStore = () => {
  const payload: Store = {};
  const getValue = (pathname: string) => payload[pathname];
  const setValue = (pathname: string, value: number) => { payload[pathname] = value; };

  return { payload, getValue, setValue };
};

const store = createStore();

const ScrollHandler: FC = () => {
  const { pathname } = useLocation();

  // scroll handler
  const handleScroll = debounce(() => {
    const scrolled = window.scrollY;
    store.setValue(pathname, scrolled);
  }, 1000);

  // take manual control
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: store.getValue(pathname) || 0 });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
  return null;
};

export default ScrollHandler;
