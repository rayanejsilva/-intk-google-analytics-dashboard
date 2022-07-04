import { useEffect} from 'react'
import './styles/main.css';

function App() {
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
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
    </div>
  );
}

export default App;
