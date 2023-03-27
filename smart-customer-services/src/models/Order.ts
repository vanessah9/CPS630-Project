export default interface Order {
    userId: string;
    tripId: string;
    receiptId: string;
    paymentMethod: string;
    dateIssued: Date;
    dateReceived: Date;
}