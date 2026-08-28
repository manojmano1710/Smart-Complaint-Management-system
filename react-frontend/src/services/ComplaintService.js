import api from "./api";

// Create Complaint
export const createComplaint = (complaint) => {
    return api.post("/api/complaints", complaint);
};

// Get All Complaints
export const getAllComplaints = () => {
    return api.get("/api/complaints");
};

// Get Complaint By ID
export const getComplaintById = (id) => {
    return api.get(`/api/complaints/${id}`);
};

// Get Complaints By User
export const getComplaintsByUser = (userId) => {
    return api.get(`/api/complaints/user/${userId}`);
};

// Search Complaints By Title
export const searchComplaint = (title) => {
    return api.get(`/api/complaints/search?title=${title}`);
};

// Filter Complaints By Status
export const filterComplaint = (status) => {
    return api.get(`/api/complaints/status?status=${status}`);
};

// Update Complaint Status
export const updateComplaintStatus = (id, status) => {
    return api.put(`/api/complaints/${id}?status=${status}`);
};

// Delete Complaint
export const deleteComplaint = (id) => {
    return api.delete(`/api/complaints/${id}`);
};