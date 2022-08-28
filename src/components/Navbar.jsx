import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
        console.log(nav);
    }

    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white text-2xl'>
            <h1 className='w-full text-3xl text-[#00ff0f]'>Claudio Ramirez</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'><a href="#">Inicio</a></li>
                <li className='p-4'><a href="#">Ramos</a></li>
                <li className='p-4'><a href="#">Tesis</a></li>
                <li className='p-4'><a href="#">Otros</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] easi-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Home</h1>
                <ul className='pt-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Ramos</li>
                    <li className='p-4 border-b border-gray-600'>Tesis</li>
                    <li className='p-4'>Otros</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;