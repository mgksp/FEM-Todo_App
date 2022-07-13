import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/theme";

import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: { theme: { value: boolean } }) => state.theme.value
  );

  return (
    <div className="flex justify-between items-center mb-7 md:mb-8">
      <h1 className="text-[1.625rem] tracking-[10px] font-bold text-white md:text-[2.5rem] md:tracking-[15px]">
        TODO
      </h1>
      <button
        className="w-5 md:w-7"
        aria-label="switch theme"
        onClick={() => dispatch(changeTheme(!theme))}
      >
        {!theme && <img className="" src={iconMoon} alt="" />}
        {theme && <img className="" src={iconSun} alt="" />}
      </button>
    </div>
  );
}
