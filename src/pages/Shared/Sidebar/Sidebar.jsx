import { faChartPie, faFileInvoice, faGear, faTeeth, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";


const Sidebar = () => {



    return (
        <div className="container-fluid bg-sky-500 h-screen px-10">
            <div className="mt-10">
                <div className="flex justify-center  pb-4">
                    <Link to={'/'}><img className="w-[5vw] mb-8" src="/logo.png" alt="invisya logo" /></Link>
                </div>
                <ul className="text-left text-zinc-50 text-lg">
                    <li className="text-xl mb-2" id="dashboard"> <NavLink to={'/dashboard'}><FontAwesomeIcon icon={faChartPie} className="mr-3"/>Dashboard</NavLink></li>
                    <li className="text-xl mb-2" id="patients"><NavLink to={'/patients'}> <FontAwesomeIcon icon={faUserPlus} className="mr-3"/>Patients </NavLink> </li>
                    <li className="text-xl mb-2" id="orders"><NavLink to={'/orders'}><FontAwesomeIcon icon={faTeeth} className="mr-3"/>Orders</NavLink></li>
                    <li className="text-xl mb-2"><a href="#"><FontAwesomeIcon icon={faFileInvoice} className="mr-3"/>Billing & Invoices</a></li>
                    <li className="text-xl mb-2"><a href="#"><FontAwesomeIcon icon={faGear} className="mr-3"/>Settings</a></li>
                </ul>
            </div>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-32">
                Logout
            </button>
        </div>

    );
};

export default Sidebar;