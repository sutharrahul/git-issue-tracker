import { configureStore } from "@reduxjs/toolkit";
import gitIssueSlice from "./Slice/IssueSlice";

export const store = configureStore({
  reducer: gitIssueSlice,
});
