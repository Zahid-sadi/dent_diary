import { faArrowLeft, faArrowRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Patients = () => {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl text-left">Patients</h2>
                <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faUserPlus} /> Add Patient
                </button>
            </div>
            <div className="flex gap-x-4">
                <input className="border-2 border-slate-400 rounded-full px-8 py-2" placeholder="Search by Patient Name" type="text" />
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                                    Search
                                </button>
            </div>
            <div className="mt-8">
                <table className="w-full table-auto text-left">
                    <thead className="bg-slate-200">
                        <tr>
                            <th className="p-2">Sl.</th>
                            <th className="p-2">Patient Name</th>
                            <th className="p-2">Doctor Name</th>
                            <th className="p-2">Date Added</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Gender</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Address</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2">1</td>
                            <td className="p-2">Malcolm Lockyer</td>
                            <td className="p-2">Eden How.</td>
                            <td className="p-2">01-01-2024</td>
                            <td className="p-2">n/a</td>
                            <td className="p-2">Male</td>
                            <td className="p-2">+4478025156</td>
                            <td className="p-2">North Forest Road</td>
                            <td className="flex gap-1.5 p-2">
                                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                    Create
                                </button>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    <Link to={'/update-patient/id'}>Edit</Link>
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2">2</td>
                            <td className="p-2">Hody Kotz</td>
                            <td className="p-2">Eden How.</td>
                            <td className="p-2">01-01-2024</td>
                            <td className="p-2">n/a</td>
                            <td className="p-2">Male</td>
                            <td className="p-2">+4478025156</td>
                            <td className="p-2">North Forest Road</td>
                            <td className="flex gap-1.5 p-2">
                                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                    Create
                                </button>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end items-center gap-4">
               Total items: 1 <FontAwesomeIcon icon={faArrowLeft} /> <button className="rounded-full border-2 px-2">1</button> <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );
};

export default Patients;