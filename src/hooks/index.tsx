import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
