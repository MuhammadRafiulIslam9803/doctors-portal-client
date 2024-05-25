import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, closeModal, modalData, successAction }) => {
    return (
        <div className="modal-container">
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">{title}</h3>
                    <p className="py-4 text-base">{message}</p>
                    <div className="modal-action flex justify-end">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn btn-primary mr-2 rounded-lg"
                        >
                            {successButtonName}
                        </label>
                        <button onClick={closeModal} className="btn rounded-lg btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ConfirmationModal;