import React from 'react';

const Card = ({ card }) => {
    const { name, icon, discription } = card
    return (
        <section>
            <div className="card text-white bg-gradient-to-r from-cyan-300 to-sky-800">
                <div className="card-body  grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{discription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;