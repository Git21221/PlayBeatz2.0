import React from "react";

function Text({name, des}) {
  return (
    <>
      <div className="name line-clamp-1 font-bold text-md text-white">{name}</div>
      <div className="des line-clamp-2 text-wrap text-gray-200">{des}</div>
    </>
  );
}

export default Text;
