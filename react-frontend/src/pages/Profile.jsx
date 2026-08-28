import { useState } from "react";
import {
    FaUserCircle,
    FaEnvelope,
    FaPhone,
    FaUserTag
} from "react-icons/fa";

import Layout from "../components/Layout";
import "../css/profile.css";

function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [showModal, setShowModal] = useState(false);

    const [fullName, setFullName] = useState(user?.fullName || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");

    const saveProfile = () => {

        const updatedUser = {
            ...user,
            fullName,
            email,
            phone
        };

        localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
        );

        alert("Profile Updated Successfully");

        setShowModal(false);

        window.location.reload();

    };

    return (

        <Layout>

            <div className="profile-container">

                <div className="profile-card">

                    <div className="profile-header">

                        <FaUserCircle className="profile-avatar"/>

                        <h2>{user?.fullName}</h2>

                        <p>Smart Complaint Management System</p>

                    </div>

                    <div className="profile-details">

                        <div className="profile-item">

                            <FaUserTag/>

                            <div>

                                <label>Full Name</label>

                                <span>{user?.fullName}</span>

                            </div>

                        </div>

                        <div className="profile-item">

                            <FaEnvelope/>

                            <div>

                                <label>Email</label>

                                <span>{user?.email}</span>

                            </div>

                        </div>

                        <div className="profile-item">

                            <FaPhone/>

                            <div>

                                <label>Phone</label>

                                <span>{user?.phone}</span>

                            </div>

                        </div>

                        <div className="profile-item">

                            <FaUserTag/>

                            <div>

                                <label>Role</label>

                                <span>{user?.role}</span>

                            </div>

                        </div>

                    </div>

                    <div className="profile-actions">

                        <button
                            className="edit-btn"
                            onClick={() => setShowModal(true)}
                        >

                            Edit Profile

                        </button>

                    </div>

                </div>

            </div>

            {showModal && (

                <div className="modal-bg">

                    <div className="edit-modal">

                        <h2>Edit Profile</h2>

                        <input
                            type="text"
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Email"
                        />

                        <input
                            type="text"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            placeholder="Phone"
                        />

                        <div className="modal-buttons">

                            <button
                                className="save-btn"
                                onClick={saveProfile}
                            >

                                Save

                            </button>

                            <button
                                className="cancel-btn"
                                onClick={()=>setShowModal(false)}
                            >

                                Cancel

                            </button>

                        </div>

                    </div>

                </div>

            )}

        </Layout>

    );

}

export default Profile;