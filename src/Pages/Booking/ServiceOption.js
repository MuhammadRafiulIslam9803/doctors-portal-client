import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../Authontication/AuthProvider';
import toast from 'react-hot-toast';

const ServiceOption = ({ singleService ,setSingleService, selected, refetch }) => {
    const {user} = useContext(AuthContext)

    const { name, slots ,price } = singleService;
    const date = format(selected, 'PP');

    const handleBookingInfo = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const petientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: petientName,
            slot,
            email,
            phone,
            price,
        }

        fetch('http://localhost:5000/bookings',{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data =>{
            if (data.acknowledged){
                toast.success(`${name} Booking Confirmed`)
                refetch()
            }
            else{
                toast.error(data.message);
            }
        })
        // console.log(booking);
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
                        {
                            user?.uid && <>
                            <input name="name" type="text" disabled defaultValue={user.displayName} placeholder="Your Name" className="input w-full input-bordered input-accent" />
                            <input name="email" type="email" disabled defaultValue={user.email} placeholder="Email Address" className="input w-full input-bordered input-accent" />
                            </>
                        }
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