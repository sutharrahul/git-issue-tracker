import { configureStore } from "@reduxjs/toolkit";
import commentGitIssueReducer from "./Slice/commentIssueSlice";
import gitIssueReducer from "./Slice/addGitIssueSlice";

export const store = configureStore({
  reducer: {
    gitIssueComment: commentGitIssueReducer,
    gitIssue: gitIssueReducer,
  },
});
