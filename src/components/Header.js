import React, { useEffect } from "react";
import logoutImg from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate('/')
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const languageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="logo">
      <p className="text-center text-white text-1xl watch_wise_mobile ">
        WATCHWISE
      </p>
    <div style={{marginTop:'15px'}}>
    {user && (
        <>
        {!showGptSearch ?    <button className='me-3 pe-2 ps-2 bg-indigo-800 fw-bold ai_btn_font vibrate-1' onClick={handleGptSearchClick} >AI SEARCH</button> : <button className='me-3 pe-2 ps-2 bg-indigo-800 fw-bold ai_btn_font ' onClick={handleGptSearchClick} >GO HOME</button> }
        
           {showGptSearch && (
   
            <select className="lang_select" onChange={languageChange}>
            {SUPPORTED_LANGUAGE.map((l)=>{
                return (
                    <option key={l.identifier}>{l.identifier}</option>
                )
            })}
  </select>
           ) }
        
           <div className="logout" >
          <img src={user?.photoURL} alt="logout" className="profile_img" />
          <img
            src={logoutImg} onClick={handleSignOut}
            alt="logout"
            className="logout_icon ms-1 "
            style={{ width: "18px", height: "18px" }}
          />
        </div>
        </>
     
      )}
    </div>
    </div>
  );
};
