import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "./Slice/IssueSlice2";

export const store = configureStore({
  reducer: editorSlice,
});
