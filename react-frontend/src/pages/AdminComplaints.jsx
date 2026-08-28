import { useEffect, useState } from "react";
import {
    getAllComplaints,
    deleteComplaint,
    updateComplaintStatus
} from "../services/ComplaintService";

import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

function AdminComplaints() {

    const [complaints, setComplaints] = useState([]);

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

    const handleStatusChange = async (id, status) => {

        try {

            await updateComplaintStatus(id, status);

            loadComplaints();

        } catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete Complaint?"))
            return;

        await deleteComplaint(id);

        loadComplaints();

    };

    return (

        <Layout>

            <h2>Manage Complaints</h2>

            <table className="table table-dark table-hover mt-4">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        complaints.map((c)=>(

                            <tr key={c.id}>

                                <td>{c.id}</td>

                                <td>{c.title}</td>

                                <td>{c.category}</td>

                                <td>

                                    <StatusBadge
                                        status={c.status}
                                    />

                                </td>

                                <td>

                                    <select
                                        className="form-select"
                                        defaultValue={c.status}
                                        onChange={(e)=>
                                            handleStatusChange(
                                                c.id,
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option>Pending</option>

                                        <option>In Progress</option>

                                        <option>Resolved</option>

                                        <option>Closed</option>

                                    </select>

                                </td>

                                <td>

                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>handleDelete(c.id)}
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </Layout>

    );

}

export default AdminComplaints;