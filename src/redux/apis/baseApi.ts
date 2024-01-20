import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.base_api,
    credentials: "include",
  }),
  endpoints: () => ({}),
});

export default baseApi;
