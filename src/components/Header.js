import React,{ useEffect } from 'react'
import logoutImg from '../assets/logout.svg'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store=> store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate('/')
          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({ uid:uid , email:email, displayName:displayName, photoURL:photoURL }))
             navigate('/browse')
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
              navigate('/')
            }
          });
          return () => unsubscribe() 
    },[])
  return (
    <div className="logo">
              <p className='text-center text-white text-1xl watch_wise_mobile '>WATCHWISE</p>
        
        {
                user && <div className='logout' onClick={handleSignOut}>
                <img src={user?.photoURL} alt='logout' className='profile_img'/>
               <img src={logoutImg} alt='logout' className='logout_icon ms-1 ' style={{width:'18px', height:'18px'}}/>
               </div> 
               }

             

                
            </div>
            
  ) 
}
