import React from 'react';
import guide1 from "../images/g1.png";
import guide2 from "../images/g2.png";
import guide3 from "../images/g3.png";
import guide4 from "../images/g4.png";


const Help = () => {
    return (
        <div className='ninety-vh p-10 bg-slate-300 overflow-y-scroll'>
            <div className=''>
                <p className='font-bold text-2xl border-b-2 pb-2'>Guide For Using AI</p>
            </div>
            <div>
                <p className='text-[25px] mt-8'>Learn Step by Step</p>
            </div>
            <div className='mt-4 border p-2 rounded-md text-slate-500 bg-slate-200'>
                <p className='text-[20px]'>Step 1.</p>
                <img src={guide1} alt='error' className='w-4/12 rounded-md py-2' />
                <p className='text-[20px]'>Choose image that you want to catalogue</p>
            </div>
            <div className='mt-4 border p-2 rounded-md text-slate-500 bg-slate-200'>
                <p className='text-[20px]'>Step 1.</p>
                <img src={guide2} alt='error' className='w-4/12' />
                <p className='text-[20px]'>After choosing Image that you want to catalogue it shows here.</p>
            </div>
            <div className='mt-4 border p-2 rounded-md text-slate-500 bg-slate-200'>
                <p className='text-[20px]'>Step 3.</p>
                <img src={guide3} alt='error' className='w-4/12 rounded-md py-2' />
                <p className='text-[20px]'>Click on Send Button it take upto 30 seconds to compute and after that</p>
            </div>
            <div className='mt-4 border p-2 rounded-md text-slate-500 bg-slate-200'>
                <p className='text-[20px]'>Step 4.</p>
                <img src={guide4} alt='error' className='w-4/12 rounded-md py-2' />
                <p className='text-[20px]'>it shows some description of our image and store in our database</p>
            </div>
        </div>
    )
}

export default Help
