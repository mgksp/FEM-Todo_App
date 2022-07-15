import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { iTodo } from "../data/todoData";
import { FilterButtons, Todo } from ".";

import {
  clearCompletedTodos,
  deleteTodo,
  reorderTodos,
  updateTodo,
} from "../redux/todos";
import { filter } from "../enums/filters";

export default function TodoList() {
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    dispatch(reorderTodos({ from: source.index, to: destination.index }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="rounded bg-lt-veryLightGray dark:bg-dt-veryDarkDesaturatedBlue -tracking-[0.2px] text-xs mb-4 md:text-lg"
            >
              {filteredList()?.map((todo, idx) => (
                <Todo
                  key={todo.id}
                  idx={idx}
                  todo={todo}
                  updateTodo={() => dispatch(updateTodo(todo.id))}
                  deleteTodo={() => dispatch(deleteTodo(todo.id))}
                />
              ))}
              {provided.placeholder}
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
        }}
      </Droppable>
    </DragDropContext>
  );
}
