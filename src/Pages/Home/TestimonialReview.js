import React from 'react';

const TestimonialReview = ({ review }) => {
    const { name, country, discription, icon } = review
    return (
        <section>
            <div className="card bg-base-100 shadow-xl p-1">
                <div className="card-body">
                    <p>{discription}</p>
                    <div className="card-actions justify-evenly items-center">
                        <figure>
                            <div className="avatar">
                                <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={icon} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div>
                            <h3>{name}</h3>
                            <h4>{country}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialReview;