import { Fragment, useEffect, useState } from "react";

import bgMobLight from "./images/bg-mobile-light.jpg";
import bgMobDark from "./images/bg-mobile-dark.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";

import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) setDarkTheme(darkMode === "true");
    else {
      const prefersDark: boolean = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkTheme(prefersDark);
    }
  }, []);

  return (
    <Fragment>
      <div
        className={
          darkTheme
            ? "relative z-0 min-h-screen dark bg-dt-veryDarkBlue"
            : "relative z-0 min-h-screen bg-lt-veryLightGrayishBlue"
        }
      >
        <div className="absolute -z-50 top-0 left-0 right-0 h-[12.5rem] md:h-[18.75rem]">
          <img
            className="md:hidden object-cover h-full w-full"
            src={darkTheme ? bgMobDark : bgMobLight}
            alt=""
          />
          <img
            className="hidden md:block object-cover h-full w-full"
            src={darkTheme ? bgDesktopDark : bgDesktopLight}
            alt=""
          />
        </div>

        <main className="w-full max-w-[33.75rem] mx-auto pt-12 px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-[1.625rem] tracking-[10px] font-bold text-white">
              TODO
            </h1>
            <div className="">
              <button
                className=""
                aria-label="switch theme"
                onClick={() => {
                  localStorage.setItem("darkMode", `${!darkTheme}`);
                  setDarkTheme((prev) => !prev);
                }}
              >
                {!darkTheme && <img className="" src={iconMoon} alt="" />}
                {darkTheme && <img className="" src={iconSun} alt="" />}
              </button>
            </div>
          </div>

          <div className="rounded flex items-center bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue py-3 px-5">
            <input
              className="bg-inherit text-xs -tracking-[0.2px]"
              type="text"
            />
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
