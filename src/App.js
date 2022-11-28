import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

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
    <div>
      {message}
    </div>
  )
}

export default App;
