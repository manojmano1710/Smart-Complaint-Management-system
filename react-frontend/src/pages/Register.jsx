import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import "../css/register.css";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="register-page">

      <div className="register-circle circle1"></div>
      <div className="register-circle circle2"></div>

      <div className="register-card">

        <div className="register-avatar">

          <FaUser />

        </div>

        <h1>Create Account</h1>

        <p>Smart Complaint Management System</p>

        <div className="register-input">

          <FaUser className="register-icon"/>

          <input
            type="text"
            placeholder="Full Name"
          />

        </div>

        <div className="register-input">

          <FaEnvelope className="register-icon"/>

          <input
            type="email"
            placeholder="Email Address"
          />

        </div>

        <div className="register-input">

          <FaPhone className="register-icon"/>

          <input
            type="text"
            placeholder="Phone Number"
          />

        </div>

        <div className="register-input">

          <FaLock className="register-icon"/>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />

          <span
            className="register-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <button className="register-button">

          CREATE ACCOUNT

        </button>

        <div className="login-link">

          Already have an account?

          <Link to="/">

            Login

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;