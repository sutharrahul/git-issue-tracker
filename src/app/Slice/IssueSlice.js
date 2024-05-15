import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  gitIssue: [],
};

export const gitIssueSlice = createSlice({
  name: gitIssue,
  initialState,

  reducers: {
    addGitIssue: (state, action) => {
      const gitIssue = {
        id: nanoid(),
        text: action.payload,
      };
      state.gitIssue.push(gitIssue);
    },
    addIssueTital: (state, action) => {
      const issueTital = {
        id: nanoid(),
        text: action.payload,
      };
      state.gitIssue.push(issueTital);
    },
  },
});

export const { addGitIssue, addIssueTital } = gitIssueSlice.actions;
export default gitIssueSlice.reducer;
