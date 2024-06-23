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
        issueId: action.payload.issueId,
        text: action.payload.comment,
        userName: prompt("Enter User Name"),
        createdAt: new Date().toISOString(),
      };
      state.commentGitIssues.push(gitIssue);
    },
  },
});

export const { addGitIssueComment } = commentGitIssueSlice.actions;
export default commentGitIssueSlice.reducer;
