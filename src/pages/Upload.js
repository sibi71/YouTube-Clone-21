import React,{useEffect} from 'react'
import Uploaded from '../components/Uploaded';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../Slices/userSlice';


const Upload = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser);

  
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
    < >
      <Uploaded />
    </>
  )
}

export default Upload