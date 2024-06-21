import React from "react";
import { Line, Avatar, RichTextEditor } from "./index";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { timeAgo } from "./timeAgo";
import backButton from "../assets/back-arrow.svg";

const mapStateToProps = (state) => ({
  commentGitIssues: state.gitIssueComment.commentGitIssues,
  addGitIssues: state.gitIssue.addGitIssues, // Add this line
});

function HeaderDetailPage({ commentGitIssues, addGitIssues }) {
  const { issueId } = useParams();
  const issue = addGitIssues.find((issue) => issue.id == issueId);

  return (
    <div className="px-[2.80rem]">
      <div className="sticky top-0 py-2 bg-[#1D232A] z-50">
        <div className="flex flex-col flex-wrap justify-end items-start sm:flex-row sm:items-center py-5 sm:justify-between">
          <h1 className="flex items-center text-white md:text-3xl font-semibold">
            <Link to={"/"}>
              <img className="h-8 pr-4" src={backButton} alt="" />
            </Link>
            {issue ? issue.text : "Issue Title"}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="">
            <span
              className="tooltipped tooltipped-e flex items-center text-white gap-1 px-3 py-1 rounded-full bg-[#238636]"
              aria-label="Open issue"
            >
              <svg
                className="octicon octicon-issue-opened open fill-white"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
              </svg>
              {"Open"}
            </span>
          </span>
          <span>{issue?.userName}</span>
          <span>{timeAgo(new Date(issue?.createdAt))}</span>
        </div>
        <div className="py-7">
          <Line />
        </div>
      </div>
      {commentGitIssues
        ?.filter((item) => item.issueId === issueId)
        ?.map((commentGitIssue) => (
          <div className="flex gap-1 pt-3" key={commentGitIssue.id}>
            <Avatar />
            <div className="flex items-start w-full">
              <div
                className="w-0 h-0 mt-4 
              border-t-[5px] border-t-transparent
              border-r-[7px] border-r-gray-200
              border-b-[5px] border-b-transparent"
              ></div>
              <div className="border border-gray-200 rounded-md w-full">
                <div className="flex items-center px-5 py-3 bg-slate-800 rounded-lg">
                  <h4 className="text-base text-white font-semibold">
                    {commentGitIssue.userName}
                  </h4>
                  <span className="text-xs text-gray-500 ml-2">
                    {timeAgo(new Date(commentGitIssue.createdAt))}
                  </span>
                </div>
                <Line />
                <div
                  className="text-white p-3"
                  dangerouslySetInnerHTML={{ __html: commentGitIssue.text }}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default connect(mapStateToProps)(HeaderDetailPage);
