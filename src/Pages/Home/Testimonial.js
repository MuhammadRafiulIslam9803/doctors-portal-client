import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialReview from './TestimonialReview';

const Testimonial = () => {
    const reviewersItem = [
        {
            _id : 1,
            name : 'Leonardo Decap',
            country : 'England',
            discription : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, contenty',
            icon : people1
        },
        {
            _id : 2,
            name : 'Aronee lido',
            country : 'Australia',
            discription : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ',
            icon : people2
        },
        {
            _id : 3,
            name : 'Asyma leco',
            country : 'Japan',
            discription : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon : people3
        },
    ]
    return (
        <section className='mt-32'>
            <header className=' flex justify-between align-middle mb-3'>
                <div className='p-5'>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </header>
            <footer className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12'>
                {
                    reviewersItem.map(review => <TestimonialReview
                    key={review._id}
                    review={review}
                    ></TestimonialReview>)
                }
            </footer>
        </section>
    );
};

export default Testimonial;