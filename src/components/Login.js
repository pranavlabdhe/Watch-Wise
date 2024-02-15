import React, { useRef, useState } from "react";
import { Header } from "./Header";
import userPicture from '../assets/user-picture.png'
import Footer from "./Footer";
import { checkValidData, checkValidSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { userAvatar } from "../utils/constants";
const Login = () => {
  const [isSign, setSign] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgSignUp, setErrorMsgSignUp] = useState("");
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch()
  // Testing193!
  const toggleSignUp = () => {
    setSign(!isSign);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed In", user);
        // navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg("Invalid Credentials");
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const message1 = checkValidSignUpData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMsgSignUp(message1);
    if (message1) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up const 
        // const  {uid, email, displayName, photoURL} = userCredential;
        const user = userCredential.user
        console.log(user);
        updateProfile(auth.currentUser,{
          displayName: name.current.value,
          photoURL:userAvatar
        }).then(()=>{
          const { uid:uid , email:email, displayName:displayName, photoURL:photoURL } = auth.currentUser
          dispatch(addUser({ uid:uid , email:email, displayName:displayName, photoURL:photoURL  }))
          console.log(user);
          // navigate("/browse");
        }).catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsgSignUp(errorCode + "-" + errorMessage);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsgSignUp(errorCode + "-" + errorMessage);
        // ..
      });
  };
  return (
    <>
      {isSign ? (
        //sign In
        <>
          <header className="showcase">
            <Header />

            <div className="d-flex justify-content-center">
              <div className="showcase-content col-12 col-sm-6 col-md-6 col-lg-6">
              <p class="text-center">Your personal movie recommeder!!</p>
              <p className="text-center">Find your perfect movie match now.</p>
                <div className="formm">
                  <form>
                    <h1 className="text-center text-white text-3xl mt-3">
                      Sign In
                    </h1>
                    <div className="d-flex justify-content-center">
                      <div className="info col-8 col-sm-8 col-md-8 col-lg-8">
                        <input
                          ref={email}
                          className="email"
                          type="email"
                          placeholder="Email or phone number"
                        />{" "}
                        <br />
                        <input
                          ref={password}
                          className="email"
                          type="password"
                          placeholder="Password"
                        />
                        <p className="text-red-500 fw-bold m-0">{errorMsg}</p>
                      </div>
                    </div>
                    <div className="btn">
                      <button
                        className="btn-primary"
                        type="submit"
                        onClick={handleSignIn}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>

                <div className="signup_1">
                  <p>New to Netflix ?</p>
                  <p
                    onClick={toggleSignUp}
                    className="text-white cursor-pointer"
                  >
                    {" "}
                    Sign up now
                  </p>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        // sign up
        <header className="showcase">
          <Header />
          <div className="d-flex justify-content-center">
            <div className="showcase-content col-12 col-sm-6 col-md-6 col-lg-6">
            <p class="text-center">Your personal movie recommeder!!</p>
            <p className="text-center">Find your perfect movie match now.</p>
              <div className="formm">
                <form>
                  <h1 className="text-center text-white text-3xl mt-3">
                    Sign Up
                  </h1>
                  {/* info col-8 col-sm-8 col-md-8 col-lg-8 */}
                  <div className="d-flex justify-content-center">
                    <div className="info col-8 col-sm-8 col-md-8 col-lg-8">
                      <input
                        ref={name}
                        className="email"
                        type="text"
                        placeholder="Name"
                      />{" "}
                      <br />
                      <input
                        ref={email}
                        className="email"
                        type="email"
                        placeholder="Email"
                      />{" "}
                      <br />
                      <input
                        ref={password}
                        className="email"
                        type="password"
                        placeholder="Password"
                      />
                      <p className="text-red-500 fw-bold m-0">
                        {errorMsgSignUp}
                      </p>
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      className="btn-primary"
                      type="submit"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="signup">
                <p>Already a member ?</p>
                <p
                  onClick={toggleSignUp}
                  className="text-white cursor-pointer ms-1"
                >
                  {" "}
                  Sign In
                </p>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Login;
