import axiosInstance from "../api/axiosInstance";

const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
const config = {
  headers: { Authorization: `Bearer ${userInfo.access_token}` }
};

export const getAllClientes = async () => {
  const response = await axiosInstance.get('/clientes', config);
  return response.data;
};