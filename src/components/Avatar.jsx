import React from "react";
import avatar from "../assets/avatar.jpg";
function Avatar() {
  return (
    <div>
      <div className="avatar ">
        <div className="w-10 rounded-full ">
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
