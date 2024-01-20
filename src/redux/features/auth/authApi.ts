import baseApi from "../../apis/baseApi";

export type TLoginCredential = {
  id: string;
  password: string;
};

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: TLoginCredential) => ({
        url: "/auth/login-user",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
