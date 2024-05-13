import React from 'react';
import treatment from '../../assets/images/treatment.png'
import appontment from '../../assets/images/appointment.png'
import Button from '../CommonComponent/Button';

const DentalCare = () => {
    return (
        <section>
            <div className="hero mt-32">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <img src={treatment} alt='' className="w-4/5 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        {<Button>Getting Started </Button>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;