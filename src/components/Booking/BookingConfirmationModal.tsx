import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import { toast } from "sonner";
import { useDeleteBookingMutation } from "../../redux/features/booking/bookingApi";

const BookingConfirmationModal: React.FC<{
  id: string;
  openReturn: boolean;
  setOpenReturn: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ openReturn, setOpenReturn, id }) => {
  const [deleteBooking] = useDeleteBookingMutation();
  console.log(id);

  const handleOk = async () => {
    console.log("Book returned");
    deleteBooking(id)
      .unwrap()
      .then(() => {
        toast.success("Booking deleted successfully");
      })
      .catch((err: any) => {
        toast.error(err.data.message);
      });
    setOpenReturn(false);
  };

  const handleCancel = () => {
    setOpenReturn(false);
  };

  return (
    <>
      <Modal
        title={
          <span>
            <ExclamationCircleOutlined
              style={{ color: "#faad14", marginRight: "8px" }}
            />
            Confirm
          </span>
        }
        visible={openReturn}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        centered
        cancelText="Cancel"
        okButtonProps={{
          style: { backgroundColor: "red", borderColor: "red", color: "white" },
        }}
      >
        <p>
          Are you sure you want to delete this facility? This action cannot be
          undone.
        </p>
      </Modal>
    </>
  );
};

export default BookingConfirmationModal;
