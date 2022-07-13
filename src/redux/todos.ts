import { createSlice } from "@reduxjs/toolkit";
import { iTodo, todoData } from "../data/todoData";

const initialState: iTodo[] = todoData || [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
