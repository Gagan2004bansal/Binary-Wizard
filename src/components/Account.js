import React from 'react';


const Account = () => {


    const downloadCSV = async () => {
        try {
            const response = await fetch('http://localhost:3001/downloadCSV');
            const blob = await response.blob();

            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'data.csv';
            link.click();
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className='ninety-vh p-10 bg-slate-300 overflow-y-scroll'>
            <div className='pb-2 border-b-2 text-[20px] w-fit font-bold'>
                Get your Data in One Click
            </div>
            <div>
                <button onClick={downloadCSV} className='px-10 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-md mt-6'>Export Data</button>
            </div>

        </div>
    )
}

export default Account
