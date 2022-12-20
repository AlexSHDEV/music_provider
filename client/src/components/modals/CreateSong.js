import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {createSong, fetchBandByName, fetchAlbumByName} from "../../http/bandAPI";
import {observer} from "mobx-react-lite";

const CreateSong = observer(({show, onHide}) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [year, setYear] = useState('')
    const [bandid, setBandid] = useState(0)
    const [band, setBand] = useState('')
    const [albumid, setAlbumid] = useState(0)
    const [album, setAlbum] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const acceptBand = () => {
      fetchBandByName(band).then(data => setBandid(data))
      console.log(bandid.id)
    }

    const acceptAlbum = () => {
      fetchAlbumByName(album).then(data => setAlbumid(data))
      console.log(albumid.id)
    }

    const addSong = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('aud', file)
        formData.append('year', year)
        formData.append('bandId', bandid.id)
        formData.append('albumId', albumid.id)
        console.log(bandid.id)
        createSong(formData)
    }

    return (
      <div className="add-window">
        <h2>Add song</h2>

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
          <input type="text" placeholder="album" onChange={e => setAlbum(e.target.value)}/>
        </form>
        <button onClick = {acceptAlbum}>
        accept
        </button>
        <form>
          <input type="number"  minLength = "4" maxLength="4" placeholder="year" onChange={e => setYear(e.target.value)}/>
        </form>
        <form>
          <input type="file" onChange={selectFile}/>
        </form>
        <button onClick={addSong}> Confirm </button>

      </div>
    );
});

export default CreateSong;
