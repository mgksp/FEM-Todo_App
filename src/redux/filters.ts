import { createSlice } from "@reduxjs/toolkit";
import { filter } from "../enums/filters";

const initialState: filter = filter.ALL;

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { value: initialState },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
