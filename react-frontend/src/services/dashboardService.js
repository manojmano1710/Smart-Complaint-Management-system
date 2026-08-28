import axios from "axios";

// Spring Boot Backend URL
const API = "http://localhost:8081/api";

// Get all complaints
export const getComplaints = async () => {
    return await axios.get(`${API}/complaints`);
};

// Get all users
export const getUsers = async () => {
    return await axios.get(`${API}/auth/users`);
};