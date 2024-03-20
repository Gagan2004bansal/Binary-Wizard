import React, { useState } from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const SearchAi = ({ data }) => {
    const [image, setImage] = useState(null);
    // const [searching, setSearching] = useState(false);
    const [error, setError] = useState(null);
    const [printing, setPrinting] = useState("");
    const [phrases, setPhrases] = useState("");

    const uploadImage = async (event) => {
        const files = event.target.files;
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'CloudStore');

        try {
            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dz5ezyudo/image/upload',
                {
                    method: 'POST',
                    body: formData
                }
            );

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            // console.log(data.secure_url);
            setImage(data.secure_url); // Store the image URL in state
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };




    // const handleSubmit = async () => {
    //     console.log(image);
    //     try {
    //         console.log(image);
    //         const respone = await axios.post('http://localhost:3001/getData', { image });
    //         toast.success("Fetched Successfully");

    //         console.log(respone.data);
    //         setPrinting(respone.data.output);
    //         setPhrases(respone.data.keyPhrases);
    //         console.log(phrases);
    //         console.log('String sent successfully');
    //     } catch (error) {
    //         toast.error("Can't Send");
    //         console.error('Error sending string:', error);
    //     }
    // };

    const [attributes, setAttributes] = useState({});
    // State to hold input values
    const [keyInput, setKeyInput] = useState('');
    const [valueInput, setValueInput] = useState('');

    // Function to handle input change for key
    const handleKeyInputChange = (event) => {
        setKeyInput(event.target.value);
    };

    // Function to handle input change for value
    const handleValueInputChange = (event) => {
        setValueInput(event.target.value);
    };

    // Function to handle form submission
    const formhandleSubmit = (event) => {
        event.preventDefault();
        // Add new key-value pair to the state
        setAttributes(prevAttributes => ({
            ...prevAttributes,
            [keyInput]: valueInput
        }));

        // Clear input fields after submission
        setKeyInput('');
        setValueInput('');
    };


    const sendSubmit = async () => {
        try {
            // console.log(image);
            // const respone = await axios.post('http://localhost:3001/getData', { attributes });
            // console.log(respone.data);
            console.log(image);
            const respone = await axios.post('http://localhost:3001/getData', { image, attributes });
            toast.success("Fetched Successfully");

            console.log(respone.data);
            setPrinting(respone.data.output);
            setPhrases(respone.data.keyPhrases);
            console.log(phrases);
            console.log('String sent successfully');
        } catch (error) {
            toast.error("Can't Send");
            console.error('Error sending Object:', error);
        }
    };



    return (
        <div className='AI'>
            <div className='bg-slate-300 h-full flex flex-col p-10 gap-y-2 overflow-y-scroll '>

                <div className='flex flex-col justify-start w-full h-2/5'>
                    <div className='gap-2'>
                        <div className='mt-10'>
                            <div className='border-4 flex items-center justify-center bg-white p-2 rounded-2xl shadow-xl '>
                                <input type="file" onChange={uploadImage} className=' cursor-pointer bg-white p-2 rounded-md' />
                                <button className='bg-sky-400 hover:bg-sky-500 transition-all all ease-in-out text-white px-10 py-2 rounded-md font-medium cursor-pointer' onClick={sendSubmit}>Send</button>
                            </div>
                            {error && <div>Error: {error}</div>}
                            {image ? (
                                <div className='border-4 mt-5 p-4 rounded-lg border-slate-500 shadow-2xl mb-10 bg-slate-200'>
                                    {image && (
                                        <div>
                                            <h2 className='my-2 text-[25px] font-bold text-slate-800'>Uploaded Image:</h2>
                                            <div className='p-4'>
                                                <CloudinaryContext cloudName="dz5ezyudo">
                                                    <Image publicId={image}>
                                                        <Transformation width="300" height="300" crop="fill" />
                                                    </Image>
                                                </CloudinaryContext>
                                            </div>
                                        </div>
                                    )}
                                    <div className='p-2 text-slate-500 font-bold'>
                                        {printing ? (
                                            <span className='text-[25px] text-slate-800'> Image Description : </span>
                                        ) : (
                                            <div></div>
                                        )}
                                        {printing}
                                    </div>
                                    <div className='p-2 text-slate-500 font-bold'>
                                        {phrases ? (
                                            <span className='text-[25px] text-slate-800'> Key Phrases : </span>
                                        ) : (
                                            <div></div>
                                        )}
                                        {phrases}
                                    </div>
                                    <div className='p-2 text-slate-500 font-bold'>
                                        {image ? (
                                            <div>
                                                <span className='text-[25px] text-slate-800'>Want to add custom Attributes :</span>
                                                <div>
                                                    <form onSubmit={formhandleSubmit} className='flex flex-col'>
                                                        <label>
                                                            Key:
                                                            <input type="text" value={keyInput} onChange={handleKeyInputChange} className='px-2 py-1 ml-4 mb-2 rounded-lg' />
                                                        </label>
                                                        <label>
                                                            Value:
                                                            <input type="text" value={valueInput} onChange={handleValueInputChange} className='px-2 py-1 ml-2 rounded-lg' />
                                                        </label>
                                                        <button type="submit" className='bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 w-fit rounded-md my-3'>Add Attribute</button>
                                                    </form>
                                                    <ul>
                                                        {/* Render the key-value pairs */}
                                                        {Object.entries(attributes).map(([key, value]) => (
                                                            <li key={key}>
                                                                <strong>{key}:</strong> {value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {/* <button onClick={sendSubmit}>Send</button> */}
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                    </div>
                                </div>
                            ) : (<div className='flex mt-10 justify-center text-[25px] text-slate-800'> How can I help you today?</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchAi;
