import axiosClient from "./axiosClient";

export const getUsers = async () => {
  const response = await axiosClient.get("/users", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await axiosClient.get(`/users/${id}`, {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};

export const getLoggedInUser = async () => {
  const response = await axiosClient.get("/user/me", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};