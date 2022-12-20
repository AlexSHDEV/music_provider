import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {BAND_ROUTE} from "../utils/consts";
import {fetchBandByName} from "../http/bandAPI"
function Home(){

    const [name, setName] = useState('')
    const [bandid, setBandid] = useState(0)
    const navigate = useNavigate();

    async function go(){
      await  navigate(BAND_ROUTE + '/' + bandid.id)
    }

    const gotoband = () => {
        fetchBandByName(name).then(data => setBandid(data))
    }

    document.title = 'Musa | Home';
  return (
  <div className="site-content">

    <div className="search">
    <form>
      <input type="text" onChange={e => setName(e.target.value)}/>
    </form>
    <button onClick = {gotoband}> Confirm </button>
    <button onClick = {go}> go </button>
    </div>
  </div>

  );
};

export default Home;
