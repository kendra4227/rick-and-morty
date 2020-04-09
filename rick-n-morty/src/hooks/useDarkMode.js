// step 7: create a useDarkMode costum hook to change your site to dark
// use your local storage hook in here that way when a user reloads the site,
// it will keep their dark mode/light mode status
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [values, setValues] = useLocalStorage("dark-mode", false); // if you switch this to true, it will be dark mode when you reload
  const body = document.querySelector("body");

  useEffect(() => {
    if (values) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });

  return [values, setValues];
};

export default useDarkMode;