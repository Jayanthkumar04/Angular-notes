import { User } from "./user.model";

export interface Event {
  eventId?: number;
  eventName: string;
  price: number;
  eventDate: string; // ISO string
  location: string;
  moreInfo: string;
  user?: User;
}
