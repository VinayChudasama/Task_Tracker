import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../pages/MyTask/utility/service/taskList.service";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(taskApi.middleware),
});
