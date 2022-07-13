import { createSlice } from "@reduxjs/toolkit";

const darkMode = localStorage.getItem("darkMode");
const initialState = darkMode
  ? localStorage.getItem("darkMode") === "true"
    ? true
    : false
  : window.matchMedia("(prefers-color-scheme: dark)").matches;

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    changeTheme: (state, action) => {
      localStorage.setItem("darkMode", `${action.payload}`);
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
