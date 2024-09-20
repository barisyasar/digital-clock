// Theme Button
import { Icon } from "@iconify/react";
import { DARK_ICON, LIGHT_ICON } from "../../constants/icons";
import useThemeStore from "../../store/useThemeStore";
import useTheme from "../../hooks/useTheme";

function ThemeButton() {
  const { isDarkTheme, toggleTheme } = useThemeStore();

  useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkTheme ? <Icon icon={DARK_ICON} /> : <Icon icon={LIGHT_ICON} />}
    </button>
  );
}

export default ThemeButton;
