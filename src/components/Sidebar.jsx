import React, { useState } from 'react'
import { sidebarItems } from '../static/data'

export const Sidebar = () => {

    const [active, setActive] = useState("Home")
    console.log(active)
    return (
        <div className='overflow-scroll scrollbar-hide bg-yt-black text-yt-white w-60 h-[calc(100vh-53px)] top-0 left-0 fixed mt-14'>
            <div className='mb-4'>
                {
                    sidebarItems.top.map((ele, index) => {
                        // console.log(ele)
                        return <div key={index} className={`w-[90%] h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                    ${ele.name === active ? "bg-yt-light-black" : "bg-yt-black"}`}
                            onClick={() => setActive(ele.name)}>
                            <div className='text-yt-white text-xl mr-5'>{ele.icon}</div>
                            <p className='text-yt-white p-1 text-sm font-medium'>{ele.name}</p>
                        </div>
                    })
                }
            </div>
            <hr className='text-yt-light-black mb-3' />

            <div className='mb-4'>
                {
                    sidebarItems.middle.map((ele, index) => {
                        // console.log(ele)
                        return <div key={index} className={`w-[90%] h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                    ${ele.name === active ? "bg-yt-light-black" : "bg-yt-black"}`}
                            onClick={() => setActive(ele.name)}>
                            <div className='text-yt-white text-xl mr-5'>{ele.icon}</div>
                            <p className='text-yt-white p-1 text-sm font-medium'>{ele.name}</p>
                        </div>
                    })
                }
            </div>
            <hr className='text-yt-light-black mb-3' />
            <div className='mb-4'>
                {
                    sidebarItems.explore.map((ele, index) => {
                        // console.log(ele)
                        return <div key={index} className={`w-[90%] h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1 
                    ${ele.name === active ? "bg-yt-light-black" : "bg-yt-black"}`}
                            onClick={() => setActive(ele.name)}>
                            <div className='text-yt-white text-xl mr-5'>{ele.icon}</div>
                            <p className='text-yt-white p-1 text-sm font-medium'>{ele.name}</p>
                        </div>
                    })
                }
            </div>
            <hr className='text-yt-light-black mb-3' />
        </div>
    )
}
