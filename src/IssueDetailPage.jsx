import React from "react";
import RichTextEditor from "./components/RichTextEditor";
import HeaderDetailPage from "./components/HeaderDetailPage";
import SideInfo from "./components/SideInfo";

function IssueDetailPage() {
  return (
    <div className="flex justify-between">
      <div>
        <HeaderDetailPage />
        <RichTextEditor />
      </div>
      <div className="py-10 hidden lg:inline">
        <SideInfo />
      </div>
    </div>
  );
}

export default IssueDetailPage;
