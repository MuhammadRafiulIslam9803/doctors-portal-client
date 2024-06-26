import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })
                }


            })
    }

    if (isLoading) {
        return <div>loading ....</div>
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">Add A Doctor</h2>
          <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is Required" })}
                className="input input-bordered rounded-lg w-full"
              />
              {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered rounded-lg w-full"
              />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                {...register('specialty')}
                className="select input-bordered rounded-lg w-full"
              >
                {specialties.map(specialty => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("image", { required: "Photo is Required" })}
                className="input input-bordered rounded-lg w-full"
              />
              {errors.img && <p className='text-red-500 text-sm mt-1'>{errors.img.message}</p>}
            </div>
            <input
              className='btn btn-primary rounded-lg w-full mt-4'
              value="Add Doctor"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
};

export default AddDoctor;