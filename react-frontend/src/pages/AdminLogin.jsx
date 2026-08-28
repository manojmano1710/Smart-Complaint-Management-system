import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaUserShield,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import "../css/login.css";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleAdminLogin = () => {

        // Temporary Admin Login
        if (
            email === "admin@campuscare.com" &&
            password === "admin123"
        ) {

            localStorage.setItem(
                "user",
                JSON.stringify({
                    fullName: "Administrator",
                    email: email,
                    role: "ADMIN"
                })
            );

            navigate("/admin");

        } else {

            alert("Invalid Admin Email or Password");

        }

    };

    return (

        <div className="login-page">

            <div className="background-circle circle1"></div>
            <div className="background-circle circle2"></div>

            <div className="login-card">

                <div className="avatar-box">

                    <FaUserShield />

                </div>

                <h1>CampusCare</h1>

                <p>Administrator Login</p>

                <div className="input-box">

                    <FaEnvelope className="input-icon"/>

                    <input
                        type="email"
                        placeholder="Admin Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                </div>

                <div className="input-box">

                    <FaLock className="input-icon"/>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <span
                        className="eye-icon"
                        onClick={()=>setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>

                </div>

                <button
                    className="login-button"
                    onClick={handleAdminLogin}
                >
                    ADMIN LOGIN
                </button>

            </div>

        </div>

    );

}

export default AdminLogin;