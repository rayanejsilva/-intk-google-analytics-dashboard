import { googleLogout } from '@react-oauth/google';

const Logout = () => {
  
    googleLogout();
    
    return (
        <div>
          <button className="google__btn" onClick={() => googleLogout}>
            Sign out
          </button>           
        </div>
    );
}

export default Logout;