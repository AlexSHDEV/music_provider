const uuid = require('uuid')
const path = require('path');
const {Band, Album} = require('../models/models');
const ApiError = require('../error/ApiError');

class BandController{
  async create(req, res, next){
    try {
        let {name, country, info} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const band = await Band.create({name, country, info, img: fileName});
        return res.json(band)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  }

  //async getAll(req, res){
  //  const bands = await Band.findAll();
  //  return res.json(bands);
  //}

  async getOne(req, res, next){
      try {
      const {id} = req.params
      const band = await Band.findOne({where: {id}})
      return res.json(band);
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  }

  async getId(req, res, next){
      try {
      const {name} = req.params
      const band = await Band.findOne({where: {name: name}})
      return res.json(band);
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
  }

}

module.exports = new BandController();
