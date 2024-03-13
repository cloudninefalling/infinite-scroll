import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TPost } from "@/entities/post";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], void>({
      query: () => "/posts"
    }),
    getPostById: builder.query<TPost, number>({
      query: (id) => `/posts/${id}`
    })
  })
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;