import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const MainBar = observer(() => {
    const location = useLocation();
    const isHome = location.pathname === HOME_ROUTE;
    const {band} = useContext(Context);

    let maintitle = 'MUSA';


  return (
  <div className="mainbar">
    <h2 className="band"><Link to= {HOME_ROUTE}>{(maintitle.toUpperCase())}</Link></h2>
    <label htmlFor="nav-trigger">

      <h3 className="menu-text">Menu</h3>
    </label>
  </div>
  );
});

export default MainBar;
