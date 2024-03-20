import React from 'react';
import { Link } from 'react-router-dom';
import "./Height.css";

const Navbar = () => {
    return (
        <div>
            <div className='flex flex-wrap bg-black p-3 justify-between items-center gap-1 ten-vh'>
                <div className='font-extrabold text-3xl text-white'>
                    <Link to="/">Binary Wizard</Link>
                </div>
                <div className='flex gap-2 sm:gap-5'>
                    <Link to="/account" className='bg-slate-50 px-3 py-1 rounded-md font-medium cursor-pointer'>Account</Link>
                    <Link to="cart" className='bg-slate-50 px-3 py-1 rounded-md font-medium cursor-pointer'>Premium</Link>
                    <Link to="/help" className='bg-slate-50 px-3 py-1 rounded-md font-medium cursor-pointer'>Guide</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
