import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  /* siempre inicializado en null */
  const refHeader = useRef(null);

  useEffect(() => {
    console.log("dark mode");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      //console.log(refHeader.current);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className=" container mx-auto px-4 md:max-w-xl" ref={refHeader}>
      <div className="flex justify-between pt-8">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
          TODO
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <SunIcon className="text-white"></SunIcon>
          ) : (
            <MoonIcon className="text-white"></MoonIcon>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
