import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Badge from "./Badge";
import { timeAgo } from "./timeAgo";
import Navbar from "./Navbar";
import IssueIcon from "./icons/IssueIcon";

function IssueListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const gitIssues = useSelector((state) => state.gitIssue.addGitIssues);

  const filteredIssues = gitIssues.filter((issue) =>
    issue.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Searchbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Navbar />
      <div className="px-8">
        {filteredIssues.map((gitIssue, index) => (
          <div
            key={gitIssue.id}
            className="flex items-center border border-[#30363d] py-3 px-4"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className="tooltipped tooltipped-e"
                  aria-label="Open issue"
                >
                  <IssueIcon />
                </span>

                <Link
                  to={`/issue/${gitIssue?.id}`}
                  className="gap-4 text-white font-semibold hover:text-blue-500 hover:underline cursor-pointer"
                >
                  {gitIssue.text}
                </Link>
                {gitIssue.isNew && <Badge />}
              </div>
              <div>
                <p className="text-sm pt-2 ">
                  <span className="font-semibold text-blue-400">
                    #{index + 1}
                  </span>
                  by
                  <span className=" text-blue-400"> @{gitIssue?.userName}</span>
                  <span> {timeAgo(new Date(gitIssue?.createdAt))}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IssueListPage;
