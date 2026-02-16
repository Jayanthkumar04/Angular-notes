import { Customer } from "./Customer";
import { Address } from "./Address";
import { OrderItem } from "./OrderItem";

export interface PurchaseRequest {
  customer: Customer;
  shippingAddress: Address;
  orderItems: OrderItem[];
}
