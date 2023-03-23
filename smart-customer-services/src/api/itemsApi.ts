import axiosClient from "./axiosClient";

export const getItems = async () => {
  const response = await axiosClient.get("/item", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};
