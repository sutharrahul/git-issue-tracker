import React from "react";
import { IssueItem, Navbar, Searchbar } from "./components";
import AddGitIssue from "./components/AddGitIssue";

function HomePage() {
  return (
    <>
      <Searchbar />
      <Navbar />
      <IssueItem />
      <AddGitIssue />
    </>
  );
}

export default HomePage;
