import { createSlice } from "@reduxjs/toolkit";
import { iTodo, todoData } from "../data/todoData";

// const initialState: iTodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
const initialState: iTodo[] = todoData;

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
  },
});

export const { addTodo, deleteTodo, updateTodo, clearCompletedTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
