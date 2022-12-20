import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {fetchBand, fetchAlbums} from "../http/bandAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import AlbumItem from "../components/AlbumItem"


const Band = observer(() => {
  const {band} = useContext(Context);
  const {id} = useParams()
  const albs = band.albums.map((obj) => <AlbumItem key={obj.id} {...obj} />)
  useEffect(() => {
    async function fetchData(){
      await fetchBand(id).then(data => band.setBand(data))
      await fetchAlbums(id).then(data => band.setAlbums(data))
    }
    fetchData();
  }, []);

  if (band.albums.length > 0){
    console.log(band.albums[0])
  }

  document.title = 'Musa | ' + band.band.name;

  return (
    <div className="site-content">
      <div className="news-stroke">

        {albs}

      </div>
    </div>
  );
});

export default Band;
