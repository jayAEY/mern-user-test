import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res);
        res.data === "Success" && navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/login", { email, password })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data === "Success") {
  //         navigate("/home");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/signup"> Sign Up </Link>
    </main>
  );
};

export default Login;
