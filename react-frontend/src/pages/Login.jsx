import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUserCircle,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import "../css/Login.css";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

  localStorage.setItem(
    "user",
    JSON.stringify({
        id: 6,
        fullName: "Manoj",
        email: "abc@gmail.com",
        phone: "9876543210",
        role: "USER"
    })
);

  navigate("/dashboard");
};

  return (

    <div className="login-page">

      <div className="background-circle circle1"></div>
      <div className="background-circle circle2"></div>

      <div className="login-card">

        <div className="avatar-box">

          <FaUserCircle />

        </div>

        <h1 className="brand-name">CampusCare</h1>

        <p>
          College Complaint Management System
        </p>

        <div className="input-box">

          <FaEnvelope className="input-icon"/>

          <input
            type="email"
            placeholder="Email ID"
          />

        </div>

        <div className="input-box">

          <FaLock className="input-icon"/>

          <input
            type={showPassword ? "text":"password"}
            placeholder="Password"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >

            {
              showPassword
              ?
              <FaEyeSlash/>
              :
              <FaEye/>
            }

          </span>

        </div>

        <div className="login-options">

          <label>

            <input type="checkbox"/>

            Remember me

          </label>

          <a href="#">

            Forgot Password?

          </a>

        </div>

        <button
          className="login-button"
          onClick={handleLogin}
        >
          LOGIN
        </button>

        <div className="register-link">

        <Link to="/adminlogin">

            Admin Login

        </Link>

    </div>

      </div>

    </div>

  );

}

export default Login;