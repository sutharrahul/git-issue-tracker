// issueItem.jsx
import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { timeAgo } from "./timeAgo"; // Adjust the import path as needed

function IssueItem() {
  const gitIssues = useSelector((state) => state.gitIssue.addGitIssues);

  return (
    <div className="px-8">
      {gitIssues.map((gitIssue) => (
        <div
          key={gitIssue.id}
          className="flex items-center border border-[#30363d] py-3 px-4"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="tooltipped tooltipped-e" aria-label="Open issue">
                <svg
                  className="octicon octicon-issue-opened open fill-green-500"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
              </span>

              <Link
                to={`/issue/${gitIssue.id}`}
                className="gap-4 text-white font-semibold hover:text-blue-500 hover:underline cursor-pointer"
              >
                {gitIssue.text}
              </Link>
              <Badge />
            </div>
            <div>
              <p className="text-sm pt-2">
                #01 Status (Open) Time ({timeAgo(new Date(gitIssue.createdAt))})
                by UserName ({gitIssue.userName})
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IssueItem;
