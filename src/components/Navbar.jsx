import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const gitIssues = useSelector((state) => state.gitIssue.addGitIssues);
  const issueCount = gitIssues.length;
  console.log(issueCount);

  return (
    <div className="px-8">
      <div className="navbar bg-[#161b22] border border-[#30363d] rounded-t-md">
        <div className="flex-1 gap-2 ml-3">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-issue-opened fill-white"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
          <div className="flex items-center gap-3 px-">
            <div>
              <h2 className="text-white text-lg font-semibold">
                {issueCount} Issues
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
