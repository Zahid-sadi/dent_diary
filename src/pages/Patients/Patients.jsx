import { faArrowLeft, faArrowRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";


const Patients = () => {
    const [patients, setPatient] = useState([]);


    useEffect(() => {
        const getAllPatients = async () => {
            try {
                const res = await axios.get('http://localhost:3000/app/all-patients')
                setPatient(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getAllPatients();
    }, [patients])

    const handleDeletePatient = (patientId) => {
        console.log(`deleting ${patientId}`);
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete(`http://localhost:3000/app/delete-patient/${patientId}`)
                .then(res => {
                    if (res.status == 200) {
                        toast.success('Successfully Deleted!');
                    }
                })
        }
    }
    // console.log(patients);

    return (
        <>
            <div><Toaster /></div>
            <div>
                <div>
                    <ul>
                        <li> <Link to="/prescription">prescription</Link></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="flex justify-between">
                    <h2 className="font-bold text-xl text-left">Patients</h2>
                    <Link to={'/add-patient'}> <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon icon={faUserPlus} /> Add Patient
                    </button></Link>
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
                            {
                                patients.map((patient, i) =>
                                    <>
                                        <tr key={patient._id}>
                                            <td className="p-2"> {i + 1} </td>
                                            <td className="p-2">{patient.firstName ? patient.firstName.concat(' ').concat(patient.lastName) : 'N/A'}</td>
                                            <td className="p-2">{patient.doctorName ? patient.doctorName : 'N/A'}</td>
                                            <td className="p-2">{patient.dateAdded ? new Date(patient.dateAdded).toLocaleString() : 'N/A'}</td>
                                            <td className="p-2">{patient.email ? patient.email : 'N/A'}</td>
                                            <td className="p-2">{patient.gender ? patient.gender : 'N/A'}</td>
                                            <td className="p-2">{patient.contact ? patient.contact : 'N/A'}</td>
                                            <td className="p-2">{patient.address ? patient.address : 'N/A'}</td>
                                            <td className="flex gap-1.5 p-2">
                                                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                                    <Link to={`/create-order`}>Order</Link>
                                                </button>
                                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                                    <Link to={`/update-patient/${patient._id}`}>Edit</Link>
                                                </button>
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeletePatient(patient._id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </>)
                            }

                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-end items-center gap-4">
                    Total items: 1 <FontAwesomeIcon icon={faArrowLeft} /> <button className="rounded-full border-2 px-2">1</button> <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </>
    );
};

export default Patients;