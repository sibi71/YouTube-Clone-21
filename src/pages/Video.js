import { addDoc, collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import "../App.css"
import {  Link, useParams } from 'react-router-dom';
import { auth, db, timestamp } from '../firebase';
import { AiFillLike} from "react-icons/ai"
import { RiShareForwardLine } from "react-icons/ri"
import { MdOutlineSort } from "react-icons/md"
import { HiDotsHorizontal , HiDownload} from "react-icons/hi"
import { BiDislike } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser} from "../Slices/userSlice"
import { onAuthStateChanged } from 'firebase/auth';
import Comment from '../components/Comment';
import { CategoryItems} from "../static/data"
import RecommendVideo from '../components/RecommendVideo';




const Video = () => {
    const [videos ,setVideos] = useState([])
    const [comments ,setComments] =useState([])
    const [data ,setData] = useState(null);

    const [comment , setComment] = useState("")
   

    const {id} = useParams();

    const dispatch = useDispatch()
    const user = useSelector(getUser);

    

    useEffect(()=>{
        if(id){
            const q = query(doc(db,"videos",id));
            onSnapshot(q,(snapShot)=>{
                setData(snapShot.data()) 
            });
            const commentQuary = query(collection(db,"videos",id,"comments"))
            onSnapshot(commentQuary,(snapShot)=>{
             setComments(
            snapShot.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            }))
        )
            })
        }
    },[id]);
    useEffect(()=>{
        const q = query(collection(db,"videos"));
        onSnapshot(q,(snapshot)=>{
          setVideos(
            snapshot.docs.map((doc)=>({
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
      const addComment = async(e)=>{
        e.preventDefault();
        let commentData ={
            image:user.photoURL,
            name:user.displayName,
            comment,
            uploaded:timestamp,

        }
        if(id){
            await addDoc(collection(db,"videos",id,"comments"),commentData);
            setComment("")
        }
      }
  return (
    <div className="py-20 px-9 bg-yt-black flex flex-row  overflow-scroll yt-scrollbar  h-[calc(100vh-(-40px))] ">
            <div className=" left flex-1 w-100">
                <div className="flex justify-center">
                <iframe 
                src={`https://www.youtube.com/embed/${data?.link}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; 
                clipboard-write; 
                encrypted-media; gyroscope;
                picture-in-picture; web-share" allowFullscreen
                className="w-[850px] h-[700px] flex-1"
                ></iframe>
                </div>
                <h2 className="text-yt-white font-semibold mt-3 mb-1 text-lg">
                    {data?.title}
                </h2>
                <div className="flex">
                    <div className="flex items-center">
                        <img 
                        src={data?.logo}
                        alt={data?.channal}
                        className="rounded-full w-10 h-10"
                        />
                        <div className="px-3">
                        <h3 className="text-yt-white font-medium text-base">
                            {
                            data?.channal && data?.channal.length <= 25
                            ? data?.channal:`${data?.channal && data?.channal.substr(0,20)}...`
                            }
                        </h3>
                        <p className="text-sm text-yt-gray ">
                            {data?.subscribers }<span className="pl-1"> subscribers</span>
                        </p>
                    </div>
                    <button className="bg-yt-white px-3 py-2 rounded-full text-sm font-medium ml-3 justify-center ">
                        Subscribe
                    </button>
                    <div className="flex pl-28">
                        <div className="flex bg-yt-light-black items-center rounded-2xl h-10 mx-1 hover:bg-yt-light-1 ">
                            <div className="flex px-3 items-center border-r-2  border-r-yt-light-1 cursor-pointer">
                                <AiFillLike className="text-yt-white text-2xl" />
                                <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">
                                    300k
                                </p>
                            </div>
                            <div className="cursor-pointer pl-4 pr-5">
                            <BiDislike className="text-yt-white text-2xl text-yt-white" />
                            </div>
                        </div>
                        <div className="flex bg-yt-light-black items-center rounded-2xl h-10 mx-1 cursor-pointer hover:bg-yt-light-1 ">
                            <div className="flex px-3 items-center cursor-pointer">
                                <RiShareForwardLine className=" text-2xl text-yt-white font-thin"/>
                                <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">Share</p>

                            </div>
                        </div>
                        <div className=" flex bg-yt-light-black items-center rounded-2xl h-10 mx-1 cursor-poiter hover:bg-yt-light-1">
                        <div className="flex px-3 items-center cursor-pointer">
                                <HiDownload className=" text-2xl text-yt-white font-thin"/>
                                <p className="text-yt-white pl-2 pr-3 text-sm font-semibold">Download</p>
                            </div>
                        </div>
                        <div className="flex bg-yt-black hover:bg-yt-light-1 cursor-poiter items-center rounded-full justifly-center w-10 h-10 text-yt-white ">
                            <HiDotsHorizontal />
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="max-w-4xl bg-yt-light-black mt-4 rounded-2xl text-sm p-3 text-yt-white">
                        <div className="flex ">
                            <p className="font-medium pr-3">
                                {data?.views}
                                <span className="pl-1 text-xs">Views</span>
                            </p>
                            <p className="font-medium pr-3">{data?.uploadTime}</p>
                        </div>
                        <span className="text-center font-medium">{data?.description}</span>
                    </div>
                    <div className="text-yt-white mt-5">
                        <div className="flex items-center">
                            <h1>{comments.length} Comments</h1>
                            <div className="flex items-center mx-10">
                                <MdOutlineSort size={30} className ="mx-3" />
                                <h5>Sort by</h5>
                            </div>
                        </div>
                        <div>
                            {user&& (
                                <form  
                                onSubmit={addComment}
                                className="flex w-[800px] pt-4 items-start" >
                                    <img src={user?.photoURL} 
                                    alt="profile" className="rounded-full mr-3 h-10 w-10"
                                    />
                                    <input type="text"
                                    value={comment}
                                    onChange={(e)=>setComment(e.target.value)}
                                    placeholder="Add a comment..."
                                    className="bg-[transparent] border-b boder-b-yt-light-black outline-none text-sm p-1 w-full"
                                    />
                                </form>
                            )}
                            <div
                            className="mt-4">
                                {
                                    comments.map((item,index)=>(
                                        <Comment key={index} {...item} />
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
   
        <div className="right px-3  w-[50px]  flex-[0.4] ">
            <div>
                <div className="flex flex-row px-3  overflow-x-scroll relative scrollbar-hide">
                    {  CategoryItems.map((item,index)=> {
                      return (
                     <h2 className="text-yt-white  
                     font-normal text-sm py-2 px-4 break-keep  whitespace-nowrap bg-yt-light mr-3 cursor-pointer rounded-lg hover:bg-yt-light-1"
                      key={index}>
                        {item}
                        </h2>
                     )
                     })
                    }
                </div>
            </div>
            <div className="pt-8 px-3 ">
                {
                    videos.map((Video , i)=>{
                       
                        if(Video.id!== id){
                            return(
                                <Link key={i} to={`/video/${Video.id}`} >
                                    <RecommendVideo {...Video}/>
                                </Link>
                                
                            )
                        }
                        
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Video