import React, {useState} from 'react';
import CreateBand from "../components/modals/CreateBand";
import CreateAlbum from "../components/modals/CreateAlbum";
import CreateSong from "../components/modals/CreateSong";
import DeleteBand from "../components/modals/DeleteBand";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {

  const [bandVisible, setBandVisible] = useState(false)

  return (
    <div className="site-content">
      <div className="admin-table">
      <CreateBand/>
      <CreateAlbum/>
      <CreateSong/>
      <DeleteBand/>
      </div>
    </div>
  );
});

export default Admin;
