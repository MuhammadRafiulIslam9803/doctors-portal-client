import { format } from 'date-fns';
import React from 'react';

const ServiceOption = ({ singleService ,setSingleService, selected }) => {
    const { name, slots } = singleService;
    const date = format(selected, 'PP');

    const handleBookingInfo = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);
        // setSingleService(null);
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center text-accent">{name}</h3>

                    <form onSubmit={handleBookingInfo} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered select-accent w-full">
                            {
                                slots.map((slot, i) => <option 
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered input-accent" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered input-accent" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered input-accent" />
                        <br />
                        <input className='btn btn-accent rounded-lg text-white text-xl w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceOption;