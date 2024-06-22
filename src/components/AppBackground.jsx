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
    <div className="w-full h-full flex flex-col bg-light-gray-50">
      <div className="h-[35vh]">
        {isMobileVersion ? (
          <img
            src="./public/images/bg-mobile-light.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="./public/images/bg-desktop-light.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="h-[65vh] bg-light-gray-50"></div>
    </div>
  );
};

export default AppBackground;
