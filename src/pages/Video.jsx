import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { query, collection, doc, onSnapshot, addDoc } from 'firebase/firestore';
import { auth, db, timestamp } from "../../firebase-config"
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { categories } from '../static/data';
import Recommend from '../components/Recommend';





const Video = () => {

  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const q = query(doc(db, "videos", id));
      onSnapshot(q, (snapShot) => {
        setData(snapShot.data());
      });
    };
  }, [id])

  useEffect(() => {
    const q = query(collection(db, "videos"));
    onSnapshot(q, (snapShot) => {
      setVideos(
        snapShot.docs.map((doc) => ({
          ...doc.data(), id: doc.id,
        })
        ))
    })
  }, [])

  console.log(data);
  console.log(data?.link === "4Bsc2uI_LsM")

  const [categoryactive, setCategoryActive] = useState("All")

  return (
    <div className="py-20 px-9 bg-yt-black flex flex-row h-full">
      <div className='left flex-1'>
        <div className='flex justify-center'>
          <iframe
            src={`https://www.youtube.com/embed/${data?.link}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className='h-[500px] flex-1'>
          </iframe>
        </div>
        <div>
          <h2 className='text-yt-white font-semibold mt-3 mb-1 font-lg'>
            {data?.name}
          </h2>
          <div className='flex items-center'>
            <img className='h-10 w-10 rounded-full' src={data?.channelLogo} alt="" />
            <div className='px-3'>
              <h3 className='text-yt-white font-medium font-base'>
                {data?.channel}
              </h3>
              <p className='text-yt-gray font-sm'>{data?.subscribers} Subscribers</p>
            </div>
            <div className='items-center'>
              <button className='bg-yt-white rounded-2xl px-4 ml-5 py-2 text-yt-black text-md font-medium cursor-pointer'>Subscribe</button>
            </div>
            <div className='ml-28 h-10 flex items-center px-5 py-2 bg-yt-light-black rounded-full  hover:bg-yt-light-1'>
              <div className='flex items-center cursor-pointer '>
                <div className='flex items-center '>
                  <BiSolidLike size={28} className='text-yt-white' />
                </div>
                <p className='text-yt-white font-semibold pl-2 pr-4 text-md'>300k</p>
              </div>
              <div className='flex items-center ml-5 cursor-pointer'>
                <BiDislike size={25} className='text-yt-white' />
              </div>
            </div>
            <div className='bg-yt-light-black h-10 ml-3 px-3 rounded-full py-2 flex items-center hover:bg-yt-light-1 cursor-pointer'>
              <div className='mr-3'>
                <PiShareFatBold size={22} className='text-yt-white' />
              </div>
              <p className='text-yt-white text-md font-semibold'>Share</p>
            </div>
            <div className='bg-yt-light-black h-10 ml-3 px-3 rounded-full py-2 flex items-center hover:bg-yt-light-1 cursor-pointer'>
              <div className='mr-3'>
                <TfiDownload size={20} className='text-yt-white' />
              </div>
              <p className='text-yt-white text-md font-semibold'>Download </p>
            </div>
            <div className='bg-yt-light-black h-10 ml-3 px-1 rounded-full py-2 flex items-center hover:bg-yt-light-1 cursor-pointer'>
              <div className='m-1'>
                <BsThreeDots size={24} className='text-yt-white' />
              </div>
            </div>
          </div>
          <div className='max-w-4xl mt-3 p-3 rounded-2xl bg-yt-light-black'>
            <div className='flex items-center text-yt-white'>
              <div >
                <p>{data?.views} views</p>
              </div>
              <div className='ml-3'>
                <p>{data?.uploadTime}</p>
              </div>
            </div>
            <div className='text-yt-white mt-2'>
              <p>
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='right overflow-y-hidden flex-[0.4]'>
        <div className='p-2 h-10 flex flex-row overflow-x-scroll relative items-center scrollbar-hide'>
          {
            categories.map((ele, index) => (
              <h2 key={index} className={` ${categoryactive == ele ? "" : "hover:bg-yt-light-black"} px-3 py-1 ${categoryactive === ele ? "bg-yt-white text-yt-black" : "bg-yt-light text-yt-white"} mx-2 rounded-md break-keep font-normal text-sm whitespace-nowrap cursor-pointer`}
                onClick={() => setCategoryActive(ele)}
              >{ele}</h2>
            ))
          }
        </div>
        <div className='px-4 py-2 pt-10 grid grid-cols-yt gap-x-3 gap-y-2'>
          {
            videos.length === 0 ? (
              <div className='h-[80%]'>No videos</div>
            ) :
              (
                videos.map((ele, index) => {
                  if(ele.id!==id){
                  return (
                    <Link key={index} to={`/video/${ele.id}`}>
                      <Recommend {...ele} />
                    </Link>
                  )}
                })
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Video