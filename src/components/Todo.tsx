import { Draggable } from "react-beautiful-dnd";
import { Checkbox } from ".";
import { iTodo } from "../data/todoData";
import iconCross from "../images/icon-cross.svg";

interface TodoProps {
  idx: number;
  todo: iTodo;
  updateTodo: VoidFunction;
  deleteTodo: VoidFunction;
}
export default function Todo({ idx, todo, updateTodo, deleteTodo }: TodoProps) {
  return (
    <Draggable draggableId={todo.id} index={idx}>
      {(provided) => {
        return (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="border-b-[1px] border-lt-veryLightGrayishBlue dark:border-dt-veryDarkGrayishBlue2 p-5 grid grid-cols-[min-content_1fr_min-content] place-items-center gap-3 md:px-6 md:gap-5"
          >
            <Checkbox
              id={todo.id}
              checked={todo.completed}
              handleChange={updateTodo}
            />
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
              className="w-3 md:w-5"
              aria-label="delete"
              onClick={deleteTodo}
            >
              <img src={iconCross} alt="" />
            </button>
          </div>
        );
      }}
    </Draggable>
  );
}
