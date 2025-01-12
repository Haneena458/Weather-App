import React from "react";

function Card(props) {
  return (
    <div className="h-32 w-40 md:h-48 md:w-64 border-2 border-gray-300 text-gray-950 rounded-md shadow-lg flex flex-col justify-center items-center">
      <p className="font-semibold text-xl md:text-2xl text-center">{props?.name} </p>
      <div className="flex items-center mt-2">
        <p className="text-3xl md:text-4xl font-bold ps-5">{props?.value} </p>
        <p className="text-lg md:text-xl ml-2">{props?.add} </p>
      </div>
    </div>
  );
}

export default Card;
