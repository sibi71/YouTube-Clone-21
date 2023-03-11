import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { CategoryItems } from '../static/data'
import { auth, db } from "../firebase"
import { collection, onSnapshot, query  } from 'firebase/firestore'
import { Link } from "react-router-dom"
import Video  from "../components/Video"
import "../App.css"
import {onAuthStateChanged} from "firebase/auth"
import { useDispatch } from 'react-redux'
import { setUser } from '../Slices/userSlice'


 


const Home = () => {
  const [videos , setVideos] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    const q = query(collection(db,"videos"))
    onSnapshot(q,(shapshot)=>{
      setVideos(
        shapshot.docs.map((doc)=>(
          {
          
          ...doc.data(),
          id:doc.id

         }))
      )
    })

  },[])

  
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(setUser(user))
      }
      else{
        dispatch(setUser(null))
      }
    })
  })

  return (
    <>
      <Sidebar/>
      <div className="W-[calc(100%-240px)] h-[calc(100%-53px)] pt-16 bg-yt-black ml-60 home">
        <div className="flex flex-row px-3 overflow-x-scroll relative scrollbar-hide ">
        {
          CategoryItems.map((item,index)=> {
            return (
               <h2 className="text-yt-white  font-normal text-sm py-2 px-4 break-keep  whitespace-nowrap bg-yt-light mr-3 cursor-pointer rounded-lg hover:bg-yt-light-1" key={index}>
              {item}
               </h2>
            )
          })
        }
        </div>
        <div className=" pt-12 px-5  h-[calc(100vh-100px)] overflow-y-scroll yt-scrollbar home__video">
          {
            videos.length === 0 ?(
              <div className="h-[86vh]"></div>
            ):(
              videos.map((video,index)=>{
                return(
                <Link to={`/video/${video.id}`} key={video.id} >
                  <Video {...video} />
                </Link>
                )
              })
            ) 
          }
        </div>
      </div>
    </>
  )
}

export default Home