import React from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div
      style={{
        backgroundImage:
          'url((https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8IwxoOBQWTeNfPQpNPz_F5tPBZzgyALpxA&s))',
        backgroundSize: "cover",
      }}
    >
        <Link to="home" >
        <Button name="Get Started" onClick="onClick" />

        </Link>
    </div>
  );
}

export default Start;
