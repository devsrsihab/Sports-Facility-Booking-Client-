import { TQueryParams, TResponseRedux } from "../../../types";
import { TFacilitieCard } from "../../../types/facilitie.type";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllBook: builder.query({
    //   query: () => ({
    //     url: "/books",
    //     method: "GET",
    //   }),
    // }),
    getSingleFacilitie: builder.query({
      query: (id) => ({
        url: `/facilities/${id}`,
        method: "GET",
      }),
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
      transformResponse: (response: TResponseRedux<TFacilitieCard[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
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

    // getAllBookByCategory: builder.query({
    //   query: (catname) => ({
    //     url: `/books/bookebycat/${catname}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  // all get routes
  useGetAllFacilitieQuery,
  useGetSingleFacilitieQuery,
  useGetAvailabeFacilitieSlotQuery,
} = bookApi;
