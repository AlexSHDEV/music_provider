import {makeAutoObservable} from "mobx";

export default class AlbumStore {
    constructor() {

        this._album = {}
        this._songs = []
        makeAutoObservable(this)
    }

    setAlbum(album) {
        this._album = album
    }
    setSongs(songs) {
        this._songs = songs
    }

    get album() {
        return this._album
    }
    get songs() {
        return this._songs
    }

}
