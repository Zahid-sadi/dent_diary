import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItem } from "localforage";
import PropTypes from 'prop-types';
import { useReducer, useRef, useState } from "react";


const ModalOrders = ({ closeModal, setUploadType }) => {

    const [showInputField, setShowInputField] = useState(false);
    const [buttonColor, setButtonColor] = useState(false);
    const [buttonColor2, setButtonColor2] = useState(false);
    const [buttonColor3, setButtonColor3] = useState(false);
    // const [file, setFile] = useState({});
    const [file, setFile] = useState([] | null);
    const [shouldHighlight, SetshouldHighlight] = useState(false);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const preventDefaultHandler = (e) => {
        e.preventDefault();
        e.stopPropagation()
    }

    const inputRef = useRef();
    const dragInputRef = useRef();

    const handleInputChange = () => {
        const newFiles = Array.from(inputRef.current.files); // Convert FileList to Array
        let updatedFile = {};
        newFiles.forEach(newFile => {
            updatedFile = { ...updatedFile, [newFile.name]: newFile }; // Add each file to the updated file object
        });
        setFile(prevFile => ({ ...prevFile, ...updatedFile }));
    }

    function uploadFileInHiddenInput(e) {
        const hidden = document.getElementById("hidden-input");
        e.preventDefault();
        hidden.click();
    }

    function handleClickUpdate() {
        forceUpdate();
      }



    // function submitFile() {
    // }


    // function cancelUpload() {
    //     while (gallery.children.length > 0) {
    //         gallery.lastChild.remove();
    //     }
    //     FILES = {};
    //     empty.classList.remove("hidden");
    //     gallery.append(empty);
    // }


    return (
        <div className="w-full h-full fixed z-0 left-0 top-0">
            <div className="w-7/12 mx-auto my-auto text-white shadow-xl relative top-[10%] z-10">
                <div className='bg-white rounded p-4 h-50 mx-auto my-auto text-blue-500'>
                    <div className="flex justify-between mb-2">
                        <h2 className="text-xl">Add Scan File</h2>
                        <span><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full" onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></button></span>
                    </div>
                    <div>
                        <h2 className="text-left font-medium mb-2">Please select scan type before uploading:</h2>
                        <main className="container mx-auto max-w-screen-lg h-full">
                            <article aria-label="File Upload Modal" className="relative h-full flex flex-col rounded-md" >

                                {
                                    showInputField &&
                                    <div ref={dragInputRef} name="dragfiles"
                                        draggable="true"
                                        onDragOver={(e) => {
                                            preventDefaultHandler(e);
                                            SetshouldHighlight(true);
                                        }}
                                        onDragEnter={(e) => {
                                            preventDefaultHandler(e);
                                            SetshouldHighlight(true);
                                        }}
                                        onDragLeave={(e) => {
                                            preventDefaultHandler(e);
                                            SetshouldHighlight(false);
                                        }}
                                        onDrop={(e) => {
                                            preventDefaultHandler(e);
                                             const newFiles = Array.from(e.dataTransfer.files);
                                             let updatedFile = {};
                                             newFiles.forEach(newFile => {
                                                 updatedFile = { ...updatedFile, [newFile.name]: newFile }; // Add each file to the updated file object
                                             });
                                             setFile(prevFile => ({ ...prevFile, ...updatedFile }));
                                            // setFile(allFile);
                                            SetshouldHighlight(false);
                                            console.log(file);
                                        }}
                                    >
                                        <div id="overlay" className={`w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md ${shouldHighlight && "draggedover"}`}>
                                            <i>
                                                <svg className="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                                                </svg>
                                            </i>
                                            <p className="text-lg text-blue-700">Drop files to upload</p>
                                        </div>

                                        <section className="h-full overflow-auto p-8 w-full h-full flex flex-col">
                                            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                                                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                                    <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                                                </p>
                                                {/* <input id="hidden-input" type="file" multiple className="invisible" onChange={(e) => fileInputOnChange(e)} /> */}
                                                <input id="hidden-input" type="file" name="files" accept multiple={true} className="invisible" ref={inputRef} onChange={handleInputChange} />
                                                <button id="upload-button" className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none" onClick={(e) => uploadFileInHiddenInput(e)}>
                                                    Upload a file
                                                </button>
                                            </header>
                                            <div className="flex w-3/4 mt-4">
                                                {
                                                    Object.keys(file).length > 0 &&
                                                    Object.keys(file).map((singleFile) => {
                                                        return <div key={file[singleFile].size} className="w-3/4 flex flex-col justify-center items-center">
                                                            <img className="w-2/4" src={URL.createObjectURL(file[singleFile])} alt="image preview" />
                                                            <h2 className="text-sm text-wrap">{file[singleFile].name}</h2>
                                                            <button className="btn" 
                                                            onClick={() => {
                                                                delete file[singleFile];
                                                                handleClickUpdate();
                                                            }}
                                                            >Delete</button>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            {
                                                Object.keys(file).length <= 0 &&
                                                <div>
                                                    <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900 to-upload">
                                                        To Upload
                                                    </h1>
                                                    <ul id="gallery" className="flex flex-1 flex-wrap m-1">
                                                        <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center items-center">
                                                            <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                            <span className="text-small text-gray-500">No files selected</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            }
                                        </section>
                                    </div>
                                }

                                <span className="flex">
                                    <span className={`${buttonColor ? "bg-slate-300" : "bg-slate-100"}  mr-1`}><button onClick={() => { setShowInputField(true); setButtonColor(true); setButtonColor2(false); setButtonColor3(false) }} className="p-3">Maxillary</button></span>
                                    <span className={`${buttonColor2 ? "bg-slate-300" : "bg-slate-100"}  mr-1`}><button onClick={() => { setShowInputField(true); setButtonColor2(true); setButtonColor(false); setButtonColor3(false); }} className="p-3">Mandibular</button></span>
                                    <span className={`${buttonColor3 ? "bg-slate-300" : "bg-slate-100"}  mr-1`}><button onClick={() => { setShowInputField(true); setButtonColor3(true); setButtonColor(false); setButtonColor2(false); }} className="p-3">Bite Scan</button></span>
                                </span>
                                <footer className="flex justify-between px-8 pb-8 pt-4">
                                    <h2 className="text-red-500 text-sm">*Max file size 1000MB</h2>
                                    <span>
                                        <button id="submit" className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none" onClick={() => submitFile()}>
                                            Upload now
                                        </button>
                                        <button id="cancel" className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none" onClick={() => { closeModal() }}>
                                            Cancel
                                        </button>
                                    </span>
                                </footer>
                            </article>
                        </main>


                        <template id="file-template">
                            <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                                <article tabIndex="0" className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
                                    <img alt="upload preview" className="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />

                                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                        <h1 className="flex-1 group-hover:text-blue-800"></h1>
                                        <div className="flex">
                                            <span className="p-1 text-blue-800">
                                                <i>
                                                    <svg className="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <p className="p-1 size text-xs text-gray-700"></p>
                                            <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                                                <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </section>
                                </article>
                            </li>
                        </template>

                        <template id="image-template">
                            <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                                <article tabIndex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                    <img alt="upload preview" className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                    <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                        <h1 className="flex-1"></h1>
                                        <div className="flex">
                                            <span className="p-1">
                                                <i>
                                                    <svg className="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                                    </svg>
                                                </i>
                                            </span>

                                            <p className="p-1 size text-xs"></p>
                                            <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </section>
                                </article>
                            </li>
                        </template>
                    </div>
                </div>
            </div>
            <div className="w-full h-full fixed z-0 left-0 top-0 bg-black opacity-15">
            </div>
        </div>
    );
};

export default ModalOrders;
ModalOrders.propTypes = {
    prop: PropTypes.string,
    closeModal: PropTypes.node.isRequired,
    setUploadType: PropTypes.node.isRequired,
    uploadFile: PropTypes.node.isRequired,
    // Other prop validations can continue from here
};


