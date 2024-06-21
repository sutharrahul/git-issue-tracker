import React from "react";
import { IssueItem, Navbar, Searchbar } from "./components";
import AddGitIssue from "./components/AddGitIssue";

function HomePage() {
  return (
    <>
      <IssueItem />
      <AddGitIssue />
    </>
  );
}

export default HomePage;
