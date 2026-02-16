export interface StudentOrder {
  orderId?: number;
  name: string;
  email: string;
  phno: string;
  course: string;
  amount: number;
  orderStatus?: string;
  razorpayOrderId?: string;
}
