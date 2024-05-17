import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { FileRoutes } from "./core/utility/enums/core.enums";
import App from "./App";
import Home from "./pages/home/home";
import MyTaskList from "./pages/MyTask/myTaskList";


function AppRoutes() {

    const routes: any = [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: FileRoutes.HOME,
                    element: <Home/>,
                },
                {
                    path: FileRoutes.MY_TASKS,
                    element: <MyTaskList/>,
                },
            ]
        }
    ]
    const router = createBrowserRouter(routes);
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
export default AppRoutes