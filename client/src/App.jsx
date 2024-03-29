import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Success from "./Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={<Signup />}
        ></Route>
        <Route
          path="/login"
          element={<Login />}
        ></Route>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/success"
          element={<Success />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
