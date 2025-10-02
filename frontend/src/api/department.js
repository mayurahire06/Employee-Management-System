// import axios from "./axios";

// GET all departments
// export const getDepartments = () => axios.get("/departments");

// GET department by ID
export const getDepartmentById = (id) => axios.get(`/departments/${id}`);

// POST new department
export const createDepartment = (data) => axios.post("/departments", data);

// PUT update department
// export const updateDepartment = (id, data) => axios.put(`/departments/${id}`, data);

// DELETE department
// export const deleteDepartment = (id) => axios.delete(`/departments/${id}`);


import axios from "axios";

const API = "http://localhost:8080/api/departments";

export const getDepartments = () => axios.get(API);
export const getDepartment = (id) => axios.get(`${API}/${id}`);
export const addDepartment = (department) => axios.post(API, department);
export const updateDepartment = (id, department) => axios.put(`${API}/${id}`, department);
export const deleteDepartment = (id) => axios.delete(`${API}/${id}`);
