import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { FileRoutes } from "./core/utility/enums/core.enums";
import App from "./App";

function AppRoutes() {

    const routes: any = [
        {
            path: "/",
            element: <App />,
            // children: [
            //     {
            //         path: FileRoutes.HOME,
            //         element: <App />
            //     }
            // ]
        }
    ]
    const router = createBrowserRouter(routes);
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
export default AppRoutes