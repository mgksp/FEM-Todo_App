import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iTodo } from "../data/todoData";
import { FilterButtons, Todo } from ".";

import { clearCompletedTodos, reorderTodos } from "../redux/todos";
import { filter } from "../enums/filters";

export default function TodoList() {
  const [source, setSource] = useState<number | null>(null);
  const [destination, setDestination] = useState<number | null>(null);

  const todos = useSelector(
    (state: { todos: { value: iTodo[] } }) => state.todos.value
  );
  const todosLeft = todos.reduce(
    (total, curr) => (!curr.completed ? (total += 1) : total),
    0
  );

  const activeFilter = useSelector(
    (state: { filters: { value: filter } }) => state.filters.value
  );

  const filteredList = () => {
    if (activeFilter === filter.ALL) return todos;
    else if (activeFilter === filter.ACTIVE) {
      return todos.filter((todo) => !todo.completed);
    } else if (activeFilter === filter.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }
  };

  const dispatch = useDispatch();

  const onDragStart = (idx: number) => {
    console.log("source", idx);
    setSource(idx);
  };

  const onDragEnter = (idx: number) => {
    console.log("hovering over", idx);
    setDestination(idx);
    console.log({ source, destination });
  };

  const onDragEnd = () => {
    if (activeFilter !== (filter.ACTIVE || filter.COMPLETED)) {
      if (source !== destination) {
        dispatch(reorderTodos({ from: source, to: destination }));
      }
    }
  };

  return (
    <div className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue -tracking-[0.2px] text-xs mb-4 md:text-lg">
      {filteredList()?.map((todo, idx) => (
        <Todo
          key={todo.id}
          todo={todo}
          dragStart={() => onDragStart(idx)}
          dragEnter={() => onDragEnter(idx)}
          dragEnd={onDragEnd}
        />
      ))}
      <div className="flex items-center justify-between p-5 text-lt-darkGrayishBlue dark:text-dt-darkGrayishBlue md:text-sm">
        <p>{todosLeft} items left</p>
        <div className="hidden md:block">
          <FilterButtons />
        </div>
        <button onClick={() => dispatch(clearCompletedTodos())}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
