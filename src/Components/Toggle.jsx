import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../../src/index.css";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="p-4 flex items-center gap-3">
      <span className="text-lg font-semibold">
        {/* {darkMode ? "Dark Mode" : "Light Mode"} */}
      </span>
      {/* Toggle Switch with Icons */}
      <div
        className={`relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all duration-300 ${
          darkMode ? "bg-amber-700" : ""
        }`}
        onClick={() => setDarkMode((prevMode) => !prevMode)}
      >
        {/* Sun Icon */}
        <FaSun className="absolute left-2 text-yellow-500 text-lg" />
        {/* Moon Icon */}
        <FaMoon className="absolute right-2 text-gray-800 dark:text-white text-lg" />

        {/* Toggle Button */}
        <div
          className={`bg-white w-7 h-7 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
            darkMode ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Toggle;
