import React from 'react';
import { Link } from 'react-router-dom';
import "./Height.css";
import SearchAi from './SearchAi';
// import Slider from './Slider';
// import Card from './Card';

const HeroSection = ({ data }) => {

    return (
        <div className='w-screen'>
            <div className='flex'>
                <div className='bg-slate-300 overflow-y-scroll p-10 Home'>
                    <div className='text-[40px] text-slate-800 font-bold'>
                        Your Vision, Our AI
                    </div>
                    <p className='text-slate-600 text-[20px] mt-4'>Sign up today to start transforming your product listings with the power of AI. Your journey towards a more engaging, visible, and profitable online catalog starts here</p>
                    <div className='mt-8'>
                        <Link to="/account" className='bg-sky-400 hover:bg-sky-500 transition-all all ease-in-out text-white px-10 py-4 rounded-md font-medium cursor-pointer'>Account</Link>
                    </div>
                    <div>
                        <div className='mt-10 text-[20px] border-b-2 pb-2'>Wizard's Capabilities</div>
                        <p className='py-4 text-slate-500'>Our website uses super-smart technology to look at pictures you upload and figure out what's in them. It's like having a really clever friend who can spot all the important details in a photo. Whether it's identifying objects or describing what's happening, our AI is on the case. And the best part? It learns from your feedback, getting even better over time!</p>
                        <p className=' text-slate-500'> Once it's done analyzing, our website neatly organizes all the info into an Excel file, making it super easy for you to understand and use. So, whether you're trying to make sense of a bunch of photos or just curious about what's in them, our website has got you covered. It's like having your own personal photo analyst right at your fingertips!</p>
                    </div>
                </div>
                <div>
                    <SearchAi data={data} />
                </div>
            </div>

        </div>
    )
}

export default HeroSection
