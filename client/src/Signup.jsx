import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { email, password })
      .then((res) => {
        console.log(res);
        alert("Successfully signed up!");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
      <div className="d-flex card py-3 px-5 text-center space-around gap-2">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary btn-sm"
          >
            Submit
          </button>
        </form>
        <div>
          <p className="mb-2">Already have an account ?</p>
          <Link
            className="btn btn-outline-secondary btn-sm"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
