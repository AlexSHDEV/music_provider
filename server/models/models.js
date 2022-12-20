const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true, validate: {len: [4, 30]}},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    img: {type: DataTypes.STRING}
})

const Playlist = sequelize.define('playlist', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: "Unnamed playlist", validate: {len: [0, 30]}},
    info: {type: DataTypes.STRING, validate: {len: [0, 500]}},
    img: {type: DataTypes.STRING}
})

const PlContent = sequelize.define('playlist_content', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Song = sequelize.define('song', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: "Unnamed song", validate: {len: [0, 50]}},
    year: {type: DataTypes.STRING, validate: {len: [4, 4]}},
    aud: {type: DataTypes.STRING}
})

const Band = sequelize.define('band', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, validate: {len: [1, 50]}},
    country: {type: DataTypes.STRING, validate: {len: [0, 20]}},
    info: {type: DataTypes.STRING, validate: {len: [0, 500]}},
    img: {type: DataTypes.STRING}
})

const Album = sequelize.define('album', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: "Unnamed album", validate: {len: [1, 400]}},
    genre: {type: DataTypes.STRING, validate: {len: [0, 20]}},
    year: {type: DataTypes.STRING, validate: {len: [4, 4]}},
    img: {type: DataTypes.STRING}
})

const Singer = sequelize.define('singer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstname: {type: DataTypes.STRING, validate: {len: [1, 30]}},
    lastname: {type: DataTypes.STRING, validate: {len: [1, 30]}},
    country: {type: DataTypes.STRING, validate: {len: [0, 20]}},
    birthday: {type: DataTypes.DATEONLY},
    info: {type: DataTypes.STRING, validate: {len: [0, 500]}}
})

const SingerBand = sequelize.define('singer_band', {
  in: {type: DataTypes.DATEONLY},
  out: {type: DataTypes.DATEONLY}
})

User.hasMany(Playlist);
Playlist.belongsTo(User);

Band.hasMany(Song);
Song.belongsTo(Band);

Album.hasMany(Song);
Song.belongsTo(Album);

//Singer.hasMany(Song);
//Song.belongsTo(Singer);

Band.hasMany(Album);
Album.belongsTo(Band);

Band.belongsToMany(Singer, {through: SingerBand});
Singer.belongsToMany(Band, {through: SingerBand});

Playlist.belongsToMany(Song, {through: PlContent});
Song.belongsToMany(Playlist, {through: PlContent});

module.exports = {
  User,
  Playlist,
  PlContent,
  Song,
  Band,
  Album,
  Singer,
  SingerBand
}
