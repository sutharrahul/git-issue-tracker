import React from "react";
import Badge from "./Badge";

function Card() {
  return (
    <div className="px-8">
      <div className="flex border py-6 px-4 gap-2 ">
        <h1 className="gap-4">
          Context update should account for deleted files
        </h1>
        <Badge />
      </div>
    </div>
  );
}

export default Card;
