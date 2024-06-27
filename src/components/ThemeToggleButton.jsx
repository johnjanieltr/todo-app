import { useEffect, useState } from "react";
import iconMoon from "../assets/icons/icon-moon.svg";
import iconSun from "../assets/icons/icon-sun.svg";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <span onClick={() => toggleTheme()}>
      {isDarkMode ? (
        <img
          src={iconSun}
          alt="Icon sun"
          className="cursor-pointer w-7 h-7"
        />
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
