import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../Authontication/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const { logOut} = useContext(AuthContext)

    const handleLogOutUser = () => {
        logOut()
            .then(() => {
                navigate('/login')
             })
            .catch(erro => console.error(erro));
    }

    
    return (
        <div>
        <p className='text-red-500'>Something went wrong!!!</p>
        <p className='text-red-400'>{error.statusText || error.message}</p>
        <h4 className="text-3xl"> Please <button onClick={handleLogOutUser}>Logout</button> and log back in</h4>
    </div>
    );
};

export default DisplayError;