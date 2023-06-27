import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="hero min-h-screen bg-sign-in bg-center bg-no-repeat bg-cover">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="container mx-auto px-4">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">STYLE/ME</h1>
          <p className="mb-5 text-lg md:text-xl">Say goodbye to fashion ruts and hello to endless inspiration at your fingertips!</p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-20 space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/signup" className="btn btn-wide btn-lg text-white">
              Sign Up
            </Link>
            <Link to="/signin" className="btn btn-wide btn-lg btn-info text-white">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
