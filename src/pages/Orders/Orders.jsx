import { faArrowLeft, faArrowRight, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Orders = () => {
    return (
        <div>
        <div className="flex justify-between">
            <h2 className="font-bold text-xl text-left">Orders</h2>
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faArrowsRotate} /> Reload
            </button>
        </div>
        <div className="flex">
            <input className="border-2 border-slate-400 rounded-full px-8 py-2" placeholder="Search by Patient Name" type="text" />
        </div>
        <div className="mt-8">
            <table className="w-full table-auto text-left">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="p-2">Sl.</th>
                        <th className="p-2">Case ID</th>
                        <th className="p-2">Date Added</th>
                        <th className="p-2">Doctor</th>
                        <th className="p-2">Business Name</th>
                        <th className="p-2">Patient</th>
                        <th className="p-2">Patient Order Count</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">1</td>
                        <td className="p-2">AB0001254</td>
                        <td className="p-2">02 Feb 2024</td>
                        <td className="p-2">Dr Adi Sharateh</td>
                        <td className="p-2">N/A</td>
                        <td className="p-2">Ameer Alani</td>
                        <td className="p-2">2</td>
                        <td className="p-2">Draft</td>
                        <td className="flex gap-1.5 p-2">
                            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                View
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Edit
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Chat
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">2</td>
                        <td className="p-2">AB0001255</td>
                        <td className="p-2">02 Feb 2024</td>
                        <td className="p-2">Dr Adi Sharateh</td>
                        <td className="p-2">N/A</td>
                        <td className="p-2">Ameer Alani</td>
                        <td className="p-2">4</td>
                        <td className="p-2">Draft</td>
                        <td className="flex gap-1.5 p-2">
                            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                View
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Edit
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Chat
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
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

export default Orders;