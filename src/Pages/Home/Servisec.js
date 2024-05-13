import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import Service from './Service';

const Servisec = () => {
    const serviceItem = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            discription: 'Fluoride supplements are recommended to prevent tooth decay in children older than six months in areas where the drinking water is low in fluoride.',
            icon: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            discription: 'A filling is used to treat a small hole, or cavity, in a tooth. To repair a cavity, a dentist removes the decayed tooth tissue and then fills the space with a filling material',
            icon: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            discription: 'In-office bleaching provides the quickest way to whiten teeth. With in-office bleaching, the whitening product is applied directly to the teeth',
            icon: teeth
        },
    ]
    return (
        <section>
            <div className=' text-center mt-32'>
                <h3 className=' text-primary font-bold text-xl uppercase'>Service</h3>
                <h4 className='text-3xl'>Services We Provide</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    serviceItem.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Servisec;