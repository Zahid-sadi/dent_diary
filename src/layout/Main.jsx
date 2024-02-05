import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";


const Main = () => {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="container w-full p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;