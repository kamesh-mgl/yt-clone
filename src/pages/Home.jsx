import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { categories } from '../static/data'
import { uploadVideos } from '../static/uploadvideos'
import { db } from '../../firebase-config'
import { collection, doc, onSnapshot, query } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Video_comp from '../components/Video_comp'


const Home = () => {

  const [categoryactive, setCategoryActive] = useState("All")
  // useEffect(()=>{
  //  uploadVideos();
  // },[])

  const [videos, setVideos] = useState([]);
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

  console.log(videos)
  return (
    <>
      <Sidebar />
      <div className='ml-60 h-[calc(100vh-53px)] w-[calc(100%-240px)] fixed mt-12 pt-2 bg-yt-black overflow-scroll scrollbar-hide '>
        <div id='category' className='p-2 pt-4 flex flex-row overflow-scroll items-center sticky top-0 z-10 backdrop-blur-md bg-yt-black/90 scrollbar-hide'>
          {
            categories.map((ele, index) => (
              <h2 key={index} className={` ${categoryactive == ele ? "" : "hover:bg-yt-light-black"} px-3 py-1 ${categoryactive === ele ? "bg-yt-white text-yt-black" : "bg-yt-light text-yt-white"} mx-2 rounded-md break-keep font-normal text-sm whitespace-nowrap cursor-pointer`}
                onClick={() => setCategoryActive(ele)}
              >{ele}</h2>
            ))
          }
        </div>

        <div id='home-grid' className='px-4 py-2 pt-10 pb-20 gap-x-3 gap-y-6'>
          {
            videos.length === 0 ? (
              <div className='h-[80%]'>No videos</div>
            ) :
              (
                videos.map((ele, index) => {

                  if (categoryactive == "All") {
                    return (
                      <Link key={index} to={`/video/${ele.id}`}>
                        <Video_comp {...ele} />
                      </Link>
                    )
                  }
                  else {
                    if (categoryactive === ele.category) {
                      return (
                        <Link key={index} to={`/video/${ele.id}`}>
                          <Video_comp {...ele} />
                        </Link>
                      )
                    }
                  }
                })
              )
          }
        </div>

      </div>
    </>
  )
}

export default Home