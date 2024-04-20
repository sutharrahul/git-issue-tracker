import React from "react";
import { Line, Avatar } from "./index";
function HeaderDetailPage() {
  return (
    <div className="px-[2.80rem]">
      <div>
        <div className="flex flex-col flex-wrap justify-end items-start sm:flex-row  sm:items-center py-5 sm:justify-between ">
          <h1 className="text-white md:text-3xl font-semibold">
            Issue Title ( Quando ambulabat agendis admonere )
          </h1>
          <button className="px-3 py-1 mt-5 sm:mt-0 bg-green-700 text-white rounded">
            New issue
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="">
            <span
              className="tooltipped tooltipped-e flex items-center text-white gap-1 px-3 py-1 rounded-full bg-[#238636] "
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
          <span>sutharrahul</span>
          <span>5 hout ago</span>
        </div>
      </div>
      <div className="py-7">
        <Line />
      </div>
      <div className="flex gap-1">
        <Avatar />
        <div className="flex items-start">
          <div
            className="w-0 h-0 mt-4 
             border-t-[5px] border-t-transparent
             border-r-[7px] border-r-gray-200
             border-b-[5px] border-b-transparent"
          ></div>
          <div className="border border-gray-200 rounded-md ">
            <div className="flex items-center px-5 py-3 bg-slate-800 rounded-lg over">
              <h4 className="text-base text-white font-semibold">
                sutharrahul
              </h4>
              <span className="text-xs text-gray-500 ml-2">today</span>
            </div>
            <Line />
            <p className=" text-white p-3" id="textContnt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              rerum, aut, corporis sequi explicabo aliquam obcaecati debitis
              exercitationem, voluptatem placeat repellendus perspiciatis ad
              nobis qui alias velit dolores unde maiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDetailPage;
