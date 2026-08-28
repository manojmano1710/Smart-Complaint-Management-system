import { FaPlusCircle, FaClipboardList, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/quickActions.css";

function QuickActions() {

    const navigate = useNavigate();

    return (

        <div className="quick-actions">

            <h2>Quick Actions</h2>

            <div className="quick-grid">

                <button onClick={() => navigate("/complaint")}>
                    <FaPlusCircle />
                    <span>New Complaint</span>
                </button>

                <button onClick={() => navigate("/mycomplaints")}>
                    <FaClipboardList />
                    <span>My Complaints</span>
                </button>

                <button onClick={() => navigate("/profile")}>
                    <FaUserEdit />
                    <span>Edit Profile</span>
                </button>

            </div>

        </div>

    );

}

export default QuickActions;