import { Link } from "react-router-dom";


const Sidebar = () => {



    return (
        <div className="bg-sky-600 w-max h-screen p-8">
            <Link to={'/'}><img className="w-[10vw] mb-8" src="/public/invisya-logo.jpeg" alt="invisya logo" /></Link>
            <ul className="text-left text-zinc-50 w-[15vw] text-lg">
                <li> <Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/patients'}>Patients</Link></li>
                <li><Link to={'/orders'}>Orders</Link></li>
                <li><a href="#">Billing & Invoices</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;