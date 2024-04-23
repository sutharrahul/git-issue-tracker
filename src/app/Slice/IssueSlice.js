import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  editorState: EditorState.createEmpty(),
};

export const gitIssueSlice = createSlice({
  name: "gitIssue",
  initialState,

  reducers: {
    addGitIssue(state, action) {
      state.editorState = action.payload;
    },
  },
});

export const { addGitIssue } = gitIssueSlice.actions;
export default gitIssueSlice.reducer;
