import api from "./api";

export const loginUser = (user) => {
    return api.post("/api/auth/login", user);
};

export const registerUser = (user) => {
    return api.post("/api/auth/register", user);
};