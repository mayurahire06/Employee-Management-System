import axios from "./axios";

// GET all employees
export const getEmployees = () => axios.get("/employees");

// GET employee by ID
export const getEmployeeById = (id) => axios.get(`/employees/${id}`);

// POST new employee
export const createEmployee = (data) => axios.post("/employees", data);

// PUT update employee
export const updateEmployee = (id, data) => axios.put(`/employees/${id}`, data);

// DELETE employee
export const deleteEmployee = (id) => axios.delete(`/employees/${id}`);
