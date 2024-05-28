import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  gitIssues: [],
};

export const gitIssueSlice = createSlice({
  name: "gitIssues",
  initialState,

  reducers: {
    addGitIssue: (state, action) => {
      const gitIssue = {
        id: nanoid(),
        text: action.payload,
        userName: prompt("Enter User Name"),
      };
      state.gitIssues.push(gitIssue);
    },
    // addIssueTital: (state, action) => {
    //   const issueTital = {
    //     id: nanoid(),
    //     text: action.payload,
    //   };
    //   state.gitIssue.push(issueTital);
    // },
  },
});

export const { addGitIssue } = gitIssueSlice.actions;
export default gitIssueSlice.reducer;
