import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();

   const login = useGoogleLogin({
      onSuccess: (tokenResponse) => {
         navigate("/dashboard", {
            state: { accessToken: tokenResponse.access_token },
         });
      },
      flow: "implicit",
   });

   return (
      <div>
         <button className="google__btn" onClick={() => login()}>
            Sign in with Google
         </button>
      </div>
   );
};

export default Login;
