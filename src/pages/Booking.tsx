import { Button, Col, Divider, Flex, Row, message } from "antd";
import PHForm from "../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHDatePicker from "../components/form/PHDatePicker";
import PHTimePicker from "../components/form/PHTimePicker";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useGetAvailabeFacilitieSlotQuery,
  useGetSingleFacilitieQuery,
} from "../redux/features/facilitie/facilitieApi";
import { useMakeBookingMutation } from "../redux/features/booking/bookingApi";

const Booking = () => {
  const { id } = useParams();
  const { data: facilityData, isLoading: isLoadingFacilitie } =
    useGetSingleFacilitieQuery(id, { skip: !id });

  console.log(facilityData);
  const [makeBooking] = useMakeBookingMutation();
  const [queryParams, setQueryParams] = useState<{
    date: string;
    facility: string;
  } | null>(null);

  const {
    data: availabilitySlot,
    error,
    isLoading,
  } = useGetAvailabeFacilitieSlotQuery(queryParams, {
    skip: !queryParams, // Skip query if no params
  });

  console.log(availabilitySlot);

  const checkAvailabeSlots: SubmitHandler<FieldValues> = (data) => {
    const availabeDate = data.date.format("YYYY-MM-DD");
    console.log("log under submit method:", data.date);
    const newQueryParams = {
      date: availabeDate,
      facility: id!,
    };

    // Only update state if parameters actually change
    if (
      !queryParams ||
      queryParams.date !== newQueryParams.date ||
      queryParams.facility !== newQueryParams.facility
    ) {
      setQueryParams(newQueryParams);
    }
  };

  useEffect(() => {
    if (queryParams) {
      console.log("Query Params updated:", queryParams);
    }
  }, [queryParams]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Form Data:", data);

    // Ensure startTime and endTime are defined before formatting
    const startTime = data.startTime ? data.startTime.format("HH:mm") : "";
    const endTime = data.endTime ? data.endTime.format("HH:mm") : "";
    const bookingDate = data.bookingDate
      ? data.bookingDate.format("YYYY-MM-DD")
      : "";

    console.log("Formatted Start Time:", startTime); // Should log the correct local time
    console.log("Formatted End Time:", endTime); // Should log the correct local time

    try {
      const bookingData = {
        facility: id,
        bookingDate,
        startTime,
        endTime,
      };

      const result = await makeBooking(bookingData).unwrap();

      message.success("Booking successful!");
      console.log("Booking Result:", result);
    } catch (error: any) {
      console.error("Booking failed:", error);
      message.error(error.data.message);
    }
  };

  return (
    <Row align="middle" gutter={10} className="p-10">
      <Col className="p-8 mb-10" span={12}>
        {/* ======= Display Facility Info ========== */}
        {isLoadingFacilitie || (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {facilityData?.data?.name}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Location:</span>{" "}
              {facilityData?.data?.location}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Description:</span>{" "}
              {facilityData?.data?.description}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Price Per Hour:</span> $
              {facilityData?.data?.pricePerHour}
            </p>
          </div>
        )}

        {/* ======= Check Available Slot ========== */}
        <Row>
          <Col span={24}>
            <PHForm onSubmit={checkAvailabeSlots}>
              <Row justify={"center"} align="middle" gutter={8}>
                <Divider>Check Available Slot</Divider>

                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <PHDatePicker label="Date" name="date" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <Button htmlType="submit">Check Available</Button>
                </Col>
              </Row>
            </PHForm>
          </Col>
        </Row>
      </Col>

      <Col className="p-8 mt-10" span={12}>
        {/* ======= Fetch the Available Slot ========== */}
        <Row className="p-8" justify={"center"} align="middle" gutter={8}>
          <Divider>Available Slots</Divider>

          {isLoading && (
            <p className="text-xl animate-pulse duration-75">
              Loading available slots...
            </p>
          )}
          {error && (
            <p className="text-red-500">
              Error fetching slots. Please try again later.
            </p>
          )}

          <Flex wrap gap={10}>
            {availabilitySlot?.data?.length > 0 ? (
              availabilitySlot?.data?.map((slot: string, index: number) => (
                <Button key={index} type="primary">
                  {slot}
                </Button>
              ))
            ) : (
              <p className={`text-red-700 ${isLoading && "hidden"}`}>
                No slots available for the selected date.
              </p>
            )}
          </Flex>
        </Row>

        {/* ======= Booking Form ========== */}
        <Row>
          <Col span={24}>
            <PHForm onSubmit={onSubmit}>
              <Row gutter={8} align="middle">
                <Divider>Book Time</Divider>

                <Col span={24}>
                  <PHDatePicker label="Booking Date" name="bookingDate" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <PHTimePicker label="Start Time" name="startTime" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <PHTimePicker label="End Time" name="endTime" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <Button htmlType="submit">Book Now</Button>
                </Col>
              </Row>
            </PHForm>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Booking;
