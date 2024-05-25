
import React, { useContext } from 'react';
import { AuthContext } from '../Authontication/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
            <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-6 text-center">My Appointments</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="p-4 border border-gray-300"></th>
                                <th className="p-4 border border-gray-300">Name</th>
                                <th className="p-4 border border-gray-300">Treatment</th>
                                <th className="p-4 border border-gray-300">Date</th>
                                <th className="p-4 border border-gray-300">Time</th>
                                <th className="p-4 border border-gray-300">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, i) => (
                                <tr key={booking._id} className="hover:bg-gray-200 transition duration-200">
                                    <th className="p-4 border border-gray-300 text-center">{i + 1}</th>
                                    <td className="p-4 border border-gray-300 text-center">{booking.patient}</td>
                                    <td className="p-4 border border-gray-300 text-center">{booking.treatment}</td>
                                    <td className="p-4 border border-gray-300 text-center">{booking.appointmentDate}</td>
                                    <td className="p-4 border border-gray-300 text-center">{booking.slot}</td>
                                    <td className="p-4 border border-gray-300 text-center">
                                        {booking.price && !booking.paid ? (
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className="btn btn-sm btn-accent rounded-lg">Pay</button>
                                            </Link>
                                        ) : (
                                            booking.price && booking.paid && <span className="text-green-500 font-bold">Paid</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <aside className="text-center mt-10 text-gray-600">
                <p>&copy; 2024 - All rights reserved by Doctors Portal Industries Ltd</p>
            </aside>
        </div>
    );
};

export default MyAppointment;