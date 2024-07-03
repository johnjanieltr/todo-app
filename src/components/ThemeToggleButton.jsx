import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import moonIcon from "../assets/icons/moon-icon.svg";
import sunIcon from "../assets/icons/sun-icon.svg";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const buttonImgStyle = "w-7 h-7 cursor-pointer select-none";

  return (
    <button type="button" onClick={() => toggleTheme()}>
      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt={isDarkMode ? "Sun icon" : "Moon icon"}
        className={buttonImgStyle}
      />
    </button>
  );
};

export default ThemeToggleButton;
