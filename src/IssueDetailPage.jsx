import React from "react";
import { HeaderDetailPage, RichTextEditor, SideInfo } from "./components";

function IssueDetailPage() {
  return (
    <div className="flex justify-between">
      <div className="w-[70%] sm:w-[100%]">
        <HeaderDetailPage />
        <RichTextEditor />
      </div>
      <div className="py-10 hidden lg:inline w-[30%]">
        <SideInfo />
      </div>
    </div>
  );
}

export default IssueDetailPage;
