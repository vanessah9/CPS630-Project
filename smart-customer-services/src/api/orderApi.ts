import axiosClient from "./axiosClient";

export const getOrders = async () => {
  const response = await axiosClient.get("/order", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};
