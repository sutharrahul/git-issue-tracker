// // store.js
// import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

// const todosSlice = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({ id: nanoid(), text: action.payload, completed: false });
//     },
//     // toggleTodo: (state, action) => {
//     //   const todo = state.find((todo) => todo.id === action.payload);
//     //   if (todo) {
//     //     todo.completed = !todo.completed;
//     //   }
//     // },
//   },
// });

// const store = configureStore({
//   reducer: {
//     todos: todosSlice.reducer,
//   },
// });

// const { addTodo, toggleTodo } = todosSlice.actions;

// export { addTodo, toggleTodo, store };

import { configureStore } from "@reduxjs/toolkit";
import gitIssueReducer from "./Slice/IssueSlice";

export const store = configureStore({
  reducer: gitIssueReducer,
});
