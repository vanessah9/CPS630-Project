import axiosClient from "./axiosClient";

export const getInvoice = async () => {
  const response = await axiosClient.get("/invoice", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  const lastInvoice = response.data.data.pop();
  return lastInvoice;
};

export const getInvoiceItems = async () => {
  const response = await axiosClient.get("/invoice", {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
  const lastInvoice = response.data.data.pop();
  return lastInvoice.itemId;
};

export const getInvoiceById = async (id: number) => {
  const response = await axiosClient.get(`/invoice/${id}`);
  return response.data;
};
