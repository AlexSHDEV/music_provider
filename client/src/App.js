import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {BrowserRouter} from 'react-router-dom';

import AppRouter from "./components/AppRouter";
import MainBar from './components/MainBar';
import Nav from './components/Nav';
import Player from './components/Player';

import './css/base_styles.css'
import './css/content_styles.css'
import './css/Auth.css'
import './css/Admin.css'
import './css/Playlist.css'
import background from "./homepage.jpg"



const App = observer(() => {
  const {user} = useContext(Context);
  const {band} = useContext(Context);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  if (band.band.img !== null){
    background = process.env.REACT_APP_API_URL + band.band.img
  }

  if (token !== 'null'){
    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <p> LOADING...</p>
    }
  }


  return (
    <BrowserRouter>
      <div className = "background-image" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}/>
        <Nav/>
        <div className = "site-wrap" style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <MainBar/>
          <Player/>
          <AppRouter />
        </div>

    </BrowserRouter>
  );
});

export default App;
