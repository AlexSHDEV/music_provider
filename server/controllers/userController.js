const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Playlist} = require('../models/models');

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
      )
}

class UserController{
  async registration(req, res, next){
    const {login, password, role} = req.body;
    if(!login || !password){
      return next(ApiError.badRequest('Uncorrect login or password'));
    }
    const candidate = await User.findOne({where: {login}});
    if (candidate) {
      return next(ApiError.badRequest('User already exist'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({login, role, password: hashPassword});
    const playlist = await Playlist.create({id: user.id, userId : user.id});
    const token = generateJwt(user.id, user.login, user.role);

    return res.json({token});

  }

  async login(req, res, next){
      const {login, password} = req.body
      const user = await User.findOne({where: {login}})
      if (!user) {
          return next(ApiError.internal('User not found'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
          return next(ApiError.internal('Uncorrect password'))
      }
      const token = generateJwt(user.id, user.login, user.role)
      return res.json({token})
  }

  async check(req, res, next){
      const token = generateJwt(req.user.id, req.user.login, req.user.role)
      return res.json({token})
  }
}

module.exports = new UserController();
