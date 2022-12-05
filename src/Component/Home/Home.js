import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../Assert/pic2.png'
import user1 from '../../Assert/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import user2 from '../../Assert/two.jpg'
import user3 from '../../Assert/four.jpg'


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='h-full' >
            <div className='flex' >
                <div className='w-7/12 flex justify-center border-rounded border-solid mx-[50px] '>
                    <div className='mt-[40px] ' >
                        <h2 className='text-6xl  leading-tight font-bold  '>Your Next Pc</h2>
                        <h2 className='text-6xl text-blue-700 leading-tight font-bold '>Your Best Pc</h2>
                        <p className='text-base pt-5' >
                            Yes- it is a highly competitive price for a laptop, which is intended for minimal usage, such as schoolwork or business travelling
                        </p>
                        <button onClick={() => navigate('/blog')} className=' mt-8  bg-blue-200 px-7  
                    py-3 text-blue-700 rounded  ' > Live Demo </button>
                    </div>

                </div>
                <div className=' w-5/12 ' >
                    <img src={image} alt="" />
                </div>
            </div>

            <div className='flex justify-center'>
                <div>
                    <h2 className=' font-medium text-4xl mt-[80px]'>Customer Reviews(3)</h2>
                </div>
            </div>
            <div className='flex justify-center items-center h-80 mx-5 '>
                <div className='flex  p-2 m-2 w-3/4 shadow-lg shadow-gray-400 ' >
                    <div className='w-[85px]  h-[90px]  ' >
                        <img src={user1} className='rounded-full' alt="" />
                    </div>
                    <div className=' ml-5 ' >
                        <h4 className='text-xl' >Carrissa Phillipson</h4>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStarHalf} />
                        <p className='text-sm' >I am a university student so all I used this laptop to do is research, read emails, write papers, etc. Basic college stuff.</p>
                    </div>
                </div>
                <div className='flex  p-2 m-2 w-3/4 shadow-lg shadow-gray-400 ' >
                    <div className='w-[90px]  h-[90px]  ' >
                        <img src={user2} className='rounded-full' alt="" />
                    </div>
                    <div className=' ml-5 ' >
                        <h4 className='text-xl' >philpshon</h4>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStarHalf} />
                        <p className='text-sm' >I am a university student so all I used this laptop to do is research, read emails, write papers, etc. Basic college stuff. </p>
                    </div>
                </div>
                <div className='flex  p-4 m-2  w-3/4 shadow-lg shadow-gray-400' >
                    <div className='w-[75px]  h-[85px]  ' >
                        <img src={user3} className='rounded-full' alt="" />
                    </div>
                    <div className='ml-5' >
                        <h4 className='text-xl' >roy</h4>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStarHalf} />
                        <p className='text-sm' >The laptop was up to expectations until the occurrence of unexpected </p>
                    </div>
                </div>

            </div>
            <div className=' h-[100px]  flex justify-items-center items-center' >
                <button onClick={() => navigate('/review')} className='  bg-blue-200 px-7  
                    py-3 text-blue-700 rounded  mx-auto  ' > show more reviews </button>
            </div>



        </div>
    );
};

export default Home;