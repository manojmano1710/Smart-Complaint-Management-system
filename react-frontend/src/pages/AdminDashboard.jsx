import { useEffect, useState } from "react";
import {
    getAllComplaints,
    deleteComplaint,
    updateComplaintStatus,
    searchComplaint,
    filterComplaint
} from "../services/ComplaintService";

function AdminDashboard() {

    const [complaints, setComplaints] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        loadComplaints();
    }, []);

    const loadComplaints = async () => {
        try {
            const response = await getAllComplaints();
            setComplaints(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this complaint?")) return;

        try {
            await deleteComplaint(id);
            alert("Complaint Deleted Successfully");
            loadComplaints();
        } catch (error) {
            console.log(error);
            alert("Delete Failed");
        }
    };

    const handleStatusChange = async (id, newStatus) => {

        try {

            await updateComplaintStatus(id, newStatus);

            alert("Status Updated");

            loadComplaints();

        } catch (error) {

            console.log(error);

            alert("Update Failed");

        }

    };

    const handleSearch = async () => {

        if (searchTitle.trim() === "") {
            loadComplaints();
            return;
        }

        try {

            const response = await searchComplaint(searchTitle);

            setComplaints(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleFilter = async (value) => {

        setStatus(value);

        if (value === "") {

            loadComplaints();

            return;

        }

        try {

            const response = await filterComplaint(value);

            setComplaints(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="text-center text-primary mb-4">
                Admin Dashboard
            </h2>

            <div className="row mb-3">

                <div className="col-md-6">

                    <input
                        className="form-control"
                        placeholder="Search Complaint Title"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-primary w-100"
                        onClick={handleSearch}>
                        Search
                    </button>

                </div>

                <div className="col-md-4">

                    <select
                        className="form-select"
                        value={status}
                        onChange={(e) => handleFilter(e.target.value)}>

                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>

                    </select>

                </div>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>User</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {complaints.length === 0 ? (

                        <tr>

                            <td colSpan="7" className="text-center">
                                No Complaints Found
                            </td>

                        </tr>

                    ) : (

                        complaints.map((complaint) => (

                            <tr key={complaint.id}>

                                <td>{complaint.id}</td>
                                <td>{complaint.title}</td>
                                <td>{complaint.description}</td>
                                <td>{complaint.category}</td>

                                <td>

                                    <select
                                        className="form-select"
                                        value={complaint.status}
                                        onChange={(e) =>
                                            handleStatusChange(
                                                complaint.id,
                                                e.target.value
                                            )
                                        }>

                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>

                                    </select>

                                </td>

                                <td>
                                    {complaint.user
                                        ? complaint.user.fullName
                                        : "N/A"}
                                </td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            handleDelete(complaint.id)
                                        }>

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default AdminDashboard;