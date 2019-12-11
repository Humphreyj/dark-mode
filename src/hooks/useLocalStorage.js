import { useState } from 'react';

export const useLocalStorage = (key,initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;

    });
    const setValue = value => {
        //save State
        setStoredValue(value);
        //Save to Local Storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}