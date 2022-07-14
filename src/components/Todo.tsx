import { iTodo } from "../data/todoData";
import iconCross from "../images/icon-cross.svg";

interface TodoProps {
  todo: iTodo;
  updateTodo: VoidFunction;
  deleteTodo: VoidFunction;
}
export default function Todo({ todo, updateTodo, deleteTodo }: TodoProps) {
  return (
    <div className="border-b-[1px] border-lt-veryLightGrayishBlue dark:border-dt-veryDarkGrayishBlue2 p-5 flex items-center gap-3 md:px-6 md:gap-5">
      <input type="checkbox" checked={todo.completed} onChange={updateTodo} />
      <div
        className={
          todo.completed
            ? "w-full text-lt-lightGrayishBlue dark:text-dt-veryDarkGrayishBlue line-through"
            : "w-full text-lt-veryDarkGrayishBlue dark:text-dt-lightGrayishBlue"
        }
      >
        {todo.title}
      </div>
      <button className="" aria-label="delete" onClick={deleteTodo}>
        <img src={iconCross} alt="" />
      </button>
    </div>
  );
}
