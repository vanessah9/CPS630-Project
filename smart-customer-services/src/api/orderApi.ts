import axiosClient from "./axiosClient";

interface Coord {
  lng: number;
  lat: number;
}

interface Item {
  id: string;
  quantity: number;
}
export interface Order {
  storeCode: string;
  items: Item[];
  sourceCode: string;
  location: Coord;
  destination: Coord;
  paymentMethod: string;
  cardNumber: string;
}

export const getOrders = async () => {
  const response = await axiosClient.get("/order", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};

export const postOrder = async (order: Order) => {
  const response = await axiosClient.post("/order", order, {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  return response.data;
};
