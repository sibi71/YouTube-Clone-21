import React from 'react'
import "../App.css"
import {MdAddAPhoto, MdAddPhotoAlternate} from "react-icons/md";
const Upload = () => {
  
const handleSubmit = (event)=>{
  event.preventDefault();


}

  return (
   <div className="pt-16 flex flex-col ">
    <form>
     <div className='py-10 px-20 w-72 h-100 m-5 flex border border-yt-light-black items-center rounded-3xl'>
      <label className='flex cursor-pointer'>
        <MdAddAPhoto size={40} className="cursor-pointer hover:text-yt-light-1"/>
       <input type="file" className='upload__input'/>
      <h5 className='py-2 px-1'>UploadVideos</h5> 
      </label>
    
     </div>
     <div className='py-10 px-20  w-72 h-100 m-5 flex border border-yt-light-black items-center rounded-3xl '>
      <label className='flex cursor-pointer' >
        <MdAddPhotoAlternate size={40} className="cursor-pointer hover:text-yt-light-1"/>
      <input type="file" className='upload__input'/>
      <h5 className='py-2 px-1'>Thumbnail</h5>
      </label>
     </div>
     <div className='py-2 px-20  w-100 h-100 m-5 bg-yt-black flex border border-yt-light-black items-center rounded-3xl '>
      <input type="text" placeholder='Title...' className=' className=" w-full bg-yt-black h-6  text-yt-white text-start align-items-center focus:outline-none' />
     </div>
     <div className='flex '>
      <button className='flex justify-center items-center py-2 px-10  w-100 h-100 m-5 bg-yt-red rounded-3xl' onClick={handleSubmit}>Submit</button>
     </div>
     </form>
   </div>
  )
}

export default Upload