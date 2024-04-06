import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import Patients from "../pages/Patients/Patients";
import Orders from "../pages/Orders/Orders";
import EditPatient from "../pages/Patients/EditPatient";
import AddPatient from "../pages/Patients/AddPatient";
import axios from "axios";
import CreateOrder from "../pages/Orders/CreateOrder";


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
                path: "/add-patient",
                element: <AddPatient></AddPatient>
            },
            {
                path: "/update-patient/:id",
                element: <EditPatient></EditPatient>,
                loader:({params}) => {return axios.get(`http://localhost:3000/app/update-patient/${params.id}`)}
            },
            {
                path: "/orders",
                element: <Orders></Orders>
            },
            {
                path: "/create-order",
                element: <CreateOrder></CreateOrder>
            },
        ]
    }
])

export default router;