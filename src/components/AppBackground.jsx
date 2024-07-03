import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/themeContext";

const AppBackground = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isMobileVersion, setIsMobileVersion] = useState(
    window.innerWidth < 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileVersion(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileImageStyle = "w-full h-full min-h-32 object-cover";
  const desktopImageStyle = "w-full h-full object-cover";

  return (
    <div className="w-full h-full flex flex-col bg-light-gray-50 dark:bg-dark-blue-900">
      <div className="h-[30vh] md:h-[35vh] pointer-events-none select-none">
        {isDarkMode ? (
          <img
            src={
              isMobileVersion
                ? "./images/bg-mobile-dark.jpg"
                : "./images/bg-desktop-dark.jpg"
            }
            alt="Background image"
            className={isMobileVersion ? mobileImageStyle : desktopImageStyle}
          />
        ) : (
          <img
            src={
              isMobileVersion
                ? "./images/bg-mobile-light.jpg"
                : "./images/bg-desktop-light.jpg"
            }
            alt="Background image"
            className={isMobileVersion ? mobileImageStyle : desktopImageStyle}
          />
        )}
      </div>
      <div className="h-[70vh] md:h-[65vh]"></div>
    </div>
  );
};

export default AppBackground;
