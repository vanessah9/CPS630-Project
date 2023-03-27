export default interface Shopping {
  userId: string;
  items: SessionItem[];
  storeCode: string;
  date: Date;
  time: number | 0;
  paymentMethod: string;
  totalPrice: number | 0;
}

export interface SessionItem {
  id: string;
  quantity: number;
}
