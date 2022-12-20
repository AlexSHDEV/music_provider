import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {createAlbum, fetchBandByName} from "../../http/bandAPI";
import {observer} from "mobx-react-lite";

const CreateAlbum = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [bandid, setBandid] = useState(0)
    const [band, setBand] = useState('')
    const [file, setFile] = useState(null)
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const acceptBand = () => {
      fetchBandByName(band).then(data => setBandid(data))
      console.log(bandid.id)
    }

    const addAlbum = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('genre', genre)
        formData.append('year', year)
        formData.append('img', file)
        formData.append('bandId', bandid.id)
        console.log(bandid.id)
        createAlbum(formData)
    }

    return (
      <div className="add-window">
        <h2>Add Album</h2>

        <form>
          <input type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
        </form>

        <form>
          <input type="text" placeholder="band" onChange={e => setBand(e.target.value)}/>
        </form>
        <button onClick = {acceptBand}>
        accept
        </button>
        <form>
          <input type="text" placeholder="genre" onChange={e => setGenre(e.target.value)}/>
        </form>
        <form>
          <input type="number"  minLength = "4" maxLength="4" placeholder="year" onChange={e => setYear(e.target.value)}/>
        </form>
        <form>
          <input type="file" onChange={selectFile}/>
        </form>
        <button onClick={addAlbum}> Confirm </button>
      </div>
    );
});

export default CreateAlbum;
