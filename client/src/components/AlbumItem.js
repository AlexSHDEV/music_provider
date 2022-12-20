import React from 'react';
import {ALBUM_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom"

const AlbumItem = (album) => {
    const navigate = useNavigate();
    return (
      <div className="album">
        <form>
          <button className="album-button" onClick = {() => navigate(ALBUM_ROUTE + `/${album.id}`)}>
            <img className="cover" src={process.env.REACT_APP_API_URL + album.img}  width="500" height="500" />
          </button>
        </form>
        <h2 className="album-text">{album.name}</h2>
      </div>
    );
};

export default AlbumItem;
