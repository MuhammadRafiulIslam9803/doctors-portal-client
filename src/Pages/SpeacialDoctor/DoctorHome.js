import React from 'react';
import Button from '../CommonComponent/Button';
import chair from '../../assets/images/chair.png'
import appointment from '../../assets/images/bg.png'
import { useQuery } from '@tanstack/react-query';
import Doctors from './Doctors';

const DoctorHome = () => {
    const {data: specialDoctors = [],} = useQuery({
        queryKey: ['special'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/special');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <section>
            <div>
                <div className="hero" style={{
                    background: `url(${appointment})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} alt='' className=" w-1/2 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Here Our Speacial Doctor , Make a Meeting</h1>
                            <p className="py-6">Here we Provide the Best Treatment for your nice and importent teeth , so you can get our appointment and shining your teeth .</p>
                            {<Button>Getting Started </Button>}
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className='mt-32'>
                <h1 className="text-3xl font-bold text-primary text-center mb-28">Available Special Doctors</h1>
                <div className=' grid  lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                {
                    specialDoctors.map(doctor=><Doctors
                    key={doctor._id}
                    doctor={doctor}
                    ></Doctors>)
                }
                </div>
            </section>
        </div>
    );
};

export default DoctorHome;