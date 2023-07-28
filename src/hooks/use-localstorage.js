import React, { useState } from "react";

/*
    я подключил библиотеку i18next к react, у меня задача есть папка locales внутри есть две папки /kg /ru от туда  мы получаем
    
    
    найти топ 5 API ключей
*/

const useLocalStorage = (key, defualtValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const value = localStorage.getItem(key);

            if (value) {
                return JSON.parse(value);
            } else {
                localStorage.setItem(key, JSON.stringify(defualtValue));
                return defualtValue;
            }
        } catch(error) {
            return defualtValue;
        }
    }) 

    const setValue = (newValue) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (error) {
            console.log(error)
        }
        setStoredValue(newValue)
    }

    return [storedValue, setValue];
}

export default useLocalStorage;