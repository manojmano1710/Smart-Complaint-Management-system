import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Complaint from "./pages/Complaint";
import MyComplaints from "./pages/MyComplaints";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import AdminLogin from "./pages/AdminLogin";
import AdminComplaints from "./pages/AdminComplaints";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/complaint" element={<Complaint />} />

        <Route path="/mycomplaints" element={<MyComplaints />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route
          path="/admin/complaints"
          element={<AdminComplaints />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;