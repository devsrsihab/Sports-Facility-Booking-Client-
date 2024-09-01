import { TQueryParams, TResponseRedux } from "../../../types";
import { TUser } from "../../../types/user.type";
import { baseApi } from "../../api/baseApi";

const getMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // all get route
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["GetMe"],
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/admins",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["Users"],
    }),

    // all post route
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  //  all get route
  useGetMeQuery,
  useGetAllAdminsQuery,
  //  all post route
  useCreateAdminMutation,
} = getMeApi;
