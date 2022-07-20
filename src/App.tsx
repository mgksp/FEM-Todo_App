import { AddTodo, FilterButtons, Footer, Header, TodoList } from "./components";
import { useSelector } from "react-redux";

import bgMobLight from "./images/bg-mobile-light.jpg";
import bgMobDark from "./images/bg-mobile-dark.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";

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
      <section
        aria-label="bg images"
        className="absolute -z-50 top-0 left-0 right-0 h-[12.5rem] md:h-[18.75rem]"
      >
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
      </section>

      <div className="min-h-screen grid grid-rows-[1fr_min-content]">
        <main className="w-full h-full max-w-[33.75rem] mx-auto pt-10 px-6 md:px-0 md:pt-[4.875rem]">
          <Header />
          <AddTodo />
          <TodoList />

          <div className="md:hidden">
            <FilterButtons />
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
