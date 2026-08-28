import { useEffect, useState } from "react";
import {
    getComplaintsByUser,
    deleteComplaint
} from "../services/ComplaintService";

import ProgressTracker from "../components/ProgressTracker";
import StatusBadge from "../components/StatusBadge";

function MyComplaints() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        loadComplaints();
    }, []);

    const loadComplaints = async () => {

        try {

            const user = JSON.parse(localStorage.getItem("user"));

            const response = await getComplaintsByUser(user.id);

            setComplaints(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Are you sure you want to delete this complaint?")) {
            return;
        }

        try {

            await deleteComplaint(id);

            alert("Complaint Deleted Successfully");

            loadComplaints();

        } catch (error) {

            console.log(error);

            alert("Delete Failed");

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">

                My Complaints

            </h2>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Progress</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        complaints.length === 0 ?

                        (

                            <tr>

                                <td colSpan="7" className="text-center">

                                    No Complaints Found

                                </td>

                            </tr>

                        )

                        :

                        complaints.map((complaint) => (

                            <tr key={complaint.id}>

                                <td>{complaint.id}</td>

                                <td>{complaint.title}</td>

                                <td>{complaint.description}</td>

                                <td>{complaint.category}</td>

                                <td>

                                    <StatusBadge
                                        status={complaint.status}
                                    />

                                </td>

                                <td>

                                    <ProgressTracker
                                        status={complaint.status}
                                    />

                                </td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(complaint.id)}
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default MyComplaints;