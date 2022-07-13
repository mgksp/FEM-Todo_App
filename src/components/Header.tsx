import React from "react";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

export default function Header({
  darkTheme,
  setDarkTheme,
}: {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-between items-center mb-7 md:mb-8">
      <h1 className="text-[1.625rem] tracking-[10px] font-bold text-white md:text-[2.5rem] md:tracking-[15px]">
        TODO
      </h1>
      <button
        className="w-5 md:w-7"
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
  );
}
