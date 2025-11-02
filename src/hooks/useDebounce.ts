import { useEffect, useRef, useState } from 'react';

export function useDebounce(value, delay) {
  const [state, setState] = useState(value);
  const ref = useRef();
  const debounceFn = (f, timer) => {
    let id;

    return (...args) => {
      clearInterval(id);
      id = setTimeout(() => {
        f(...args);
      }, timer);
    };
  };

  const fn = debounceFn((val) => {
    setState(val);
  }, delay);
  useEffect(() => {
    const val = fn(value);
    setState(val);
  }, [value]);

  return state;
}
