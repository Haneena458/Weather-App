import React from "react";

function Card(props) {
  return (
    <div className="h-32 w-40 md:h-48 md:w-64 border-2 text-gray-950 rounded-md">
      <p className="p-5 font-semibold text-2xl">{props?.name} </p>
      <div className="flex">
        <p className="text-4xl ps-5">{props?.value} </p>
        <p>&nbsp;&nbsp;{props?.add} </p>
      </div>
    </div>
  );
}

export default Card;
