import React, { useState } from 'react';
import BookingBanner from './BookingBanner';
import ServiceConteiner from './ServiceConteiner';

const BookingHome = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <BookingBanner
                selected={selected}
                setSelected={setSelected}
            ></BookingBanner>
            <ServiceConteiner
            selected={selected}
            ></ServiceConteiner>
        </div>
    );
};

export default BookingHome;