import {makeAutoObservable} from "mobx";

export default class BandStore {
    constructor() {

        this._band = {img: null, name: null}
        this._albums = []
        makeAutoObservable(this)
    }

    setBand(band) {
        this._band = band
    }
    setAlbums(albums) {
        this._albums = albums
    }

    get band() {
        return this._band
    }
    get albums() {
        return this._albums
    }

}
