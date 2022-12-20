import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useLocation, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {LOGIN_ROUTE, HOME_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [loginput, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
          try {
              let data;
              if (isLogin) {
                  data = await login(loginput, password);
              } else {
                  data = await registration(loginput, password);
              }
              user.setUser(user);
              user.setIsAuth(true);
              console.log(user);
              navigate(HOME_ROUTE);
              window.location.reload();
          } catch (e) {
              alert(e.response.data.message)
          }

      }

  return (
    <div className="site-content">

      <div className="auth-window">
        <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>

        <form>
          <input type="text" placeholder="login" onChange={e => setLogin(e.target.value)}/>
        </form>

        <form>
          <input type="Password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        </form>
        <button onClick={click}> Confirm </button>
      </div>

    </div>
  );
});

export default Auth;
