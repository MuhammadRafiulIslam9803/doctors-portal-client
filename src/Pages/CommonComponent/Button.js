import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn text-white rounded-lg btn-primary bg-gradient-to-r from-primary to-secondary">{children}</button>
        </div>
    );
};

export default Button;