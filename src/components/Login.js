import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import {Link, useNavigate} from 'react-router-dom';

const Login = ({ childToParent }) => {

  const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            navigate('/dashboard', {state: {accessToken: tokenResponse.access_token}});
        },
        flow: 'implicit'
    });

    return (
        <div>
                <button className="google__btn" onClick={() => login()}>
                    Sign in with Google 
                </button>           
        </div>
    );
}

export default Login;