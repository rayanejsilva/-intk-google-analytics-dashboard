import React, { useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from '../components/Login';
import image from '../assets/dashboard.svg';

const Home = () => {
  
  const [accessToken, setAccessToken] = useState('');

  const returnAccessToken = (values) => {
    setAccessToken(values);
  }

  return (
    <div className="home__page">
      <section className="home__section">
        <div className="home__text--header">
            <div className="underline"></div>
            <h1>
              Sign in!
            </h1>
            <p>
              Please login to your account to access Google Analytics dashboard.
            </p>
            <div className="home__section--btn">
            <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
              <Login className="login__btn" childToParent={returnAccessToken} />
            </GoogleOAuthProvider>
            </div>
        </div>
        <div className="home__section--img">
          <img src={image} className="home__img--svg" alt="dashboard"></img>
        </div>
      </section>
    </div>
  )
}

export default Home;