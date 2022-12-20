import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {createBand} from "../../http/bandAPI";
import {observer} from "mobx-react-lite";

const CreateBand = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [info, setInfo] = useState('Some info...')
    const [file, setFile] = useState(null)
    const [country, setCountry] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addBand = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('country', country)
        formData.append('img', file)
        formData.append('info', info)
        createBand(formData).then(data => onHide())
    }

    return (
      <div className="add-window">
        <h2>Add band</h2>

        <form>
          <input type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
        </form>

        <form>
          <input type="text" placeholder="country" onChange={e => setCountry(e.target.value)}/>
        </form>

        <form>
          <input type="file" onChange={selectFile}/>
        </form>
        <button onClick={addBand}> Confirm </button>
      </div>
    );
});

export default CreateBand;
