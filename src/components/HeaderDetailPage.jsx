import React from "react";
import { Line, Avatar, RichTextEditor } from "./index";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { timeAgo } from "./timeAgo";
import backButton from "../assets/back-arrow.svg";
import IssueStatusIcon from "./icons/IssueStatusIcon";

const mapStateToProps = (state) => ({
  commentGitIssues: state.gitIssueComment.commentGitIssues,
  addGitIssues: state.gitIssue.addGitIssues,
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
          <IssueStatusIcon />
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
          <div className="flex gap-1 pt-3" key={commentGitIssue?.id}>
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
                    {commentGitIssue?.userName}
                  </h4>
                  <span className="text-xs text-gray-500 ml-2">
                    {timeAgo(new Date(commentGitIssue?.createdAt))}
                  </span>
                </div>
                <Line />
                <div
                  className="text-white p-3"
                  dangerouslySetInnerHTML={{ __html: commentGitIssue?.text }}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default connect(mapStateToProps)(HeaderDetailPage);
