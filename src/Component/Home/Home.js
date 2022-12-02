import React from 'react';
import image from '../../Assert/pic-1.jpg'

const Home = () => {
    return (
        <div className='flex' >
            <div className='w-1/2 flex justify-center  items-center  '>
                <div>
                    <h2 className='text-6xl'>Your Next Pc</h2>
                    <h2 className=''>Your Best Pc</h2>
                </div>
            </div>
            <div className=' w-1/2 ' >
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;