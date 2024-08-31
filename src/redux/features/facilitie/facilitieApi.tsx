import { TQueryParams, TResponseRedux } from "../../../types";
import { TFacilitie } from "../../../types/facilitie.type";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // all get routes
    getSingleFacilitie: builder.query({
      query: (id) => ({
        url: `/facilities/${id}`,
        method: "GET",
      }),
      providesTags: ["Facilities"],
    }),
    getAllFacilitie: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/facilities",
          method: "GET",
          params,
        };

      },
      transformResponse: (response: TResponseRedux<TFacilitie[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["Facilities"],
    }),
    getAvailabeFacilitieSlot: builder.query({
      query: (args) => {
        return {
          url: `/facilities/check-availability?date=${args.date}&facility=${args.facility}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
        };
      },
    }),

    // all post routes
    createFacility: builder.mutation({
      query: (data) => ({
        url: "/facilities",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Facilities"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facilities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Facilities"],
    }),
    updateFacilitie: builder.mutation({
      query: (args) => {
        console.log(args);
        return {
          url: `/facilities/${args.id}`,
          method: "PATCH",
          body: args.formData,
        };
      },
      invalidatesTags: ["Facilities"],
    }),
  }),
});

export const {
  // all get routes
  useGetAllFacilitieQuery,
  useGetSingleFacilitieQuery,
  useGetAvailabeFacilitieSlotQuery,

  // all post routes
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
  useUpdateFacilitieMutation
} = bookApi;
