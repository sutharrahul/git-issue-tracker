import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const gitIssues = useSelector((state) => state.gitIssue.addGitIssues);
  const issueCount = gitIssues.length;
  console.log(issueCount);

  return (
    <div className="px-8">
      <div className="navbar bg-[#161b22] border border-[#30363d] rounded-t-md">
        <div className="flex-1 gap-2">
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
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-white text-lg font-semibold">
                {issueCount} Issues
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
              </svg>
              <h2 className="text-white text-lg font-semibold"> Close</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
