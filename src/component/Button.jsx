import React from "react";

function Button(props) {
  return (
    <div className=" flex justify-center">
      <button
        className="h-10 w-20  bg-blue-500 text-black rounded-lg hover:bg-blue-600"
        type={props?.type}
        onClick={props?.onClick}
      >
        {props?.name}
      </button>
    </div>
  );
}

export default Button;
