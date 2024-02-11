import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import Patients from "../pages/Patients/Patients";
import Orders from "../pages/Orders/Orders";
import EditPatient from "../pages/Patients/EditPatient";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/patients",
                element: <Patients></Patients>
            },
            {
                path: "/update-patient/id",
                element: <EditPatient></EditPatient>
            },
            {
                path: "/orders",
                element: <Orders></Orders>
            },
        ]
    }
])

export default router;