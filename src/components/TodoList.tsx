import { useDispatch, useSelector } from "react-redux";
import { iTodo } from "../data/todoData";
import { FilterButtons, Todo } from ".";

import { deleteTodo, updateTodo } from "../redux/todos";

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
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={() => dispatch(updateTodo(todo.id))}
          deleteTodo={() => dispatch(deleteTodo(todo.id))}
        />
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
