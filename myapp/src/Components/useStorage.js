import { useState } from 'react';

const useStorage = (key, initialValue="") => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    sessionStorage.setItem(key ,JSON.stringify(newValue));
  };

  return [value, updateValue];
};

export default useStorage;