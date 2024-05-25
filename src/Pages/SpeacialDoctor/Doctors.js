import React from 'react';
import Button from '../CommonComponent/Button';
import { Link } from 'react-router-dom';

const Doctors = ({ doctor }) => {
    const { id, name, specialty, country, details, email } = doctor
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="card bg-white shadow-xl rounded-lg w-full max-w-2xl p-6">
          <div className="card-body">
            <h2 className="card-title text-primary text-2xl font-bold text-center mb-4">{name}</h2>
            <div className="divider divider-success mb-4">Information</div>
            <div className="text-center">
              <h2 className='text-green-600 text-lg mt-5'>Speciality: {specialty}</h2>
              <h2 className='text-green-600 text-lg'>Country: {country}</h2>
              <h2 className='text-green-600 text-lg mb-5'>Email: {email}</h2>
            </div>
            <p className='mb-4 text-gray-700'>{details}</p>
            <div className="card-actions justify-end">
              <Link to={`/special/${id}`} state={{ doctor }}>
                <Button className="btn btn-primary rounded-lg">Make Meeting</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Doctors;