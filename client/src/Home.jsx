import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
      <div className="d-flex card py-3 px-5 text-center space-around gap-2">
        <h1>Home</h1>
        <h2>Login</h2>
        <Link
          className="btn btn-outline-secondary"
          to="/login"
        >
          Sign in
        </Link>
        <h2>Don't have an account?</h2>
        <Link
          className="btn btn-outline-secondary"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
};

export default Home;
