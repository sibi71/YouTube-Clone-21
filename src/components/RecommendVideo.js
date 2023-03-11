import React from 'react'
import { MdVerified } from 'react-icons/md'

const RecommendVideo = ({thumbnail,title,channal ,views,uploadTime}) => {
  return (
    <div className="text-yt-white flex cursor-pointer ">
        <img src={thumbnail} alt="" 
        className="h-32 w-52 rounded-2xl object-contain"></img>
        <div className='pl-2'>
            <h2 className="text-sm font-medium">
                {
                    title.length <= 70 ?title : `${title.substr(0,60)}...`
                }
            </h2>
            <p className='text-sm text-yt-gray pt-2 flex items-center'>
                {channal}
                <span className='p-1'>
            <MdVerified />
          </span>
            </p>
            <div className='flex'>
                <p className='text-xs text-yt-gray pr-1'>
                    {views} views
                </p>
                <p className='text-xs text-yt-gray pr-1'>
                    {uploadTime} 
                </p>
            </div>
           </div> 
    </div>
  )
}

export default RecommendVideo