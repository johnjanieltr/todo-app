import { useEffect, useState } from "react";

const AppBackground = () => {
  const [isMobileVersion, setIsMobileVersion] = useState(
    window.innerWidth < 640
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileVersion(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-light-gray-50 dark:bg-dark-blue-900">
      <div className="h-[30vh] md:h-[35vh]">
        {isMobileVersion ? (
          <img
            src="./images/bg-mobile-light.jpg"
            alt="image"
            className="w-full h-full min-h-32 object-cover"
          />
        ) : (
          <img
            src="./images/bg-desktop-light.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="h-[70vh] md:h-[65vh]"></div>
    </div>
  );
};

export default AppBackground;
