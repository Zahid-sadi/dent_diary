import axios from "axios";
import { useState } from "react";
import ModalOrders from "./ModalOrders";
// import UploadDrop from "../../components/UploadDrop";

const CreateOrder = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ uploadType, setUploadType ] = useState();

    const closeModal = () => {
        setShowModal(false);
    };

    const uploadFile = (e) => {
        const data = new FormData();
        console.log(uploadType);
        data.append("file", e.target.files[0]);
        axios.post("http://localhost:3000/app/uploadFileAPI", data).then((res) => {
            // then print response status
            console.log(res.statusText);
        });
    };

    return (
        <>
            {showModal && <ModalOrders closeModal={closeModal} setUploadType={setUploadType} uploadFile={uploadFile} />}
            <div>
                <h2 className="font-bold text-xl text-left">Create Order page</h2>
            </div>
            <div className="font-bold text-sm text-left">
                <h2>Patient Name:</h2>
                <h2>Patient Order Count:</h2>
                <h2>Case ID:</h2>
                <br />
                <hr />
            </div>
            <br />
            <div className="flex justify-around gap-5 mb-12">
                <h2>01: Scans and Imaging</h2>
                <h2>02: Prescription</h2>
                <h2>03: Submit</h2>
            </div>
            <div>
                <div className="w-100 grid grid-cols-1 lg:grid-cols-2 justify-around gap-5">
                    <div className="flex flex-col">
                        <div className="w-full h-64 p-2 mx-5  bg-blue-100">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-red-500 mr-2">*</span>scans
                                </h2>
                                <button
                                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold mb-2 py-2 px-4 rounded"
                                    onClick={() => setShowModal(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="border-dashed border-2 border-blue-600 px-5 py-20">
                                <p>No scan files here</p>
                            </div>
                        </div>
                        <small className="text-red-700 mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum a cum!
                        </small>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full h-64 p-2 mx-5  bg-blue-100">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-red-500 mr-2">*</span>scans
                                </h2>
                                <button
                                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold mb-2 py-2 px-4 rounded"
                                    onClick={() => setShowModal(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="border-dashed border-2 border-blue-600 px-5 py-20">
                                <p>No scan files here</p>
                            </div>
                        </div>
                        <small className="text-red-700 mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum a cum!
                        </small>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full h-64 p-2 mx-5  bg-blue-100">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-red-500 mr-2">*</span>scans
                                </h2>
                                <button
                                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold mb-2 py-2 px-4 rounded"
                                    onClick={() => setShowModal(true)}
                                >
                                    Add
                                </button>
                            </div>
                            <div className="border-dashed border-2 border-blue-600 px-5 py-20">
                                <p>No scan files here</p>
                            </div>
                        </div>
                        <small className="text-red-700 mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum a cum!
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateOrder;
