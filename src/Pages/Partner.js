import React from 'react';

const Partner = () => {
    return (
        <div className='bg-secondary bg-cover px-12 pt-28 pb-20'>
            <h1 className="text-3xl font-bold text-white">We have worked as a team <br /> and made impact together.</h1>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5">
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://t3.ftcdn.net/jpg/03/04/97/12/360_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg' alt="Shoes" /></figure>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png' alt="Shoes" /></figure>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://ih1.redbubble.net/image.393347411.1344/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.u5.jpg' alt="Shoes" /></figure>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_6Bm27JjO0xgsT6ocfW920lxBrh1bK5fFZW0gU5vLBjOHa7Xm3UWI-OUyTI5hj7SDpI&usqp=CAU' alt="Shoes" /></figure>
                </div>
            </div>
            <button className="btn btn-primary mt-5 text-white">Click for more <span className='text-3xl'> →</span></button>
        </div>
    );
};

export default Partner;