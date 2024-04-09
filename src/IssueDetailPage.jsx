import React from "react";
import RichTextEditor from "./components/RichTextEditor";
import HeaderDetailPage from "./components/HeaderDetailPage";

function IssueDetailPage() {
  return (
    <div>
      <HeaderDetailPage />
      <RichTextEditor />
    </div>
  );
}

export default IssueDetailPage;
