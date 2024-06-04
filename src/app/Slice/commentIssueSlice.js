import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  commentGitIssues: [],
};

export const commentGitIssueSlice = createSlice({
  name: "commentGitIssues",
  initialState,

  reducers: {
    addGitIssueComment: (state, action) => {
      const gitIssue = {
        id: nanoid(),
        text: action.payload,
        userName: prompt("Enter User Name"),
      };
      state.commentGitIssues.push(gitIssue);
    },
  },
});

export const { addGitIssueComment } = commentGitIssueSlice.actions;
export default commentGitIssueSlice.reducer;