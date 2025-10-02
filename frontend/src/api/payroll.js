import axios from "axios";

const API_URL = "http://localhost:8080/api/payrolls";

export const getPayrolls = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getPayrollById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createPayroll = async (payroll) => {
  const res = await axios.post(API_URL, payroll);
  return res.data;
};

export const updatePayroll = async (id, payroll) => {
  const res = await axios.put(`${API_URL}/${id}`, payroll);
  return res.data;
};

export const deletePayroll = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
