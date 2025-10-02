import axios from "axios";

const API_URL = "http://localhost:8080/api/attendance"; // adjust if needed

export const getAttendance = () => axios.get(API_URL);
export const getAttendanceById = (id) => axios.get(`${API_URL}/${id}`);
export const createAttendance = (data) => axios.post(API_URL, data);
export const updateAttendance = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteAttendance = (id) => axios.delete(`${API_URL}/${id}`);
