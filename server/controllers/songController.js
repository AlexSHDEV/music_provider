const uuid = require('uuid')
const path = require('path');
const sequelize = require('../db');
const {Song, PlContent} = require('../models/models');
const ApiError = require('../error/ApiError');

class SongController{
  async create(req, res, next){
    try {
        let {name, year, bandId, albumId} = req.body;
        const {aud} = req.files;
        let fileName = uuid.v4() + ".mp3";
        aud.mv(path.resolve(__dirname, '..', 'static', fileName));
        const song = await Song.create({name, year, bandId, albumId, aud: fileName});
        return res.json(song);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next){
    try {
    const {id} = req.params;
    const songs = await Song.findAll({where: {albumId: id}, order: [
            ['year', 'DESC']]});
    return res.json(songs);
  } catch (e) {
      next(ApiError.badRequest(e.message));
  }
  }

  async getPlaylist(req, res, next){
    try {
    const {id} = req.params;
    const songs = await PlContent.findAll({where: {playlistId: id}});
    return res.json(songs);
  } catch (e) {
      next(ApiError.badRequest(e.message));
  }
  }

  async pull(req, res, next){
      try {
      const {playlistid, songid} = req.params;
      const song = await PlContent.create({playlistId: playlistid, songId: songid});
      return res.json(song);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

}

module.exports = new SongController();
