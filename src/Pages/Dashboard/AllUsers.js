import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          refetch();
        }
      })
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">All Users</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-2 border border-gray-300">#</th>
                <th className="p-2 border border-gray-300">Name</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id} className="hover:bg-gray-200 transition duration-200">
                  <th className="p-2 border border-gray-300 text-center">{i + 1}</th>
                  <td className="p-2 border border-gray-300 text-center">{user.name}</td>
                  <td className="p-2 border border-gray-300 text-center">{user.email}</td>
                  <td className="p-2 border border-gray-300 text-center">
                    {user?.role !== 'admin' && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-primary rounded-lg"
                      >
                        Make Admin
                      </button>
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

export default AllUsers;