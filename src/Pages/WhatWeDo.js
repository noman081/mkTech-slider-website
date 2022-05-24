import React, { useEffect, useState } from 'react';
import Service from './Service';

const WhatWeDo = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='bg-primary bg-cover text-white px-12 pt-14 pb-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    services.map(service => <Service key={service.name} service={service} />)
                }
            </div>
            <button className="btn btn-secondary mt-5 text-white">Check out more <span className='text-3xl'> →</span></button>
        </div>
    );
};

export default WhatWeDo;   