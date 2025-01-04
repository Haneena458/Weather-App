import React from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div
      style={{
        // backgroundColor:"red",
        backgroundImage:
          "url(https://images.pexels.com/photos/4542756/pexels-photo-4542756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
      }}
      className="min-w-full min-h-screen "
    >
      <div className="w-full min-h-screen flex justify-center items-center">
        <div>
          <h1 className="font-bold text-4xl p-10">
            Weather App
          </h1>

          <Link to="home">
            <Button name="Get Started" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
