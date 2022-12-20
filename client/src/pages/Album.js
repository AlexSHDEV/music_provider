import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {fetchAlbum, fetchSongs} from "../http/bandAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import SongItem from "../components/SongItem"


const Album = observer(() => {
  const {album} = useContext(Context);
  const {id} = useParams()
  const sngs = album.songs.map((obj) => <SongItem key={obj.id} {...obj} />)

  useEffect(() => {
    async function fetchData(){
      await fetchAlbum(id).then(data => album.setAlbum(data))
      await fetchSongs(id).then(data => album.setSongs(data))
    }
    fetchData();
  }, []);


  document.title = 'Musa | ' + album.album.name;

  return (
  <div className="site-content">
    <div className="album-show">
        <img border= "10px" src = {album.songs.length > 0 ? process.env.REACT_APP_API_URL + album.album.img : ''} width="600" height="600"/>
        <div className="song-show">
          <div className="bar-album-title">
            <h3 className="album-title">{album.album.name}</h3>
          </div>
          <div className="songs-scroll-content">
            <ul className="song-list">

                  {sngs}

            </ul>
          </div>
        </div>
    </div>
  </div>
  );
});

export default Album;
