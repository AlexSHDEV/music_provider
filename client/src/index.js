import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import BandStore from "./store/BandStore";
import AlbumStore from "./store/AlbumStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    band: new BandStore(),
    album: new AlbumStore()
  }}>
    <App />
  </Context.Provider>
);
