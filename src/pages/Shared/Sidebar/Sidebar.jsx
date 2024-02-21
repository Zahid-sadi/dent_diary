import { Link } from "react-router-dom";


const Sidebar = () => {



    return (
        <div className="bg-sky-600 w-max h-screen">
            <div>
                <div className="bg-white p-1">
                    <Link to={'/'}><img className="w-[5vw] mb-8" src="/public/logo.png" alt="invisya logo" /></Link>
                </div>
                <ul className="text-left text-zinc-50 w-[15vw] text-lg p-1">
                    <li> <Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/patients'}>Patients</Link></li>
                    <li><Link to={'/orders'}>Orders</Link></li>
                    <li><a href="#">Billing & Invoices</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-32">
                Logout
            </button>
        </div>

    );
};

export default Sidebar;