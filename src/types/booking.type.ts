import { TFacilitie } from './facilitie.type';
import { TUser } from './user.type';
export type TBooking = {
  _id: string;
  facility: TFacilitie;
  user: TUser;
  bookingDate: string;
  startTime: string;
  endTime: string;
  totalAmount: number;
  status: string;
  transaction_id: string;
  createdAt: string;
  updatedAt: string;
};