import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import iconMoon from "../assets/icons/icon-moon.svg";
import iconSun from "../assets/icons/icon-sun.svg";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <span onClick={() => toggleTheme()}>
      {isDarkMode ? (
        <img src={iconSun} alt="Icon sun" className="cursor-pointer w-7 h-7" />
      ) : (
        <img
          src={iconMoon}
          alt="Icon moon"
          className="cursor-pointer w-7 h-7"
        />
      )}
    </span>
  );
};

export default ThemeToggleButton;
