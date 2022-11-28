import './App.css';
import logo from "./logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [message, setMessage] = useState(null);

  const mensaje = async () => {
    try {
      let res = await axios.get('/api');
      let resultado = res.data;
      setMessage(resultado)
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    mensaje()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  )
}

export default App;
