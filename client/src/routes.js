import Admin from "./pages/Admin";
import Playlist from "./pages/Playlist";
import Band from "./pages/Band";
import Album from "./pages/Album";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import {ADMIN_ROUTE, PLAYLIST_ROUTE, BAND_ROUTE, ALBUM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: PLAYLIST_ROUTE,
    Component: Playlist
  }
]

export const publicRoutes = [
  {
    path: BAND_ROUTE + '/:id',
    Component: Band
  },
  {
    path: ALBUM_ROUTE + '/:id',
    Component: Album
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: HOME_ROUTE,
    Component: Home
  }
]
