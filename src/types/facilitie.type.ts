export type TFacilitieCardProps = {
  _id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  availableSlots: number;
  pricePerHour: number;
  buttonVisible?: boolean;
};

export type TFacilitieCard = {
  _id: string;

  facilitie: TFacilitieCardProps[];
};