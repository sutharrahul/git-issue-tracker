import React from "react";
import { HeaderDetailPage, RichTextEditor, SideInfo } from "./components";
import { useParams } from "react-router-dom";

function IssueDetailPage() {
  const { issueId } = useParams();

  return (
    <div className="flex justify-between pb-[80px]">
      <div className="w-[70%] sm:w-[100%]">
        <HeaderDetailPage />
        <RichTextEditor issueId={issueId} />
      </div>
      <div className="py-10 hidden lg:inline w-[30%]">
        <div className="sticky top-[-18px]">
          <SideInfo />
        </div>
      </div>
    </div>
  );
}

export default IssueDetailPage;
