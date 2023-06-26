import React from "react";
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";

function LightMode() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="duration-500 hover:scale-110">
      <button onClick={handleThemeSwitch}>
        {theme === "light" ? (
          <BsMoon size={30} color="black" />
        ) : (
          <BsFillBrightnessHighFill size={30} color="white" />
        )}
      </button>
    </div>
  );
}

export default LightMode;
