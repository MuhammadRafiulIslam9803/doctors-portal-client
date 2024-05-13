import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import Card from './Card';

const CardConteiner = () => {
    const cardItems = [
        {
            _id : 1,
            name : 'Opening Hours',
            discription : 'Opening At 10:00 AM to 8 PM Everyday',
            icon : clock
        },
        {
            _id : 2,
            name : 'Visit our location',
            discription : 'Barabhita 10/2 , Phulbari Road , Kurigram ',
            icon : marker
        },
        {
            _id : 3,
            name : 'Contact us now',
            discription : 'phone : +880 1704260804',
            icon : phone
        },
    ]
    return (
        <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32'>
            {
                cardItems.map(card => <Card
                key={card._id}
                card={card}
                ></Card>)
            }
        </section>
    );
};

export default CardConteiner;