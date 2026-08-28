import { Link } from "react-router-dom";
import {
    FaTachometerAlt,
    FaPlusCircle,
    FaClipboardList,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import "../css/sidebar.css";

function Sidebar() {

    return (

        <div className="sidebar">

            <div className="logo">

                <h2>SCMS</h2>

            </div>

            <ul>

                <li>

                    <Link to="/dashboard">

                        <FaTachometerAlt />

                        Dashboard

                    </Link>

                </li>

                <li>

                    <Link to="/complaint">

                        <FaPlusCircle />

                        New Complaint

                    </Link>

                </li>

                <li>

                    <Link to="/mycomplaints">

                        <FaClipboardList />

                        My Complaints

                    </Link>

                </li>

                <li>

                    <Link to="/profile">

                        <FaUser />

                        Profile

                    </Link>

                </li>

                <li>

                    <Link to="/">

                        <FaSignOutAlt />

                        Logout

                    </Link>

                </li>

            </ul>

        </div>

    );

}

export default Sidebar;