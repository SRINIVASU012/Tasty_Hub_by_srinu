import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  var navigate = useNavigate();

  var [username, setusername] = useState("");
  var [password, setpassword] = useState("");

  var handellogin = (e) => {
    e.preventDefault();

    var req = username.slice(0, 3) + "123";

    if (username == "admin" && password == "admin123") {
      localStorage.setItem("adminlogin", username);
      navigate("/admin/viewproducts");
    } else if (username !== "null" && password === req) {
      localStorage.setItem("userlogin", username);
      navigate("/user/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center login-bg">
      <div className="row shadow-lg rounded-4 overflow-hidden login-card">
        <div className="col-md-6 login-left d-flex flex-column justify-content-center align-items-center text-center p-5">
          <h1 className="fw-bold display-5">TastyHub</h1>

          <h4 className="mt-3">Good Food, Good Mood!</h4>
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
            alt="Delicious food"
            className="img-fluid mt-3"
          />

          <p className="mt-3">
            Discover delicious food and enjoy your favourite meals with
            TastyHub.
          </p>
        </div>

        <div className="col-md-6 bg-white p-4 p-md-5">
          <h2 className="text-center fw-bold mb-2">Welcome Back!</h2>

          <p className="text-center text-muted mb-4">Login to your account</p>

          <form onSubmit={handellogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>

              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn login-btn btn-lg w-100 fw-bold"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-muted">
            Don't have an account?{" "}
            <Link to="/register" className="register-link fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
