import axiosClient from './axiosClient';

export const getUsers = async () => {
  const response = await axiosClient.get('/users');
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await axiosClient.get(`/users/${id}`);
  return response.data;
};

// export const createUser = async (userData: any) => {
//   const response = await axiosClient.post('/users', userData);
//   return response.data;
// };

// export const updateUser = async (id: number, userData: any) => {
//   const response = await axiosClient.put(`/users/${id}`, userData);
//   return response.data;
// };

// export const deleteUser = async (id: number) => {
//   const response = await axiosClient.delete(`/users/${id}`);
//   return response.data;
// };