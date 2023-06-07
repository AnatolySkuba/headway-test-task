import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SERVER_URL } from "consts";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),

  tagTypes: ["Questions"],
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => `/questions`,
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
