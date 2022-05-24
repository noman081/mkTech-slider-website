import React from 'react';

const Service = ({ service }) => {
    const { name, picture } = service;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 className='text-orange-500'>{name}</h2>
            </div>
        </div>
    );
};

export default Service;