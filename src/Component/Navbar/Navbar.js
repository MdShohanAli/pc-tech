import { NavLink } from 'react-router-dom';
import logo from '../../Assert/final-log.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="w-full  h-[90px] ">
            <div className="max-w-[1240px] h-full flex mx-auto px-4 justify-between items-center " >
                <div>
                    <img className=' flex justify-between items-center ' src={logo} alt="" />

                </div>
                <div className=' hidden md:flex '>
                    <div className='flex items-center courser:pointer' >
                        <NavLink className='mr-4 text-[22px] ' to={'home'} >Home</NavLink>
                        <NavLink className='mr-4 text-[22px] ' to={'blog'} >Blog</NavLink>
                        <NavLink className='mr-4 text-[22px] ' to={'review'}>Review</NavLink>
                        <NavLink className='mr-4 text-[22px] ' to={'dashboard'}>Dash-Board</NavLink>
                        <NavLink className='mr-4 text-[22px] ' to={'about'}>About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;