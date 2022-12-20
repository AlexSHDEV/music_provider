const uuid = require('uuid')
const path = require('path');
const {Album} = require('../models/models');
const ApiError = require('../error/ApiError');

class AlbumController{
  async create(req, res, next){
    try {
        let {name, genre, year, bandId} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const album = await Album.create({name, genre, year, bandId, img: fileName});
        return res.json(album);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next){
    try {
    const {id} = req.params;
    const albums = await Album.findAll({where: {bandId: id}, order: [
            ['year', 'DESC']]});
    return res.json(albums);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next){
      try {
      const {id} = req.params
      const album = await Album.findOne(
          {
              where: {id}
          },
      )
      return res.json(album);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

  async getId(req, res, next){
      try {
      const {name} = req.params
      const album = await Album.findOne({where: {name: name}})
      return res.json(album);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
  }

}

module.exports = new AlbumController();
