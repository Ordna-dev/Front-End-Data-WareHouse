import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile, isAdmin } from "./Profile";
import { Graphics } from './Graphics';
import { Commands } from './Commands';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const { isAuthenticated } = useAuth0();
  const [message, setMessage] = useState(null);

  const [accion, setAccion] = useState({
    accion: false
  });

  const [graphic, setGraphic] = useState({
    graphic: false
  });

  const [profile, setProfile] = useState({
    profile: true
  })

  const iniciaAccion = (order) => {
    setAccion((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
    graphic.graphic = false;
    profile.profile = false;
  };

  const iniciaGraphic = (order) => {
    setGraphic((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
    accion.accion = false;
    profile.profile = false;
  };
  
  const iniciaProfile = (order) => {
    setGraphic((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
    accion.accion = false;
    graphic.graphic = false;
  };

  const mensaje = async () => {
    try {
      let res = await axios.get('/api');
      let resultado = res.data;
      setMessage(resultado)
    } catch(e) {
      console.log(e)
    }
  };

  if (accion.accion == true) {
    return (
      <div class="container">
        {isAuthenticated ? (
          <>
            <LogoutButton />
            <nav class="menu">
            <ul class="main-menu">
                <li onClick={() => iniciaProfile("profile")}><i class="fa fa-home"></i>Home</li>
                {isAdmin && <li onClick={() => iniciaAccion("accion")}><i class="fa fa-user"></i>Acciones</li>}
                <li onClick={() => iniciaGraphic("graphic")}><i class="fa fa-search"></i>Gráficas</li>
            </ul>
            </nav>
          </>
        ) : (
          <LoginButton />
        )}
      <article>
            <div class="content" align="center">
            <Commands />
            </div>
      </article>
    </div>
    );
  };

  if (graphic.graphic == true) {
    return (
      <div class="container">
        {isAuthenticated ? (
          <>
            <LogoutButton />
            <nav class="menu">
            <ul class="main-menu">
                <li onClick={() => iniciaProfile("profile")}><i class="fa fa-home"></i>Home</li>
                {isAdmin && <li onClick={() => iniciaAccion("accion")}><i class="fa fa-user"></i>Acciones</li>}
                <li onClick={() => iniciaGraphic("graphic")}><i class="fa fa-search"></i>Gráficas</li>
            </ul>
            </nav>
          </>
        ) : (
          <LoginButton />
        )}
      <article>
            <div class="content" align="center">
            <Graphics />
            </div>
      </article>
    </div>
    );
  };

  if (profile.profile == true) {
    return (
      <div class="container">
        {isAuthenticated ? (
          <>
            <LogoutButton />
            <nav class="menu">
            <ul class="main-menu">
                <li onClick={() => iniciaProfile("profile")}><i class="fa fa-home"></i>Home</li>
                {isAdmin && <li onClick={() => iniciaAccion("accion")}><i class="fa fa-user"></i>Acciones</li>}
                <li onClick={() => iniciaGraphic("graphic")}><i class="fa fa-search"></i>Gráficas</li>
            </ul>
            </nav>
          </>
        ) : (
          <LoginButton />
        )}
        {isAuthenticated && 
          <article>
            <div class="content">
            <Profile />
            </div>
          </article>
        }
    </div>
    );
  };

  return (
    <div class="container">
        {isAuthenticated ? (
          <>
            <LogoutButton />
            <nav class="menu">
            <ul class="main-menu">
                <li onClick={() => iniciaProfile("profile")}><i class="fa fa-home"></i>Home</li>
                {isAdmin && <li onClick={() => iniciaAccion("accion")}><i class="fa fa-user"></i>Acciones</li>}
                <li onClick={() => iniciaGraphic("graphic")}><i class="fa fa-search"></i>Gráficas</li>
            </ul>
            </nav>
          </>
        ) : (
          <LoginButton />
        )}
        
        {isAuthenticated && 
          <article>
            <div class="content">
            <Profile />
            </div>
          </article>
        }
        
    </div>
  )
}

export default App;
