import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import "../css/navbar.css";

function Navbar() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="top-navbar">

            <div className="search-box">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Search complaints..."
                />

            </div>

            <div className="nav-right">

                <div className="notification">

                    <FaBell />

                    <span>3</span>

                </div>

                <div className="profile">

                    <FaUserCircle />

                    <div>

                        <h5>{user ? user.fullName : "User"}</h5>

                        <small>User</small>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Navbar;