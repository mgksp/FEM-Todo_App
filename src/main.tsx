import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/theme";
import todosReducer from "./redux/todos";
import filtersReducer from "./redux/filters";
import "./index.css";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todosReducer,
    filters: filtersReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
