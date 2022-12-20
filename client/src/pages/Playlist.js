import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getPlaylist} from "../http/bandAPI";
import {Context} from "../index";
import SongItem from "../components/SongItem";



const Playlist = observer(() => {
  const {user, album} = useContext(Context);
  const sngs = album.songs.map((obj) => <SongItem key={obj.songId} {...obj} />)
  useEffect(() => {
    async function fetchData(){
      await getPlaylist(user.user.id).then(data => album.setSongs(data))
    }
    fetchData();
  }, []);

  return (
    <div className="site-content">
      <div className="playlist-table">
        <div className="song-show">
          <div className="bar-album-title">
            <h3 className="album-title">My Music</h3>
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

export default Playlist;
