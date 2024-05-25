import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../CommonComponent/ConfirmationModal';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }


    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <div>loading ...</div>
    }
    return (
        <div>
            <h2 className="text-3xl text-center text-primary mb-3">Added Doctor: {doctors?.length}</h2>
            <div className="overflow-x-auto p-4 bg-gray-50 rounded-lg shadow-md">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 border border-gray-300"></th>
                            <th className="p-3 border border-gray-300">Avatar</th>
                            <th className="p-3 border border-gray-300">Name</th>
                            <th className="p-3 border border-gray-300">Email</th>
                            <th className="p-3 border border-gray-300">Specialty</th>
                            <th className="p-3 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, i) => (
                            <tr key={doctor._id} className="hover:bg-gray-100 transition duration-200">
                                <th className="p-3 border border-gray-300 text-center">{i + 1}</th>
                                <td className="p-3 border border-gray-300 text-center">
                                    <div className="avatar">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img src={doctor.image} alt={`${doctor.name}'s avatar`} />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 border border-gray-300 text-center">{doctor.name}</td>
                                <td className="p-3 border border-gray-300 text-center">{doctor.email}</td>
                                <td className="p-3 border border-gray-300 text-center">{doctor.specialty}</td>
                                <td className="p-3 border border-gray-300 text-center">
                                    <label
                                        onClick={() => setDeletingDoctor(doctor)}
                                        htmlFor="confirmation-modal"
                                        className="btn btn-sm btn-error rounded-lg"
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && (
                    <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingDoctor.name}, it cannot be undone.`}
                        successAction={handleDeleteDoctor}
                        successButtonName="Delete"
                        modalData={deletingDoctor}
                        closeModal={closeModal}
                        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
                        modalClassName="bg-white rounded-lg shadow-md p-6"
                        titleClassName="text-xl font-bold mb-4"
                        messageClassName="text-gray-700 mb-6"
                        buttonWrapperClassName="flex justify-end"
                        successButtonClassName="btn btn-danger"
                    />
                )
            }
        </div>
    );
};

export default ManageDoctors;