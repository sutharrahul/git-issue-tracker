import React from "react";
import { IssueListPage } from "./components";
import AddGitIssue from "./components/AddGitIssue";

function LandingPage() {
  return (
    <>
      <IssueListPage />
      <AddGitIssue />
    </>
  );
}

export default LandingPage;
