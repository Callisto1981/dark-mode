import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(false);
useEffect({
  if(darkMode === false){
      setDarkMode(!darkMode)
  } else {
      setDarkMode()
  }
},[])
};
export default useDarkMode;
