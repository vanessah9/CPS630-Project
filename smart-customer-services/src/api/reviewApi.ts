import axiosClient from "./axiosClient";

export const getReviews = async () => {
  const response = await axiosClient.get("/review", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};
