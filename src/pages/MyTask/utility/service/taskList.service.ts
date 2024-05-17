import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../../environments/environment";
import { ITask } from "../models/task.model";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["TaskList"],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask, void>({
      query: () => ({ url: "/taskList.json", method: "GET" }),
      providesTags: ["TaskList"],
    }),
    getTasksById: builder.query<ITask, string>({
      query: (id: string) => ({ url: `/taskList/${id}.json`, method: "GET" }),
    }),
    deleteTask: builder.mutation<void, string>({
      query: (taskId: string) => ({
        url: `/taskList/${taskId}.json`,
        method: "DELETE",
      }),
      invalidatesTags:["TaskList"]
    }),
  }),
});
export const { useGetTasksQuery, useGetTasksByIdQuery, useDeleteTaskMutation } =
  taskApi;
