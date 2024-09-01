export type TFacilitieCardProps = {
  _id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  availableSlots: number;
  pricePerHour: number;

};

export type TFacilitieCard = {
  _id: string;

  facilitie: TFacilitieCardProps[];
};

export type TFacilitie = {
  _id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  availableSlots: number;
  pricePerHour: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  meta: any;
};