import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference and initialize darkMode accordingly
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Apply the dark class to the body tag if darkMode is true, else remove it
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 text-lg font-semibold bg-gray-200 dark:bg-gray-800 dark:text-white text-black rounded-lg shadow-md transition-all duration-300"
        aria-label={`Switch to ${darkMode ? "Light" : "Dark"} Mode`}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
