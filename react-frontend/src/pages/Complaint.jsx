import { useState } from "react";
import { createComplaint } from "../services/ComplaintService";

function Complaint() {

    const [complaint, setComplaint] = useState({
        title: "",
        description: "",
        category: ""
    });

    const handleChange = (e) => {
        setComplaint({
            ...complaint,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // Get logged in user
            const loggedInUser = JSON.parse(localStorage.getItem("user"));

            // Check if user exists
            if (!loggedInUser) {
                alert("Please login first.");
                return;
            }

            // Create complaint object
            const complaintData = {
                title: complaint.title,
                description: complaint.description,
                category: complaint.category,
                status: "Pending",
                user: {
                    id: loggedInUser.id
                }
            };

            console.log("Sending Data:", complaintData);

            const response = await createComplaint(complaintData);

            console.log("Response:", response.data);

            alert("Complaint Submitted Successfully");

            setComplaint({
                title: "",
                description: "",
                category: ""
            });

        } catch (error) {

            console.log("Full Error:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Data:", error.response.data);
                alert("Server Error:\n" + JSON.stringify(error.response.data));
            } else {
                alert("Error: " + error.message);
            }

        }

    };

    return (
        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Create Complaint</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={complaint.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                name="description"
                                value={complaint.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label>Category</label>

                            <select
                                className="form-control"
                                name="category"
                                value={complaint.category}
                                onChange={handleChange}
                                required>

                                <option value="">Select Category</option>
                                <option value="Electricity">Electricity</option>
                                <option value="Water">Water</option>
                                <option value="Road">Road</option>
                                <option value="Garbage">Garbage</option>
                                <option value="Other">Other</option>

                            </select>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary">
                            Submit Complaint
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Complaint;   