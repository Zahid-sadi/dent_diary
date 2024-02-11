import { Link } from "react-router-dom";
import Select from "react-select";


const EditPatient = () => {

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'third', label: 'Prefer Not to Say' }
    ]

    return (
        <div className="mx-auto container text-center">
            <h2 className="font-bold">Update Patient</h2>   
              
            <form action="">
            <div className="mt-5">
                <h2 className="text-left text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                    <div className="flex justify-evenly gap-x-4">
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">* First name</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Last Name</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">* Email</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-x-4 mt-2">
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Gender</label>
                            <Select options={options} />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Date of Birth</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Country Code</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Telephone</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
            </div>

            <div className="mt-10">
                <h2 className="text-left text-base font-semibold leading-7 text-gray-900">Address Information</h2>
                    <div className="flex justify-evenly gap-x-4">
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">Address Line 1</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Address Line 2</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="flex justify-evenly gap-x-4">
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">City</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">State</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div className="flex justify-evenly gap-x-4">
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left" title="First Name">Zip Code</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="mt-2 w-full">
                            <label className="block text-sm font-medium leading-6 text-gray-900 text-left">Country</label>
                            <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <Link to={'/update-patient/id'}>Update</Link>
                                </button>

            </div>
            </form>

        </div>
    );
};

export default EditPatient;