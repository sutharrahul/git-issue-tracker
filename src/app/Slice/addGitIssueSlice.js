import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  addGitIssues: [
    {
      id: nanoid(),
      text: "Fix bug in user authentication",
      userName: "User1",
      createdAt: "1 month ago",
    },
    {
      id: nanoid(),
      text: "Add new feature to dashboard",
      userName: "user2",
      createdAt: "1 month ago",
    },
    {
      id: nanoid(),
      text: "Improve performance of API",
      userName: "User3",
      createdAt: "1 month ago",
    },
    {
      id: nanoid(),
      text: "Refactor codebase for better readability",
      userName: "User4",
      createdAt: "1 month ago",
    },
    {
      id: nanoid(),
      text: "Update dependencies to latest versions",
      userName: "User5",
      createdAt: "1 month ago",
    },
  ],
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
        createdAt: new Date().toISOString(),
      };
      state.addGitIssues.push(gitIssue);
    },
  },
});

export const { addGitIssue } = gitIssueSlice.actions;
export default gitIssueSlice.reducer;
