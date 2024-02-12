import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [isSign, setSign] = useState(true);
  const toggleSignUp = () => {
    setSign(!isSign);
  };
  return (
    <>
      {isSign ? (
        //sign In
        <>
        <header class="showcase">
            <Header />

            <div className="d-flex justify-content-center">
              <div class="showcase-content col-12 col-sm-6 col-md-6 col-lg-6">
                <div class="formm">
                  <form>
                    <h1 className="text-center text-white text-3xl mt-3">
                      Sign In
                    </h1>
                    <div className="d-flex justify-content-center">
                      <div class="info col-8 col-sm-8 col-md-8 col-lg-8">
                        <input
                          class="email"
                          type="email"
                          placeholder="Email or phone number"
                        />{" "}
                        <br />
                        <input
                          class="email"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div class="btn">
                      <button class="btn-primary" type="submit">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>

                <div class="signup_1">
                  <p>New to Netflix ?</p>
                  <p
                    onClick={toggleSignUp}
                    className="text-white cursor-pointer"
                  > Sign up now
                  </p>
                </div>
              </div>
            </div>
          </header>

        </>
      ) : (
        // sign up
        <header class="showcase">
          <Header />
          <div className="d-flex justify-content-center">
            <div class="showcase-content col-12 col-sm-6 col-md-6 col-lg-6">
              <div class="formm">
                <form>
                  <h1 className="text-center text-white text-3xl mt-3">
                    Sign Up
                  </h1>
                  {/* info col-8 col-sm-8 col-md-8 col-lg-8 */}
                  <div className="d-flex justify-content-center">
                    <div class="info col-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                        class="email"
                        type="text"
                        placeholder="Name"
                      />{" "}
                      <br />
                      <input
                        class="email"
                        type="email"
                        placeholder="Email or phone number"
                      />{" "}
                      <br />
                      <input
                        class="email"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="btn">
                    <button class="btn-primary" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div class="signup">
                <p>Already a member ?</p>
                <p onClick={toggleSignUp} className="text-white cursor-pointer ms-1"> Sign In</p>
              </div>
            </div>
          </div>
        </header>
      )}
      <Footer />
    </>
  );
};

export default Login;
