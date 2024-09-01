import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["GetMe", "Facilities", "Bookings"],
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/register-user",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["GetMe", "Facilities", "Bookings"],
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
