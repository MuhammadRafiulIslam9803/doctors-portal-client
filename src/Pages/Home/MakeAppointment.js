import React from 'react';
import Button from '../CommonComponent/Button';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section>
            <div className="hero mt-32 rounded-lg" style={{
                    background: `url(${appointment})`,
                    backgroundSize: 'cover'
                }}>
                <div className="hero-content text-white grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <img src={doctor} alt='' className="-mt-32 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className=' text-3xl text-primary mb-5 font-bold'>Appointment</h2>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        {<Button>Appointment </Button>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;