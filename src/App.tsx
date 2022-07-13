import bgMobLight from "./images/bg-mobile-light.jpg";
import bgMobDark from "./images/bg-mobile-dark.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";

import { Footer, Header, TodoList } from "./components";
import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector(
    (state: { theme: { value: boolean } }) => state.theme.value
  );

  return (
    <div
      className={
        darkTheme
          ? "relative z-0 dark bg-dt-veryDarkBlue"
          : "relative z-0 bg-lt-veryLightGrayishBlue"
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

      <div className="min-h-screen grid grid-rows-[1fr_min-content]">
        <main className="w-full h-full max-w-[33.75rem] mx-auto pt-10 px-6 md:px-0 md:pt-[4.875rem]">
          <Header />

          <div className="rounded flex items-center gap-3 bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue py-4 px-5 mb-4 md:py-5 md:px-6 md:gap-5 md:mb-6">
            <input type="checkbox" id="" />
            <input
              className="bg-inherit text-xs -tracking-[0.2px] w-full text-lt-veryDarkGrayishBlue dark:text-dt-lightGrayishBlue outline-none md:text-lg"
              type="text"
              placeholder="Create a new todo..."
            />
          </div>

          <TodoList />

          <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue flex items-center justify-center gap-4 -tracking-[0.2px] text-sm font-bold p-4 md:hidden">
            <button className="text-brightBlue">All</button>
            <button className="">Active</button>
            <button className="">Completed</button>
          </div>

          <div className="text-sm -tracking-[0.2px] py-10 text-center text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue">
            Drag and drop to reorder list
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
