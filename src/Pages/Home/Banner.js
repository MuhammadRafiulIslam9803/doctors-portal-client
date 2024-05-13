import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../CommonComponent/Button';
import appointment from '../../assets/images/bg.png'
import CardConteiner from './CardConteiner';
import Servisec from './Servisec';
import DentalCare from './DentalCare';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import ContuctUs from './ContuctUs';

const Banner = () => {
    return (
        <section>
            <div>
                <div className="hero" style={{
                    background: `url(${appointment})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} alt='' className=" w-1/2 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p className="py-6">Here we Provide the Best Treatment for your nice and importent teeth , so you can get our appointment and shining your teeth .</p>
                            {<Button>Getting Started </Button>}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CardConteiner></CardConteiner>
                <Servisec></Servisec>
                <DentalCare></DentalCare>
                <MakeAppointment></MakeAppointment>
                <Testimonial></Testimonial>
                <ContuctUs></ContuctUs>
            </div>
        </section>

    );
};

export default Banner;