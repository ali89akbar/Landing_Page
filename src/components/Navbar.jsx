import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { GrHome } from 'react-icons/gr';
import { FaHome, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isopen, setopen] = useState(false);

    const toggle = () => {
        setopen(!isopen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "price" }
    ];

    return (
        <>
        <nav style={{ color: '#010851' }} className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-xl container mx-auto flex justify-between  item-center font-medium '>
                <div className='flex space-x-14 items-center'>
                    <a href="#" style={{ color: '#010851' }} className="text-2xl font-semibold flex items-center text-black space-x-3 ">
                        <img src="" alt="" />
                        <span>AI SHOE ANALYZER</span>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                                <Link activeClass='active' spy={true} smooth={true} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>
                            
                        ))}
                    </ul>
                </div>
                <div className='space-x-12 hidden md:flex items-center'>
                    <a href="" className='hideen lg-flex items-center hover:text-secondary '><GrHome className='mr-2' /><span>Language</span></a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggle} className='text-white focus:outline-none
                    focus:text-gray-300 '>
                        {
                            isopen ? (<FaHome style={{color: '#010851'}} className='w-6 h-6 '/>) : (<FaBars style={{color: '#010851'}} className='w-6 h-6 ' />)
                        }

                    </button>
                </div>
            </div>
        </nav>
<div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isopen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
{navItems.map(({ link, path }) => (
                            
                                <Link  activeClass='active' spy={true} smooth={true} key={link} to={path} className='block text-white hover:text-gray-300 cursor-pointer' onClick={toggle}>{link}</Link>
                            
                        ))}

</div>
        </>
    );
}

export default Navbar;
