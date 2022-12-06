import React from 'react';
import user1 from '../../Assert/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import user2 from '../../Assert/two.jpg'
import user3 from '../../Assert/four.jpg'
import user4 from '../../Assert/user5.jpg'
import user5 from '../../Assert/user6.jpg'
import user6 from '../../Assert/user7.jpg'

const Review = () => {
    return (
        <div className='pt-[50px]' >
            <div className='flex justify-center items-center mx-5 '>
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
            <div className='flex justify-center items-center h-80 mx-5 '>
                <div className='flex  p-2 m-2 w-3/4 shadow-lg shadow-gray-400 ' >
                    <div className='w-[85px]  h-[90px]  ' >
                        <img src={user4} className='rounded-full' alt="" />
                    </div>
                    <div className=' ml-5 ' >
                        <h4 className='text-xl' >brandon</h4>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStarHalf} />
                        <p className='text-sm' >First things first, Its the only laptop with such balanced yet powerful configuration.If you go . </p>
                    </div>
                </div>
                <div className='flex  p-2 m-2 w-3/4 shadow-lg shadow-gray-400 ' >
                    <div className='w-[90px]  h-[90px]  ' >
                        <img src={user6} className='rounded-full' alt="" />
                    </div>
                    <div className=' ml-5 ' >
                        <h4 className='text-xl' >lisa</h4>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStarHalf} />
                        <p className='text-sm' >I used more than one week it's good for light work but not good for heavy or multiple task</p>
                    </div>
                </div>
                <div className='flex  p-4 m-2  w-3/4 shadow-lg shadow-gray-400' >
                    <div className='w-[75px]  h-[45px]  ' >
                        <img src={user5} className='rounded-full' alt="" />
                    </div>
                    <div className='ml-5' >
                        <h4 className='text-xl' >allen </h4>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <FontAwesomeIcon className='text-yellow-400' icon={faStarHalf} />
                        <p className='text-sm' >Good for online class , pdf reading, excel,ppt,doc work. Battery life is good.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;