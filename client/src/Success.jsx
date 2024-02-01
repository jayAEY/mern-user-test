import { Link } from "react-router-dom";

const Success = () => {
  return (
    <main className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-secondary">
      <div className="d-flex card py-3 px-3 text-center">
        <h1>Login Successfull!</h1>
        <p className="mb-2">Login to other account?</p>
        <Link
          className="btn btn-outline-secondary btn-sm"
          to="/login"
        >
          Login
        </Link>
      </div>
    </main>
  );
};

export default Success;
