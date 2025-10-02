// import axios from "./axios";

// // GET all roles
// export const getRoles = () => axios.get("/roles");

// // GET role by ID
// export const getRoleById = (id) => axios.get(`/roles/${id}`);

// // POST new role
// export const createRole = (data) => axios.post("/roles", data);

// // PUT update role
// export const updateRole = (id, data) => axios.put(`/roles/${id}`, data);

// // DELETE role
// export const deleteRole = (id) => axios.delete(`/roles/${id}`);

import axios from "axios";

const API_URL = "http://localhost:8080/api/roles"; // adjust if different

export const getRoles = () => axios.get(API_URL);
export const getRoleById = (id) => axios.get(`${API_URL}/${id}`);
export const createRole = (role) => axios.post(API_URL, role);
export const updateRole = (id, role) => axios.put(`${API_URL}/${id}`, role);
export const deleteRole = (id) => axios.delete(`${API_URL}/${id}`);

