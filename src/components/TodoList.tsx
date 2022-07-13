import { useSelector } from "react-redux";
import { iTodo } from "../data/todoData";
import iconCross from "../images/icon-cross.svg";

export default function TodoList() {
  const todos = useSelector(
    (state: { todos: { value: iTodo[] } }) => state.todos.value
  );

  return (
    <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue -tracking-[0.2px] text-xs mb-4 md:text-lg">
      {todos.map((todo) => (
        <div className="border-b-[1px] border-lt-veryLightGrayishBlue dark:border-dt-veryDarkGrayishBlue2 p-5 flex items-center gap-3 md:px-6 md:gap-5">
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
      <div className="flex items-center justify-between p-5 text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue md:text-sm">
        <p>5 items left</p>
        <div className="hidden md:block">
          <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue flex items-center justify-center gap-4 -tracking-[0.2px] text-sm font-bold p-4 md:p-0">
            <button className="text-brightBlue">All</button>
            <button className="">Active</button>
            <button className="">Completed</button>
          </div>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
}
