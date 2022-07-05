import { useEffect, useState} from 'react'
import './styles/main.css';
import jwt_decode from "jwt-decode";

function App() {
  /* store user */
  const [user, setUser] = useState({});
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("btn__signIn").hidden = true;
  }
  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("btn__signIn").hidden = false;


  }
  useEffect(() => {
    /* global google */
     google.accounts.id.initialize({
          client_id: process.env.REACT_APP_CLIENT_ID,
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
          document.getElementById("btn__signIn"), 
          { theme: 'outline', size: 'large' } 
        )
  }, [])

  return (
    <div className="App">
      <div id='btn__signIn'></div>
      {Object.keys(user).length !== 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}
      
      {user &&
        <div>
          <img src={user.picture} alt="user profile"></img>
          <h3>{user.name}</h3> 
        </div>
      }
    </div>
  );
}

export default App;
