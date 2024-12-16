import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className="h-10 w-20  bg-blue-500 text-black rounded-lg hover:bg-blue-600"
        type={props.type}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
