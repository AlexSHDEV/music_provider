import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {fetchBandByName, deleteBand} from "../../http/bandAPI";
import {observer} from "mobx-react-lite";

const DeleteBand = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [bandid, setBandid] = useState(0)

    const delband = () => {
        deleteBand(bandid)
    }

    const acceptBand = () => {
      fetchBandByName(name).then(data => setBandid(data.id))
    }

    return (
      <div className="add-window">
        <h2>Delete band</h2>

        <form>
          <input type="text" placeholder="band" onChange={e => setName(e.target.value)}/>
        </form>
        <button onClick = {acceptBand}>
        accept
        </button>
        <button onClick={delband}> Confirm </button>
      </div>
    );
});

export default DeleteBand;
