import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo() {
  const [completed, setCompleted] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <div className="rounded flex items-center gap-3 bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue py-4 px-5 mb-4 md:py-5 md:px-6 md:gap-5 md:mb-6">
      <input
        type="checkbox"
        checked={completed}
        id=""
        onChange={() => setCompleted((prev) => !prev)}
      />
      <input
        className="bg-inherit text-xs -tracking-[0.2px] w-full text-lt-veryDarkGrayishBlue dark:text-dt-lightGrayishBlue outline-none md:text-lg"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        onKeyDown={(evt) => {
          if (evt.key === "Enter") {
            if (evt.target.value !== "") {
              dispatch(
                addTodo({
                  id: uuidv4(),
                  title,
                  completed,
                })
              );
            }
            setTitle("");
            setCompleted(false);
          }
        }}
      />
    </div>
  );
}
