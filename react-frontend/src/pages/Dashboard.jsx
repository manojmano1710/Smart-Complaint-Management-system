import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import ComplaintChart from "../components/ComplaintChart";
import Statistics from "../components/Statistics";
import TrendChart from "../components/TrendChart";
import CategoryChart from "../components/CategoryChart";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

import {
    FaClipboardList,
    FaCheckCircle,
    FaClock,
    FaUsers
} from "react-icons/fa";

import { getComplaints, getUsers } from "../services/dashboardService";

import "../css/dashboard.css";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [complaints, setComplaints] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const complaintRes = await getComplaints();
            const userRes = await getUsers();

            setComplaints(complaintRes.data);
            setUsers(userRes.data);

        } catch (error) {

            console.log(error);

        }

    };

    const resolved = complaints.filter(
        c => c.status === "Resolved"
    ).length;

    const pending = complaints.filter(
        c => c.status === "Pending"
    ).length;

    return (

        <Layout>

            <div className="hero-banner">

    <div>

        <h1>
            Welcome {user ? user.fullName : "User"} 👋
        </h1>

        <p>
            Manage complaints, monitor progress and keep your city better.
        </p>

    </div>

    <div className="hero-buttons">

        <button className="new-btn">

            + New Complaint

        </button>

        <button className="report-btn">

            View Reports

        </button>

    </div>

</div>

               <div className="dashboard-cards">

    <DashboardCard
        title="Total Complaints"
        value={complaints.length}
        icon={<FaClipboardList />}
        color="#2563EB"
    />

    <DashboardCard
        title="Resolved"
        value={resolved}
        icon={<FaCheckCircle />}
        color="#22C55E"
    />

    <DashboardCard
        title="Pending"
        value={pending}
        icon={<FaClock />}
        color="#F59E0B"
    />

    <DashboardCard
        title="Users"
        value={users.length}
        icon={<FaUsers />}
        color="#8B5CF6"
    />

</div>
            {/* Complaint Analytics Chart */}

            <ComplaintChart complaints={complaints} />

            <Statistics complaints={complaints} />

            <TrendChart />

            <CategoryChart complaints={complaints} />

            <RecentActivity complaints={complaints} />

            <QuickActions />

            <div className="recent-table">

                <div className="table-header">

                    <h2>Recent Complaints</h2>

                </div>

                <table>

                    <thead>

                        <tr>

                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {complaints.length > 0 ? (

                            complaints.slice(0, 5).map((item) => (

                                <tr key={item.id}>

                                    <td>{item.title}</td>

                                    <td>{item.category}</td>

                                    <td>

                                        <span
                                            className={
                                                item.status === "Resolved"
                                                    ? "status resolved"
                                                    : item.status === "Pending"
                                                    ? "status pending"
                                                    : "status progress"
                                            }
                                        >
                                            {item.status}
                                        </span>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="3" style={{ textAlign: "center" }}>
                                    No complaints found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </Layout>

    );

}

export default Dashboard;