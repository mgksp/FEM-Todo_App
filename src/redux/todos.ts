import { createSlice } from "@reduxjs/toolkit";
import { iTodo, todoData } from "../data/todoData";

const isTodoExists = localStorage.getItem("todos");
const initialState: iTodo[] = isTodoExists
  ? JSON.parse(localStorage.getItem("todos") || "[]")
  : todoData;

export const todoSlice = createSlice({
  name: "todos",
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    updateTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload) todo.completed = !todo.completed;
      });
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    clearCompletedTodos: (state) => {
      state.value = state.value.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    reorderTodos: (state, action) => {
      const temp = state.value[action.payload.from];
      state.value.splice(action.payload.from, 1);
      state.value.splice(action.payload.to, 0, temp);
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  clearCompletedTodos,
  reorderTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
