import React from 'react'
import logoutImg from '../assets/logout.svg'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
export const Header = () => {
    
    const navigate = useNavigate()
    const user = useSelector(store=> store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
    }
  return (
    <div className="logo">
              <p className='text-center text-white text-1xl'>WATCHWISE</p>

        {
                user && <div className='logout' onClick={handleSignOut}>
                <img src={user?.photoURL} alt='logout' className='profile_img me-3 ' style={{width:'32px', height:'32px'}}/>
                <div>Logout</div> 
               <img src={logoutImg} alt='logout' className='logout_icon ms-2 ' style={{width:'18px', height:'18px'}}/>
               </div> 
               }

             

                
            </div>
            
  ) 
}
