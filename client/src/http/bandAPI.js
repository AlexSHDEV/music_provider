import {$authHost, $host} from "./index";

export const createBand = async (band) => {
    const {data} = await $authHost.post('api/band', band)
    return data
}

export const createAlbum = async (album) => {
    const {data} = await $authHost.post('api/album', album)
    return data
}

export const createSong = async (song) => {
    const {data} = await $authHost.post('api/song', song)
    return data
}

export const pullSong = async (song, playlist) => {
    const {data} = await $authHost.post('api/song/' + playlist + '/' + song)
    return data
}

export const getPlaylist = async (id) => {
    const {data} = await $host.get('api/song/playlist/' + id)
    return data
}

export const fetchBand = async (id) => {
    const {data} = await $host.get('api/band/' + id)
    return data
}

export const fetchBandByName = async (name) => {
    const {data} = await $host.get('api/band/name/' + name)
    return data
}

export const deleteBand = async (id) => {
    const {data} = await $authHost.delete('api/band/' + id)
    return data
}


export const fetchAlbum = async (id) => {
    const {data} = await $host.get('api/album/' + id)
    return data
}

export const fetchAlbumByName = async (name) => {
    const {data} = await $host.get('api/album/name/' + name)
    return data
}

export const fetchAlbums = async (id) => {
    const {data} = await $host.get('api/album/band/' + id)
    return data
}

export const fetchSongs = async (id) => {
    const {data} = await $host.get('api/song/' + id)
    return data
}
