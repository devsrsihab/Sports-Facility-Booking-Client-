import { TResponseRedux } from "../../../types";
import { TBooking } from "../../../types/booking.type";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // all get routes
    getAllBooking: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["Bookings"],
    }),

    // all post route
    makeBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bookings"],
    }),
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/cancel/${id}`,
        method: "PATCH",
      }),

      invalidatesTags: ["Bookings"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const {
  // all get hook
  useGetAllBookingQuery,
  // all post hook
  useMakeBookingMutation,
  useCancelBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
