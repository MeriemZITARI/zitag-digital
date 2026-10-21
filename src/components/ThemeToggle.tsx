import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // Récupération du thème initial (dracula par défaut)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dracula";
  });

  useEffect(() => {
    // Application du thème sur la balise <html>
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dracula" ? "dracula-light" : "dracula"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer de thème"
      className="btn btn-ghost btn-circle text-primary hover:bg-base-300/50 transition-colors"
    >
      {theme === "dracula" ? (
        <Sun className="w-6 h-6 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-6 h-6 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;