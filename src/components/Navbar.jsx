import React from "react";

function Navbar() {
  return (
    <div className="px-8">
      <div className="navbar bg-base-200 border border-base-300 rounded-md">
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
          <h2 className="text-white text-lg font-semibold">13 Issue</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
