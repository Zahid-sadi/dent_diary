// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Select from "react-select";


const EditPatient = () => {
    // const [patients, setPatient] = useState([]);
    const patientDetails = useLoaderData();
    const patientData = patientDetails.data[0];
    // console.log(patientData._id);
    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'third', label: 'Prefer Not to Say' }
    ];


    // useEffect(() => {
    //     const getAllPatients = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:3000/app/all-patients')
    //             setPatient(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getAllPatients();
    // }, [patients])


    const handleEditPatient = (e) => {
        e.preventDefault();
        const form = e.target;
        const patient = {
            patientId: patientData._id,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            gender: form.gender.value,
            dob: form.dob.value,
            countryCode: form.countryCode.value,
            telephone: form.telephone.value,
            address1: form.address1.value,
            address2: form.address2.value,
            city: form.city.value,
            state: form.state.value,
            zipCode: form.zipCode.value,
            country: form.country.value,
        };

        const editPatient = async () => {
            try {
                await axios.patch('http://localhost:3000/app/update-patient', patient)
                    .then(function (response) {
                        toast.success('Successfully Updated!');
                        console.log('response:', response);
                    })
                    .catch(function (error) {
                        console.log('error:', error);
                        toast.error("Unsuccessful. Please try again later")
                    });
            }
            catch (err) {
                console.log(err);
            }
        };

        editPatient();
        // console.log(patient);
    }

    return (
        <div>
            <div><Toaster /></div>
            <div className="mx-auto container text-center">
                <h2 className="font-bold">Update Patient</h2>

                <form action="" onSubmit={(e) => handleEditPatient(e)}>
                    <div className="mt-5">
                        <h2 className="text-left text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                        <div className="flex justify-evenly gap-x-4">
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">* First name</label>
                                <input type="text" name="firstName"
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.firstName} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Last Name</label>
                                <input type="text" name="lastName" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.lastName} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">* Email</label>
                                <input type="text" name="email" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.email} />
                            </div>
                        </div>
                        <div className="flex justify-evenly gap-x-4 mt-2">
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Gender</label>
                                <Select name="gender" defaultValue={{ value: patientData.gender, label: patientData.gender }} options={options} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Date of Birth</label>
                                <input type="text" name="dob" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.dob} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Country Code</label>
                                <input type="text" name="countryCode" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.countryCode} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Telephone</label>
                                <input type="text" name="telephone" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.telephone} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-left text-base font-semibold leading-7 text-gray-900">Address Information</h2>
                        <div className="flex justify-evenly gap-x-4">
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">Address Line 1</label>
                                <input type="text" name="address1" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.address1} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Address Line 2</label>
                                <input type="text" name="address2" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.address2} />
                            </div>
                        </div>

                        <div className="flex justify-evenly gap-x-4">
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">City</label>
                                <input type="text" name="city" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.city} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">State</label>
                                <input type="text" name="state" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.state} />
                            </div>
                        </div>


                        <div className="flex justify-evenly gap-x-4">
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">Zip Code</label>
                                <input type="text" name="zipCode" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.zipCode} />
                            </div>
                            <div className="mt-2 w-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Country</label>
                                <input type="text" name="country" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={patientData.country} />
                            </div>
                        </div>

                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditPatient;