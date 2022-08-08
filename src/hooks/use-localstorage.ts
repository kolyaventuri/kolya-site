import * as React from 'react';

interface LocalStorage {
  get: typeof window.localStorage.getItem;
  set: typeof window.localStorage.setItem;
}

type LocalStorageResult<T> = [T | undefined, (value: T) => void, boolean];

export const useLocalStorage = <T = unknown>(
  name: string,
  initial: T,
): LocalStorageResult<T> => {
  const [value, setValueFn] = React.useState<T>();
  const getRef = React.useRef<LocalStorage['get']>();
  const setRef = React.useRef<LocalStorage['set']>();

  const setValue = (newValue: T) => {
    if (setRef.current) {
      const stringValue =
        typeof newValue === 'string'
          ? (newValue as unknown as string)
          : JSON.stringify(newValue);

      setRef.current(name, stringValue);
      setValueFn(newValue);
    }
  };

  React.useEffect(() => {
    const getCurrentValues = () => {
      if (!getRef.current) {
        return;
      }

      const readValue = getRef.current(name);
      if (readValue !== null) {
        let parsed: T;
        try {
          parsed = JSON.parse(readValue) as T;
        } catch {
          // Not a json-parsable value
          parsed = readValue as unknown as T;
        }

        setValueFn(parsed);
      }
    };

    const initialize = () => {
      if (getRef.current?.(name) === null) {
        setValue(initial);
      }
    };

    if (window?.localStorage) {
      getRef.current = window.localStorage.getItem.bind(window.localStorage);
      setRef.current = window.localStorage.setItem.bind(window.localStorage);

      initialize();
      getCurrentValues();
    }
  }, [name, initial]);

  return [value, setValue, value === undefined];
};
