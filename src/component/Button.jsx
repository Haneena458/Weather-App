import React from "react";

function Button(props) {
  return (
    <div className=" flex justify-center ">
      <button
        className="h-10 w-28 text-black text-lg border-2 rounded-lg hover:bg-gray-200"
        type={props?.type}
      >
        {props?.name}
      </button>
    </div>
  );
}

export default Button;
