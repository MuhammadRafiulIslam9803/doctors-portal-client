import React, { useEffect, useState } from 'react';
import Service from './Service';
import { format } from 'date-fns';
import ServiceOption from './ServiceOption';
import { useQuery } from '@tanstack/react-query';

const ServiceConteiner = ({ selected }) => {
    // const [services, setServices] = useState([])
    const [singleService, setSingleService] = useState({name :'not found',slots :["08.00 AM - 08.30 AM"]})
    const date = format(selected, 'PP');
    const {data : services = [] , refetch} = useQuery({
        queryKey:["services" , date],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/appointment?date=${date}`)
            const data = await res.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointment')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className='mt-32'>
            <p className='text-center text-2xl text-primary font-bold'>Available Services on {format(selected, 'PP')}</p>
            <p className='text-center text-xl text-accent mt-4'>Please select a service</p>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setSingleService={setSingleService}
                    ></Service>)
                }
            </div>
            <div>
                {/* {
                    singleService &&
                    <ServiceOption
                        singleService={singleService}
                        setSingleService={setSingleService}
                        selected={selected}

                    ></ServiceOption>} */}
                <ServiceOption
                        singleService={singleService}
                        setSingleService={setSingleService}
                        selected={selected}
                        refetch={refetch}
                ></ServiceOption>
            </div>

        </div>
    );
};

export default ServiceConteiner;