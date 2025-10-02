import axios from "axios";

const API_URL = "http://localhost:8080/api/leaves";

export const getLeaves = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createLeave = async (leave) => {
  const res = await axios.post(API_URL, leave);
  return res.data;
};

export const updateLeave = async (id, leave) => {
  const res = await axios.put(`${API_URL}/${id}`, leave);
  return res.data;
};

export const deleteLeave = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
