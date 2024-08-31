import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import { toast } from "sonner";
import { useDeleteFacilityMutation } from "../../redux/features/facilitie/facilitieApi";

const FacilitieConfirmationModal: React.FC<{
  id: string;
  openReturn: boolean;
  setOpenReturn: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ openReturn, setOpenReturn, id }) => {
  const [deleteFacility] = useDeleteFacilityMutation();
  console.log(id);

  const handleOk = async () => {
    console.log("Book returned");
    deleteFacility(id)
      .unwrap()
      .then(() => {
        toast.success("Facility deleted successfully");
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

export default FacilitieConfirmationModal;
