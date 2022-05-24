import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    const [bg, setBg] = useState('');

    const handleNormal = () => {
        setBg('');
    }
    const handleService = () => {
        setBg('bg-primary');
    }
    const handlePartner = () => {
        setBg('bg-secondary');
    }
    const handlePortfolio = () => {
        setBg('bg-primary');
    }
    return (
        <div className="drawer drawer-end drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className={`${bg} drawer-content flex flex-col p-12`}>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-white pt-10">

                    <li className='hover:uppercase hover:text-xl' onClick={handleNormal}><Link to='/'>Home</Link></li>
                    <li className='hover:uppercase hover:text-xl' onClick={handleService}><Link to='/what'>What we do</Link></li>
                    <li className='hover:uppercase hover:text-xl'><Link to='/partner' onClick={handlePartner}>Our Partner</Link></li>
                    <li className='hover:uppercase hover:text-xl'><Link to='/portfolio' onClick={handlePortfolio}>Portfolio</Link></li>
                    <li className='hover:uppercase hover:text-xl'><Link to='/contact' onClick={handleNormal}>Contact us</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Header;