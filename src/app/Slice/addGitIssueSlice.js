import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  addGitIssues: [],
};

export const gitIssueSlice = createSlice({
  name: "addGitIssues",
  initialState,

  reducers: {
    addGitIssue: (state, action) => {
      const gitIssue = {
        id: nanoid(),
        text: action.payload,
        userName: prompt("Enter User Name"),
      };
      state.addGitIssues.push(gitIssue);
    },
  },
});

export const { addGitIssue } = gitIssueSlice.actions;
export default gitIssueSlice.reducer;
