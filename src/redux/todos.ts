import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "../data/todoData";

export const todoSlice = createSlice({
  name: "todos",
  initialState: { value: todoData },
  reducers: {
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
