import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE, PLAYLIST_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Nav = observer(()=> {
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
          user.setUser({});
          user.setIsAuth(false);
          localStorage.setItem('token', 'null');
          navigate(HOME_ROUTE);
  }

  return (
  <>
    <div className = "menu">
      <ul className="navigation">
        <li className="nav-item"><Link to={HOME_ROUTE}>Home</Link></li>
        {user.user.role === 'ADMIN' ?
          <>
            <li className="nav-item"><Link to={ADMIN_ROUTE}>Admin</Link></li>
          </>
          : <></>}
        {user.isAuth ?
          <>
            <li className="nav-item"><Link to={PLAYLIST_ROUTE}>Playlist</Link></li>
          </>
            : <></>}
        <div className="nav-log-in">
          {user.isAuth ?
            <>
            <button onClick={() => {logOut()}}>Log out</button>
            </>
            :
            <>
            <button onClick = {() => navigate(LOGIN_ROUTE)}>Sign in</button>
            <button onClick = {() => navigate(REGISTRATION_ROUTE)}>Sign up</button>
            </>
          }
        </div>
      </ul>
    </div>
    <input type="checkbox" id="nav-trigger" className="nav-trigger" />
  </>
  );
});

export default Nav;
