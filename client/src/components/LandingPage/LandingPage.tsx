import React from "react";
import { Link } from "react-router-dom";

function LandingPage() { 
return (
  <div className="flex flex-col md:flex-row items-center h-screen w-full bg-white">
  <div className="bg-sign-in bg-center bg-no-repeat bg-cover flex-grow h-screen p-20">
  <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight m-60">
            STYLE/ME
  </h1>
  <div className="flex flex-row items-center justify-center gap-20 mt-20">
    <Link to="/signup" className="btn btn-wide btn-lg text-white">
      Sign Up
    </Link>
    <Link to="/signin" className="btn btn-wide btn-lg btn-info text-white">
      Sign In
    </Link>
  </div>
  </div>
</div>

);
}

export default LandingPage;