
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


const ModalBasic = ({ closeModal }) => {



    return (
        <div>
            <div className="w-7/12 mx-auto my-auto text-white relative z-10">
                <div className='bg-white rounded p-4 h-50 mx-auto my-auto text-blue-500'>
                    <div className="flex justify-between mb-2">
                        <h2>Add Scan File</h2>
                        <span><FontAwesomeIcon icon={faXmark} className='text-blue-500' /></span>
                    </div>
                    <span className='flex justify-end mt-5'>
                    <button className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded mr-2" onClick={closeModal}>Cancel</button>
                    <button className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Cancel</button>
                    </span>
                </div>
            </div>
            <div className="w-full h-full fixed z-0 left-0 top-0 bg-black opacity-15">
            </div>
        </div>
    );
};

export default ModalBasic;
ModalBasic.propTypes = {
    prop: PropTypes.string,
    closeModal: PropTypes.node.isRequired,
    // Other prop validations can continue from here
};