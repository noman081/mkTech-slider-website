import React from 'react';

const Portfolio = () => {
    return (
        <div className='bg-primary bg-cover text-white px-12 pt-14 pb-8'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://miro.medium.com/max/640/1*K2iFkHhIjhV-f9bkE3ZhJg.png' alt="Shoes" /></figure>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://assets.skyfilabs.com/images/blog/10-interesting-web-development-projects.webp' alt="Shoes" /></figure>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg' alt="Shoes" className='h-full' /></figure>
                </div>
            </div>
            <h1 className="text-3xl font-bold text-white mt-5">Some of our recent jobs are here,<br />find out more stroies.</h1>
            <button className="btn btn-secondary mt-5 text-white">See more stories like this <span className='text-3xl'> →</span></button>
        </div>
    );
};

export default Portfolio;