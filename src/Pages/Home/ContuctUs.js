import React from 'react';
import bgAppointment from '../../assets/images/appointment.png'
import Button from '../CommonComponent/Button';
const ContuctUs = () => {
    return (
        <div className='flex justify-center mt-32 p-6 rounded-lg' style={{
            background: `url(${bgAppointment})`,
            backgroundSize: 'cover'
        }}>
            <section className=''>
                <div className='text-center mb-8'>
                    <h4 className='text-primary text-xl font-bold'>Contact Us</h4>
                    <h3 className=' text-3xl text-white'>Stay connected with us</h3>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <input type="email" placeholder="Your Email" className="input rounded-lg input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="input rounded-lg input-bordered input-primary w-full max-w-xs" />
                    <textarea placeholder="Leave your comment" className="textarea rounded-lg textarea-bordered textarea-md textarea-primary w-full max-w-xs" ></textarea>
                </div>
                <div className='text-center mt-3 mb-3'>
                {<Button>Submit Here</Button>}
                </div>
            </section>
        </div>
    );
};

export default ContuctUs;