import React from 'react'
import { MdVerified } from "react-icons/md";


const Recommend = ({ name, channel, thumbnail, duration, channelLogo, views, uploadTime }) => {
    // console.log(name)
    return (
        <div className='p-1 flex flex-row w-[345px] items-center cursor-pointer'>
            <div className='relative'>
               <div className='rounded-xl h-[110px] w-[180px] overflow-hidden'>
                 <img src={thumbnail} alt="no image" className='rounded-xl h-full w-full overflow-hidden' />
               </div>
                <p className='absolute top-[80%] right-2 text-yt-white bg-yt-black text-xs px-1 rounded'>{duration}</p>
            </div>
            <div className='flex flex-row bg-none items-center'>
                <div className='ml-2'>
                    <h2 className='text-xs font-medium text-yt-white mt-0 mb-0 items-center'>
                        {
                            name.length <= 50 ? name : `${name.substr(0, 50)}...`

                        }</h2>
                    <h3 className='flex items-center text-yt-gray text-xs mt-1'>
                        {channel}
                        <span className='pl-1 pt-0.5'><MdVerified /></span>
                    </h3>
                    <div className='font-medium text-yt-gray text-xs mt-1'>
                        <span>{views} views · {uploadTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommend