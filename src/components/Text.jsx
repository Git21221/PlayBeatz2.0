import React from "react";

function Text({name, des}) {
  return (
    <>
      <div className="name line-clamp-1 font-bold text-lg text-white">{name}</div>
      <div className="des line-clamp-2 text-gray-200">{des}</div>
    </>
  );
}

export default Text;
