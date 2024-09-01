import { Button, Pagination, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { useGetAllBookingQuery } from "../../../redux/features/booking/bookingApi";
import moment from "moment";
import BookingConfirmationModal from "../../../components/Booking/BookingConfirmationModal";
import { currentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";

const Bookings = () => {
  const user = useAppSelector(currentUser);
  const [openReturn, setOpenReturn] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const { data: bookingData, isFetching } = useGetAllBookingQuery([
    { name: "limit", value: 5 },
    { name: "page", value: page },
  ]);

  type TTableData = {
    _id: string;
    facilityName: string;
    userName: string;
    bookingDate: string;
    totalAmount: number;
    status: string;
  };

  const tableData: TTableData[] | undefined = bookingData?.data?.map(
    ({ _id, facility, user, bookingDate, totalAmount, status }) => ({
      _id,
      facilityName: facility?.name,
      userName: user?.name,
      bookingDate,
      totalAmount,
      status,
    })
  );

  const metaData = bookingData?.meta;

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Facility Name",
      key: "facilityName",
      dataIndex: "facilityName",
    },
    {
      title: "User Name",
      key: "userName",
      dataIndex: "userName",
    },
    {
      title: "Booking Date",
      key: "bookingDate",
      dataIndex: "bookingDate",
      render: (item) => moment(item).format("DD MMM YYYY"),
    },
    {
      title: "Total Amount",
      key: "totalAmount",
      dataIndex: "totalAmount",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        if (item === "pending") {
          return (
            <Button className="capitalize bg-red-500 text-white">{item}</Button>
          );
        }

        if (item === "confirmed") {
          return (
            <Button className="capitalize bg-green-500 text-white">
              {item}
            </Button>
          );
        }
      },
    },
    // Conditionally render the "Action" column if the user is an admin
    ...(user?.role === "admin"
      ? [
          {
            title: "Action",
            key: "x",
            render: (item: TTableData) => (
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setSelectedId(item._id);
                    setOpenReturn(true);
                  }}
                  className="bg-red-500 text-white"
                >
                  Delete
                </Button>
                {selectedId === item._id && (
                  <BookingConfirmationModal
                    id={item._id}
                    openReturn={openReturn}
                    setOpenReturn={setOpenReturn}
                  />
                )}
              </div>
            ),
          },
        ]
      : []),
  ];

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        rowKey="_id"
        showSorterTooltip={{ target: "sorter-icon" }}
      />

      <div className="mt-8 flex justify-center">
        <Pagination
          onChange={(value) => setPage(value)}
          current={page}
          pageSize={metaData?.limit}
          total={metaData?.total}
        />
      </div>
    </>
  );
};

export default Bookings;
