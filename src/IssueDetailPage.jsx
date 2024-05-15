import React from "react";
import { HeaderDetailPage, RichTextEditor, SideInfo } from "./components";

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
