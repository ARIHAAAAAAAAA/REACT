import { useState } from "react";

// hook counter
export function useCounter() {

  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount((prevCount)=> prevCount + 1);
  };
  return {
    count,
    increment,
  };
}

// hook localStorage

const useLocalStorage = (key: string, defaultValue: string) => {
   
  const [data, setData] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  // Function to update our localStorage and our state
  const setLocal = (key: string, value:string) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };

  // Function to remove the value from local storage and reset state
  const removeStoredValue = (moshe: string) => {
    localStorage.removeItem(moshe);
    setData(defaultValue);
  };
  const printLocal = ()=>{
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(localStorage.key(i)));
    }
  }

  return [data, setLocal, removeStoredValue,printLocal];
};

export default useLocalStorage;




