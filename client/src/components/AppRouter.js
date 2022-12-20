import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter= observer(() => {
  const {user} = React.useContext(Context);

  console.log(user);
  return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>} exact/>
        )}
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path="*" element={<Navigate to = {HOME_ROUTE}/>}/>
    </Routes>
  );
});

export default AppRouter;
