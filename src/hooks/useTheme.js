// useTheme
import { useEffect } from "react";
import useThemeStore from "../store/useThemeStore";

const useTheme = () => {
  const { isDarkTheme } = useThemeStore();

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);
};

export default useTheme;
