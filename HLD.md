# High-Level Design (HLD) for Git Issue Tracker

<b>Overview</b> <br>
The Git Issue Tracker is a front-end application developed to facilitate the management of issues within a project. The application allows users to create new issues, comment on existing ones, and view all issues in a responsive and user-friendly interface. The core technologies used in this project include React, Tailwind CSS, DaisyUI, and Redux Toolkit.

## 1. Client-Side Architecture

<li> <b>React:</b>  The core framework for building the user interface.</li>
<li> <b>Redux Toolkit:</b> Manages the global state for issues and comments. </li>
<li><b>Tailwind CSS:</b> Provides utility-first CSS for styling.</li>
<li><b>DaisyUI:</b> Supplies pre-designed UI components based on Tailwind CSS. </li>
<li><b>Draft.js: </b>A rich text editor framework used for the comment section. </li>

## 2. Component Structure

 <ul>
    <li><b>App:</b> The main component that includes routing and layout structure.</li>
    <li><b>LandingPage:</b>  The initial page users see when they open the application.</li>
    <li><b>IssueListPage:</b> Displays the list of all issues.</li>
    <li><b>IssueDetailPage:</b> Shows details of a selected issue and its comments.</li>
    <li><b>RichTextEditor:</b> A rich text editor for adding and formatting comments.</li>
    <li><b>Footer:</b> A footer component displayed on every page.</li>
 </ul>

### Component Interaction

### 1. App Component

<li>Initializes the application.</li>
<li>Configures routes for different pages using React Router.</li>
<li>Provides a common layout structure.</li>
<li>Renders the Footer component and an Outlet for nested routes.</li>

### 2. LandingPage Component

<li>Serves as the entry point of the application.</li>
<li>Contains navigation links to the Issue List page.</li>

### 3. IssueListPage Component

<li>Fetches and displays a list of issues from the Redux store.</li>

### 4. IssueDetailPage Component

<li>Displays the details of a selected issue.</li>
<li>Fetches and displays comments associated with the issue from the Redux store.</li>
<li>Includes the RichTextEditor for adding new comments.</li>

### 5. CommentEditor Component

<li>Utilizes Draft.js to provide a rich text editor for adding comments</li>
<li>Allows users to format their comments with rich text features.</li>

## Routing Configuration

Routing is configured in the main.jsx file to handle navigation between different pages of the application.

## State Management

#### 1. Redux Store Structure

<b>Issues Slice</b>

<li><b>State:</b> List of issues.
<li><b>Actions:</b> addIssue
<li><b>Reducers:</b> Handles state changes based on actions.

## UI Design

1. Tailwind CSS
2. DaisyUI

## User Interaction Flow

<li>1. Creating an Issue</li>
<li>2. Commenting on an Issue</li>
