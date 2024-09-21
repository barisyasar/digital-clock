// Theme Button
import { Icon } from "@iconify/react";
import { DARK_ICON, LIGHT_ICON } from "../../constants/icons";
import useThemeStore from "../../store/useThemeStore";
import useTheme from "../../hooks/useTheme";

function ThemeButton() {
  const { isDarkTheme, toggleTheme } = useThemeStore();

  useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? <Icon icon={LIGHT_ICON} /> : <Icon icon={DARK_ICON} />}
    </button>
  );
}

export default ThemeButton;
