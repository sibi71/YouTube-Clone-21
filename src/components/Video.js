import React from 'react'

import { MdVerified } from 'react-icons/md'

const Video = ({thumbnail,duration,title ,channal,views,uploadTime,logo,name}) => {
  return (

    <div className="flex flex-col max-w-[260px] cursor-pointer  ">
      <div className=" relative w-full">
        <img src={thumbnail}
        alt={name}
        className=" h-full w-full overflow-hidden rounded-2xl" />
        <p className="absolute right-2 top-[85%] px-1 text-xs bg-yt-black text-yt-white rounded">
          {duration}
        </p>
      </div>
      <div className=" flex mt-3">
        <img 
        src={logo}
        alt={name}
        className=" h-9 w-9 rounded-full"/>
        <div className=" ml-2">
        <h2 className="font-bold text-yt-white text-sm mt-0 mb-0 items-center">
          {
            title.length <= 70 ? title : `${title.substr(0,40)}...`
          }
        </h2>
        <h3 className="text-yt-gray text-xs mt-1 flex items-center">
          {channal}
          <span className='p-1'>
            <MdVerified />
          </span>
        </h3>
        <p className="text-yt-gray m-0 font-medium text-xs">
          {views} views - {uploadTime}
        </p>
        </div>

      </div>
    </div>
  )
}

export default Video