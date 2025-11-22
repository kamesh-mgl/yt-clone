import React from 'react'
import { MdVerified } from "react-icons/md";


const Video_comp = ({ name, channel, thumbnail, duration, channelLogo, views, uploadTime }) => {
  // console.log(name)
  return (
    <div className='p-2 flex flex-col w-[260px] h-[260px] rounded-xl cursor-pointer hover:bg-yt-light-1'>
      <div className='w-full relative'>
        <img src={thumbnail} alt="no image" className='rounded-xl h-[150px] w-full overflow-hidden' />
        <p className='absolute top-[85%] right-2 text-yt-white bg-yt-black text-xs px-1 rounded'>{duration}</p>
      </div>
      <div className='flex mt-3 bg-none'>
        <img
          src="https://yt3.googleusercontent.com/p4TyMutaPSAFZNzFWSGHM0rbT59hPYuAhvMFfpi6uyNJyRLeUG5og5x91rtE6vnb5Vq1TcWT=s160-c-k-c0x00ffffff-no-rj"
          alt=""
          className='h-9 w-9 rounded-full' />
        <div className='ml-2'>
          <h2 className='text-sm font-medium text-yt-white mt-0 mb-0 items-center'>
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

export default Video_comp