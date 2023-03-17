import axiosClient from './axiosClient';

export const getInvoice = async () => {
  const response = await axiosClient.get('/invoice');
  console.log('response', response)
  return response.data;
};

export const getInvoiceById = async (id: number) => {
  const response = await axiosClient.get(`/invoice/${id}`);
  return response.data;
};