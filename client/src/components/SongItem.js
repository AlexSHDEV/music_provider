import React, {useContext} from 'react';
import {pullSong} from "../http/bandAPI";
import {useLocation} from "react-router-dom";
import {Context} from "../index";
import {PLAYLIST_ROUTE} from "../utils/consts";


const SongItem = (song) => {
  const {user} = useContext(Context);
  const location = useLocation();
  const isPlaylist = location.pathname === PLAYLIST_ROUTE;

  const pullsong = () => {
    pullSong(song.id, user.user.id)
  }
  const deletesong = () => {
    deletesong(song.id, user.user.id)
  }

    return (
      <li className="song">
        <a> {song.name} </a>
        {(!isPlaylist ?
        <button onClick = {pullsong}> add </button> :
        <button onClick = {deletesong}> delete </button> )}

      </li>
    );
};

export default SongItem;
