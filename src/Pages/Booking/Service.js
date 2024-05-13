import React from 'react';

const Service = ({ service ,setSingleService }) => {
    const { name ,slots} = service
    const handleButtonClick = () => {
        // First action: Set single service (if needed)
        setSingleService(service);

        // Second action: Show modal
        document.getElementById('my_modal_3').showModal();
    };
    return (
        <section>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold text-primary">{name}</h2>
                    <p className='text-center mt-1 text-black'>{slots.length > 0 ? slots[0] : 'Sorry try another day'}</p>
                    <p className='text-center mt-1 mb-1 text-black'>{slots.length} { slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                    <button onClick={handleButtonClick} className="btn text-white rounded-lg btn-primary">Get Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;