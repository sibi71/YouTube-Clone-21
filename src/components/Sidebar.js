import React, { useState } from 'react'
import { SiderBarItems } from "../static/data"
import "../App.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const [active ,setActive]=useState("Home")
  return (
    <div className=" yt-scrollbar w-60 bg-yt-black h-[calc(105vh-53px)] mt-14 fixed top-0 left-0 text-yt-white p-3 overflow-scroll sidebar">
        <div  className="mb-4">
          {SiderBarItems.Top.map((item,index)=>{
            return (
              <div key={index} 
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1
               ${item.name === active?"bg-yt-light-black":"bg-yt-black" }`}
              onClick={()=>setActive(item.name)}
              >
                
                <span className=" mr-5">{item.icon}</span>
                <p className="text-sm p-2 font-medium"><Link to="/" >{item.name}</Link>
                </p>
              </div>
            )
          })}
        </div>
        <hr className="text-yt-light-black my-2"/>
        <div  className="mb-4">
          {SiderBarItems.Middle.map((item,index)=>{
            return (
              <div key={index} 
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1
               ${item.name === active?"bg-yt-light-black":"bg-yt-black" }`}
              onClick={()=>setActive(item.name)}
              >
                <span className=" mr-5">{item.icon}</span>
                <p className="text-sm p-2 font-medium">{item.name}</p>
              </div>
            )
          })}
        </div>
        <hr className="text-yt-light-black my-2"/>
        <h2 className="px-3 pt-1 ">Explore</h2>
        <div  className="mb-4">
          {SiderBarItems.Explore.map((item,index)=>{
            return (
              <div key={index} 
              className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black my-1
               ${item.name === active?"bg-yt-light-black":"bg-yt-black" }`}
              onClick={()=>setActive(item.name)}
              >
                <span className=" mr-5">{item.icon}</span>
                <p className="text-sm p-2 font-medium">{item.name}</p>
              </div>
            )
          })}
        </div>
        <hr className="text-yt-light-black my-2"/>
    </div>
  )
}

export default Sidebar