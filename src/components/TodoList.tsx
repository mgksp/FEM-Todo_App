import { useDispatch, useSelector } from "react-redux";
import { iTodo } from "../data/todoData";
import { FilterButtons } from ".";

import iconCross from "../images/icon-cross.svg";
import { deleteTodo } from "../redux/todos";

export default function TodoList() {
  const todos = useSelector(
    (state: { todos: { value: iTodo[] } }) => state.todos.value
  );
  const todosLeft = todos.reduce(
    (total, curr) => (!curr.completed ? (total += 1) : total),
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue -tracking-[0.2px] text-xs mb-4 md:text-lg">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-b-[1px] border-lt-veryLightGrayishBlue dark:border-dt-veryDarkGrayishBlue2 p-5 flex items-center gap-3 md:px-6 md:gap-5"
        >
          <input type="checkbox" checked={todo.completed} id="" />
          <div
            className={
              todo.completed
                ? "w-full text-lt-lightGrayishBlue dark:text-dt-veryDarkGrayishBlue line-through"
                : "w-full text-lt-veryDarkGrayishBlue dark:text-dt-lightGrayishBlue"
            }
          >
            {todo.title}
          </div>
          <button
            className=""
            aria-label="delete"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <img src={iconCross} alt="" />
          </button>
        </div>
      ))}
      <div className="flex items-center justify-between p-5 text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue md:text-sm">
        <p>{todosLeft} items left</p>
        <div className="hidden md:block">
          <FilterButtons />
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
}
