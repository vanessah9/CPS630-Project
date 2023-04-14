import Review from "@/models/Review";
import axiosClient from "./axiosClient";

export const getReviews = async () => {
  const response = await axiosClient.get("/review", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};

export const postReview = async (review: Review) => {
  try {
    const response = await axiosClient.post("/review", review, {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    console.log("data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
