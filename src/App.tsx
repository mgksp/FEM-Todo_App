import { Fragment, useEffect, useState } from "react";

import bgMobLight from "./images/bg-mobile-light.jpg";
import bgMobDark from "./images/bg-mobile-dark.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";

import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

import iconCross from "./images/icon-cross.svg";

import { todoData } from "./data/todoData";

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

        <main className="w-full max-w-[33.75rem] mx-auto pt-10 px-6">
          <div className="flex justify-between items-center mb-7">
            <h1 className="text-[1.625rem] tracking-[10px] font-bold text-white">
              TODO
            </h1>
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

          <div className="rounded flex items-center gap-3 bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue py-4 px-5 mb-4">
            <input type="checkbox" id="" />
            <input
              className="bg-inherit text-xs -tracking-[0.2px] w-full text-lt-veryDarkGrayishBlue dark:text-dt-lightGrayishBlue"
              type="text"
              placeholder="Create a new todo..."
            />
          </div>

          <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue -tracking-[0.2px] text-xs mb-4">
            {todoData.map((todo) => (
              <div className="border-b-[1px] border-lt-veryLightGrayishBlue dark:border-dt-veryDarkGrayishBlue2 p-5 flex items-center gap-3">
                <input type="checkbox" id="" />
                <div
                  className={
                    todo.completed
                      ? "w-full text-lt-lightGrayishBlue dark:text-dt-veryDarkGrayishBlue line-through"
                      : "w-full text-lt-veryDarkGrayishBlue dark:text-dt-lightGrayishBlue"
                  }
                >
                  {todo.title}
                </div>
                <button className="" aria-label="delete">
                  <img src={iconCross} alt="" />
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between p-5 text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue">
              <p>5 items left</p>
              <button>Clear Completed</button>
            </div>
          </div>

          <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue flex items-center justify-center gap-4 -tracking-[0.2px] text-sm font-bold p-4">
            <button className="text-brightBlue">All</button>
            <button className="">Active</button>
            <button className="">Completed</button>
          </div>

          <div className="text-sm -tracking-[0.2px] py-10 text-center text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue">
            Drag and drop to reorder list
          </div>
        </main>

        <footer className="text-xs text-center py-1 text-lt-veryDarkGrayishBlue dark:text-dt-darkGrayishBlue">
          Challenge by&nbsp;
          <a
            className="text-sm font-bold text-brightBlue"
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a
            className="text-sm font-bold text-brightBlue"
            href="https://www.github.com/mgksp"
            rel="noreferrer"
            target="_blank"
          >
            Prabu
          </a>
          .
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
