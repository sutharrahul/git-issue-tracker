import React from "react";
import Line from "./Line";
import Badge from "./Badge";

function SideInfo() {
  return (
    <div className=" pr-10 py-20">
      <aside>
        <div className="flex flex-col p-4">
          <h4>Assignees</h4>
          <span className="text-white font-semibold">sutharrahul</span>
        </div>
        <Line />
        <div className="flex flex-col p-4">
          <span>Lable</span>
          <label htmlFor="_">
            <Badge />
          </label>
        </div>
        <Line />
        <div className="flex flex-col p-4">
          <span>Project</span>
          <span className="text-white font-thin">None yet</span>
        </div>
        <Line />

        <div className="flex flex-col p-4">
          <span>Milestone</span>
          <span className="text-white font-thin">No milestone</span>
        </div>
        <Line />
      </aside>
    </div>
  );
}

export default SideInfo;
