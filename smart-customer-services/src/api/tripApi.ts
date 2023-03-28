import axiosClient from "./axiosClient";
import Coordinates from "@/models/Coordinates";

interface Trip {
  sourceCode: string;
  location: Coordinates;
  destination: Coordinates;
}

export const getTrip = async () => {
  const response = await axiosClient.get("/trip", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};

export const postTrip = async (trip: Trip) => {
  try {
    const response = await axiosClient.post("/trip", trip, {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    console.log("data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
