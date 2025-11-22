import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdMic } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";



import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-yt-black h-14 pl-4 pr-5 flex justify-between items-center fixed w-full z-10'>
            <div className='flex justify-between items-center'>
                <div className="text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-black rounded-full cursor-pointer">
                    <RxHamburgerMenu />
                </div>
                <div className='w-32 pr-3'>
                    <Link to="/">
                        <img id='logo-png' className=' object-contain' src="../../public/logo.PNG" alt="Youtube" />
                    </Link>
                </div>
            </div>
            <div className="h-10 flex flex-row items-center">
                <div className='w-[593px] flex border border-yt-light-black items-center rounded-3xl h-10'>
                    <input
                        className='w-full h-10 text-yt-white text-start rounded-l-3xl bg-yt-black focus:outline-none focus:bg-yt-light-black pl-4'
                        type="text"
                        placeholder='Search' />
                    <button className='bg-yt-light-black h-10 w-13 pl-6 pe-4 py-1 rounded-r-3xl'>
                        <HiOutlineMagnifyingGlass
                            className='text-yt-white inline-block text-center' size={23}
                        />
                    </button>
                </div>
                <div>
                    <div className='ml-10 cursor-pointer text-yt-white h-10 w-10 flex items-center bg-yt-black justify-center rounded-full hover:bg-yt-light-black'>
                        <MdMic className='text-center' size={23} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='m-2 hover:bg-yt-light-black h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <BiVideoPlus className='text-center text-yt-white' size={23} />
                </div>
                <div className='m-2 hover:bg-yt-light-black h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <MdOutlineNotificationsActive className='text-center text-yt-white' size={23} />
                </div>
                <button
                    className='bg-yt-red px-3 py-1 rounded-md text-yt-white hover:bg-yt-mild-red'
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Navbar