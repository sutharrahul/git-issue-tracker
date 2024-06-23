# Low-Level Design (LLD) for Git Issue Tracker

<b>Overview</b> <br>
The Git Issue Tracker application allows users to create and manage issues, as well as comment on existing issues. This LLD details the functionality for navigating from the Issue List page to the Issue Detail page and adding comments on an issue.

## Routing Configuration

The routing configuration is set up in the main.jsx file to handle navigation between different pages of the application.

<b> main.jsx</b>

```Javascript
    <Route path="/" element={<App />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="issue/:issueId" element={<IssueDetailPage />} />
    </Route>
```

## Components

### 1. IssueListPage

The IssueListPage component is responsible for displaying the list of issues. When a user clicks on an issue, they are navigated to the IssueDetailPage.

```Javascript

function IssueListPage() {
  // some states goes here...
  return (
    <div>
      <Searchbar/>
      <Navbar />
        {filteredIssues?.map((gitIssue, index) => (
          <IssueItem data={gitIssue} key={index}>
        ))}
    </div>
  );
}

export default IssueListPage;
```

### 2. IssueDetailPage Component

The IssueDetailPage component displays the details of a selected issue and its comments. It includes the RichTextEditor component for adding new comments.

```Javascript

const mapStateToProps = (state) => ({
  commentGitIssues: state.gitIssueComment.commentGitIssues,
  addGitIssues: state.gitIssue.addGitIssues, // Add this line
});

function IssueDetailPage ({ commentGitIssues, addGitIssues }) {
  const { issueId } = useParams();
  const issue = addGitIssues.find((issue) => issue.id == issueId);

  return (
    <div >
      <BackIcon/>
      <IssueTitle/>
      <OpenIssueIcon/>
      <IssueMetaData/>
      <br/>
      {commentGitIssues
        ?.filter((item) => item.issueId === issueId)
        ?.map((commentGitIssue) => (
          <IssueComment data={commentGitIssue}/>
        ))}
        <RichTextEditor/>
    </div>
  );
}

export default connect(mapStateToProps)(HeaderDetailPage);

```

## Redux Setup

### 1. Issues Slice

The issuesSlice manages the state of the issues.

<b> addGitIssueSlice.js

```Javascript
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
        createdAt: new Date().toISOString(),
        isNew: true,
      };
      state.addGitIssues.push(gitIssue);
    },
  },
});

export const { addGitIssue } = gitIssueSlice.actions;
export default gitIssueSlice.reducer;

```

### 2. Comments Slice

<b> commentIssueSlice.js

```Javascript
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
```

### 3. Store Configuration

The store.js file configures the Redux store.

```Javascript
import { configureStore } from "@reduxjs/toolkit";
import commentGitIssueReducer from "./Slice/commentIssueSlice";
import gitIssueReducer from "./Slice/addGitIssueSlice";

export const store = configureStore({
  reducer: {
    gitIssueComment: commentGitIssueReducer,
    gitIssue: gitIssueReducer,
  },
});
```

## Conclusion

This low-level design details the implementation of the Git Issue Tracker application, focusing on the interaction between components, routing, and state management. The application enables users to navigate from the Issue List page to the Issue Detail page, where they can add comments using a rich text editor. The state of issues and comments is managed using Redux Toolkit, ensuring a scalable and maintainable architecture.
